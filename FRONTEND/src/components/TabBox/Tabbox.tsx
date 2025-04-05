
import { useEffect,useState } from "react"

interface inputData{
    image:string,
    description:string,
    title:string,
    id:string
}


export function Tabbox(props:Partial<inputData>){
    


    return (
        <>
    <div className="h-50 w-[80vw] ring-red-400 ring-4">

        <div>
            <p>{props.description}</p>
            <p>{props.title}</p>
        </div>
            <img src={props.image} alt="img" />

    </div>
        </>
    )}