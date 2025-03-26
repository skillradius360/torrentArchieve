import express from "express"
import cookieParser from "cookie-parser"

export const app = express()

app.use(express.json({
    limit:'16kb'
}))

app.use(express.urlencoded({
    extended:true
}))

app.use(cookieParser())

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
import { gameRouter } from "./routes/game.routes"

app.use("/game",gameRouter)
