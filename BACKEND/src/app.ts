import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

export const app = express()

app.use(express.json({
    limit:'16kb'
}))

app.use(express.urlencoded({
    extended:true
}))

app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    next()
})
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
import { gameRouter } from "./routes/game.routes"

app.use("/game",gameRouter)
