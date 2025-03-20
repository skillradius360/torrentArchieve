import {PrismaClient} from "@prisma/client"
import {app} from "./app"

export const client = new PrismaClient()

app.listen(8000,()=>{
    console.log("listening at port 8000")
})
