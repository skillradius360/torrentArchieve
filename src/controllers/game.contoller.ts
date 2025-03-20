import { client } from "../index";
import { asyncHandler } from "../utils/asyncHandler";
import {z} from "zod"


const createPost = asyncHandler(async(req,res)=>{

    const bodyParam = req.body
    function paramVerifier(requestObj:Request){
        const gameSchema = z.object({
        title: z.string(),
        gameContent: z.string(),
        gameLinks: z.array(z.string())
        })
        const success = gameSchema.safeParse(bodyParam)

        if(!success.success==true){
            return true}
        else {
        return false
        }
    }
        const isValidated:boolean = await paramVerifier(req.body)
        if(!isValidated) throw new Error("validation failure during creation!")

   const resp= await client.games.create({
    data:{
        title:bodyParam.title,
        gameContent:bodyParam.gameContent,
        gameLinks:[bodyParam.gameLinks],
        
    }
    })

    res.status(200).json({
        msg:resp
    })
})

export {createPost}