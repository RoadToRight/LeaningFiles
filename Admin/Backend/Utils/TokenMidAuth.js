import fs from "fs";
import jwt from "jsonwebtoken"
import { decryptJsonData } from "../Controller/CreateApiController.js";
const Path = "./routes.json"
export const VerifyToken = async (ActionName, res, sanitizedCollection, req) => {
    let PreviousData = await decryptJsonData();
    PreviousData = JSON.parse(PreviousData);
  
    let FilterPrev = PreviousData.map((item, i) => {

        if (sanitizedCollection === item.collection) {
            let PrevActions = item.actions.find((x) => {
                let Keys = Object.keys(x)[0];
                let Values = Object.values(x)[0];
                return Keys === ActionName;
            })

            // let PrevActionKey = Object.keys(PrevActions)[0]
            // console.log(PrevActions)
            
            if (Object.values(PrevActions)[0]) {
                // console.log(PrevActions.TokenDetails.TokenName,"me")
                let headers = req.headers;
                let headerToken = headers?.authorization?.split(" ")[1];
                if (!headerToken) {
                    res.json({
                        success: false,
                        message: "Token is not provided"
                    })
                }else{
                    try {
                       let PureJWTtoken = Buffer.from(headerToken,"base64url").toString("utf8")
                       console.log(PureJWTtoken)
                        let decoded = jwt.verify(PureJWTtoken, process.env.TOKEN_KEY,{algorithm:"HS256"})
                        console.log(decoded)
                        if (decoded === PrevActions.TokenDetails.TokenName) {
                            console.log("Mil rha ha")
                          return 1
                        }
                    } catch (error) {
                        res.json({
                            success: false,
                            message: "Token is Invalid!"
                        })
                    }
                }
              


            }
            else{
                console.log("no")
                return 1;
            }
            
         
        }
        
    })
    return FilterPrev[0]
    

   
}