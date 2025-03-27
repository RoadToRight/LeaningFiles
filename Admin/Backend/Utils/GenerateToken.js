import jwt from "jsonwebtoken";

export const generateToken = (Token) => {


    return jwt.sign({Token:"Token"},Token,{algorithm: "HS256"});
 
 
  }

