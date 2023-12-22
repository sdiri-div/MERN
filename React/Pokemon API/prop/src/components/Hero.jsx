import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom'

const Hero = () => {
    const Navigate= useNavigate()
    const {urlVar}= useParams()
    const [hero, setHero]= useState(null)

    useEffect(() =>{
        axios.get(`https://akabab.github.io/superhero-api/api/id/${urlVar}.json`)
        .then(res =>{
            console.log(res)
            setHero(res.data)
        })
         .catch((err)=>{
            console.log(err)
            Navigate('/error')
         })
    },[])
  return (
    <>Hero
    <h1> {urlVar} </h1>
  {/* {JSON.stringify(hero)} */}
  
  {
    hero ?(

       <div>
    <h2> {hero.name} </h2>
    <img src={hero.images.md} height="200"/>
  </div>  
    ):<p> Lading....</p>
  } 
   
   😁😁😁😁😁🤣🤣🤣🤣👌 
   
    </>
  )
}

export default Hero