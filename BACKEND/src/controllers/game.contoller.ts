import { client } from "../index";
import { asyncHandler } from "../utils/asyncHandler";
import {number, z,ZodString} from "zod"
import apiResponse from "../utils/apiResponse";
import { response } from "express";


const createPost = asyncHandler(async(req,res)=>{

    const bodyParam = req.body
        const gameSchema = z.object({
        title: z.string(), 
        gameContent: z.string(),
        gameLinks: z.array(z.string())
        })
        
        type inferredSchema = z.infer<typeof gameSchema>

        const success = gameSchema.safeParse(bodyParam)
        console.log(bodyParam)
        if(!success) throw new Error("validation failure")

        const resp:inferredSchema= await client.games.create({
    data:{
        title:bodyParam.title,
        gameContent:bodyParam.gameContent, 
        gameLinks:[...bodyParam.gameLinks],
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
        title:z.string(),gameContent:z.string(),gameLinks:z.array(z.string())
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

const findSomePosts = asyncHandler(async(req,res)=>{
const {limit}= req.query
if(!limit){throw new Error("no limit passed")}

const posts= await client.games.findMany({
    
    orderBy:
        {
            title:'asc'
        },
        skip:(10*parseInt(limit as string ))-9,
    take:(10*parseInt(limit as string ))
    }
)

return res.status(200).json(new apiResponse(200,posts,"all posts fetched"))
})


const findPicsWithLinks = asyncHandler(async(req,res)=>{
    const response = await client.games.findMany({
        take:20
    })
    
    return res.status(200).json(new apiResponse(200,response,"pics fetched"))
})
export {createPost,findSinglePost,editAPost,findSomePosts,findPicsWithLinks}