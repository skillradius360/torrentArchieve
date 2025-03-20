import {Request,Response,NextFunction, request} from "express"
 
export const asyncHandler = (fn:(req:Request,res:Response,next:NextFunction)=>Promise<any>)=>async(req:Request,res:Response,next:NextFunction)=>{
Promise.resolve(fn(req,res,next)).catch((err)=>next(err))
}