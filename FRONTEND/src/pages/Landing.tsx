import React,{useEffect, useState} from 'react'
import axios from "axios"
import { Tabbox } from '../components/TabBox/Tabbox'
import Loader from './Loader'
function Landing() {


  const [res,setRes] = useState([])
  const [loading,setLoading] = useState(false)
  
  interface inputData{
    image:string,
    id:string,
    gameContent:string,
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
        <Loader/>
      )
     }
    })()
  },[])

  if(res.length<1) return <Loader/>

  return (
    <div className='flex justify-center items-start
    flex-col 
    bg-[#212121]'>
    {res.map((data:inputData,index:number)=>(
      <div key={index+Date.now()} >
        <Tabbox image={data.image} gameContent={data.gameContent} title={data.title}/> 
      </div>
    ))}
    </div>
  )
}

export default Landing