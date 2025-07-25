import ErrorHandler from "./error";
import { catchAsyncErrors } from "./catchAsyncErrors";
import { User } from "../models/userSchema";
import jwt from 'jsonwebtoken';

export const isAuthenticated = catchAsyncErrors(async (req,res,next) => {

    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("User Not Authenticated",400))
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id);
    next();

})