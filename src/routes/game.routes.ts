import { Router } from "express";
import { createPost } from "../controllers/game.contoller";
export const gameRouter = Router()

gameRouter.route("/createPost").get(createPost)