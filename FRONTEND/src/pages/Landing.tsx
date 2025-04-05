import React,{useEffect, useState} from 'react'
import axios from "axios"
import { Tabbox } from '../components/TabBox/Tabbox'
function Landing() {


  const [res,setRes] = useState([])
  const [loading,setLoading] = useState(false)
  
  interface inputData{
    image:string,
    id:string,
    description:string,
    title:string
}
  useEffect(()=>{
    (async()=>{
     try {
       const response = await axios.get("/game/findLimitedPosts/?limit=1") 
       setLoading(true)
       setRes(response.data.data)
       console.log(response)
       setLoading(false)
     } catch (error) {
      return(
        <p>Error loading Posts:- </p>
      )
     }
    })()
  },[])

  // if(loading) return (<Loading/>)
  return (
    <div>
    {res.map((data:inputData,index:number)=>(
      <div key={index+Date.now()} className='h-10 ring-green-500 ring-4'>
        <Tabbox image={data.image} description={data.description} title={data.title}/>
      </div>
    ))}
    </div>
  )
}

export default Landing