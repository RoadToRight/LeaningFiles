import { catchAsyncErrors } from '../MIDDLEWARES/catchAsyncErrors.js';
import ErrorHandler from '../MIDDLEWARES/error.js';
import { User } from '../models/userSchema.js';
import { v2 as cloudinary } from "cloudinary";
import { generateToken } from '../utils/jwtToken.js';

export const register = catchAsyncErrors(async (req, res, next) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        return next(new ErrorHandler("Avatar and Resume are required", 400))
    }

    const { resume, avatar } = req.files;

    const cloudinaryAvatar = await cloudinary.uploader.upload(
        avatar.tempFilePath,
        { folder: "Avatars" }
    )

    if (!cloudinaryAvatar || cloudinaryAvatar.error) {
        console.log("Cloudinary Error:" + cloudinaryAvatar.error || "Unknown Cloudinary Error")
    }

    const cloudinaryResume = await cloudinary.uploader.upload(
        resume.tempFilePath,
        { folder: "Resume" }
    )
    if (!cloudinaryResume || cloudinaryResume.error) {
        console.log("Cloudinary Error:" + cloudinaryResume.error || "Unknown Cloudinary Error")
    }

    const { fullName,
        email,
        phone,
        about,
        password,
        portfolioURL,
        githubURL,
        instagramURL,
        facebookURL,
        LinkedInURL,
    } = req.body

    const user = await User.create({
        fullName,
        email,
        phone,
        about,
        password,
        portfolioURL,
        githubURL,
        instagramURL,
        facebookURL,
        LinkedInURL,
        avatar: { public_id: cloudinaryAvatar.public_id, url: cloudinaryAvatar.secure_url },
        resume: { public_id: cloudinaryResume.public_id, url: cloudinaryResume.secure_url }
    })


    generateToken(res, user, "User Registered", 200)


})

export const Login = catchAsyncErrors(async (req, res, next) => {

    const { email, password } = req.body;
    if (!email && !password) {
        return next(new ErrorHandler("Email and Password is required"))
    }

    const user = await User.findOne({ email }).select("+password");
    if (!find) {
        return next(new ErrorHandler("Email or Password is incorrect"))
    }

    let compareP = await user.comparePassword(password);
    if (!compareP) {
        return next(new ErrorHandler("Email or Password is incorrect"))
    }
    generateToken(res, user, "Logged In", 200)
})

export const logout = catchAsyncErrors(async (req, res, next) => {

    res.status(200).cookie("token", "", {
        expires: new Date(Date.now),
        httpOnly: true
    }).json({
        success: true,
        message: "Logged Out"
    })

})

export const getUser = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findById(req.user.id);
    res.status(200).json({

        success: true,
        user

    })

})

export const updateUserProfile = catchAsyncErrors(async (req, res, next) => {

    const UserNewData = {
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        about: req.body.about,
        portfolioURL: req.body.portfolioURL,
        githubURL: req.body.githubURL,
        instagramURL: req.body.instagramURL,
        facebookURL: req.body.facebookURL,
        LinkedInURL: req.body.LinkedInURL,
    }

    if (req.files && req.files.avatar) {
        const avatar = req.files.avatar;
        const user = await User.findById(req.user.id);
        const profileImageId = user.avatar.public_id;
        await cloudinary.uploader.destroy(profileImageId);
        const cloudinaryResponse = await cloudinary.uploader.upload(
            avatar.tempFilePath,
            { folder: 'Avatars' }
        )
        UserNewData.avatar = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.url
        }
    }
    if (req.files && req.files.resume) {
        const avatar = req.files.resume;
        const user = await User.findById(req.user.id);
        const profileImageId = user.resume.public_id;
        await cloudinary.uploader.destroy(profileImageId);
        const cloudinaryResponse = await cloudinary.uploader.upload(
            resume.tempFilePath,
            { folder: 'Resume' }
        )
        UserNewData.resume = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.url
        }
    }

    const user = await User.findByIdAndUpdate(req.user.id, UserNewData, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        message: "Profile Updated",
        user,
    })

})

export const updatePassword = catchAsyncErrors(async (req, res, next) => {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
        return next(new ErrorHandler("Please fill all fields", 400))
    }
    const user = await User.findById(req.user.id).select("+password");

    const isPasswordMatched = await user.comparePassword(currentPassword);

    if (!isPasswordMatched) {
        return next(new ErrorHandler("Please correct password", 400))
    }

    if (!newPassword !== confirmPassword) {
        return next(new ErrorHandler("Pasword and Confirm password not matched", 400))
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
        success: true,
        message: "Password Updated",

    })
})

export const forgotPassword = catchAsyncErrors(async (req, res, next) => {

    let user = await User.findOne(req.body.email);
    if (!user) {
        return next(new ErrorHandler("No Email Found"), 404)
    }


    let resetToken = user.getResetPasswordToken();

    const resetPasswordUrl = `${process.env.DASHBOARD_URL}/password/reset/${resetToken}`

    const message = `Your Reset Password Token is:- \n\n ${resetPasswordUrl}\n\nIf you have not requested for this please ignore it`

    await user.save({ validateBeforeSave: false })
    res.status(200).json({

        success: true,
        message:`Email sent to ${user.email} successfully`

    })
})