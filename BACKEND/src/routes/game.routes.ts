import { Router } from "express";
import { createPost,findSinglePost } from "../controllers/game.contoller";
export const gameRouter = Router()

gameRouter.route("/createPost").post(createPost)
gameRouter.route("/findOnePost/:postId").get(findSinglePost)