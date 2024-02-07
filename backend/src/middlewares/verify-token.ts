import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
const jwt =require('jsonwebtoken')

dotenv.config()

module.exports = (req:Request,res:Response,next:NextFunction) => {
    const token = req.headers['x-auth-token']
    let decodeToken ;
    if(!token){
        res.json({
            status : "403",
            message : "Unauthorization"
        })
    }
    try {
        decodeToken = jwt.verify(token,process.env.TOKEN_SECRET_KEY)
        next()
    } catch (error:any) {
        error.statusCode = 500
        throw error
    }
}