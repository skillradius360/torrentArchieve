import { client } from "../index";
import { asyncHandler } from "../utils/asyncHandler";


const createPost = asyncHandler(async(req,res)=>{
    res.status(200).json({
        msg:"this is the response"
    })
})

export {createPost}