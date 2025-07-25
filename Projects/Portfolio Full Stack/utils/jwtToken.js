export const generateToken = (res,user,message,statusCode) => {

   const token  =  user.generateJsonWebToken();

   res.status(statusCode).cookie("token",token,{
    expires:new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 *60 *60 *1000),
    httpOnly:true
   }
  
).json({
    success:true,
    message,
    token,
    User

})

}