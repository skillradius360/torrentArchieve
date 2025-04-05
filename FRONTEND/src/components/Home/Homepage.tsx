import axios from 'axios'
import React ,{useEffect,useState} from 'react'
import { inputData } from '../TabBox/Tabbox'

function Homepage() {
 
    const [res,setRes]= useState([])
    const [loading,setLoading]= useState(false)
useEffect(()=>{
    (async()=>{
        const response = await axios.get("/games/getImagesWithLinks")
        setLoading(true)
        setRes(response.data.data)
        setLoading(false)
    })()
},[])


  return (
    <div className='flex '>
        <div>
            {
                res.map((data:inputData,index:number)=>(
                    <div key={index+Date.now()}>
                        <img src={data.gameCover} alt="" />
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Homepage