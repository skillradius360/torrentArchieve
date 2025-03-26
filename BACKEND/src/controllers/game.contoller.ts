import { client } from "../index";
import { asyncHandler } from "../utils/asyncHandler";
import {z,ZodString} from "zod"
import apiResponse from "../utils/apiResponse";


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
    res.status(200).json(new apiResponse(200,resp,"created a gamePost"))
})

const findSinglePost = asyncHandler(async(req,res)=>{
    const {postId}= req.params

    const postSchema =z.string()
    const schemaObj= postSchema.safeParse(postId)

    console.log(schemaObj)
    if(!schemaObj.success==true){
        throw new Error("id not valid")
    }

    const dbQuery = await client.games.findUnique({
        where:{
            gameId:parseInt(postId)
        }
    })
return res.status(200).json(new apiResponse(200,dbQuery,"found data"))

})

const editAPost = asyncHandler(async(req,res)=>{
    const {postId}= req.params
    const recievedData= req.body
    const schemaIdCheck = z.string()
    const schemaDataCheck= z.object({
        title: z.string(),
        gameContent: z.string(),
        gameLinks: z.array(z.string())
    })

    const successStatus = schemaIdCheck.safeParse(postId)
    const successStatusForData = schemaIdCheck.safeParse(req.body)

    if(!successStatus.success==true&& !successStatusForData.success==true){
        throw new Error("some error occured with id validation ")
    }

    const dbObject = await client.games.update({
        where:{
            gameId:parseInt(postId)
        },data:{
            title:recievedData?.title,
            gameContent:recievedData?.gameContent,
            gameLinks:recievedData?.gameLinks
        },
        select:{
            title:true,
            gameLinks:true
        }
    })

    return res.status(200).json(new apiResponse(200,dbObject,"successfully updated Post basic Data"))
})
export {createPost,findSinglePost}