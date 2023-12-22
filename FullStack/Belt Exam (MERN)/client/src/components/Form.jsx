import React, {  useState } from 'react'
import axios from 'axios'


function Form(props) {

const [Name,setName]= useState("")
const [Number,setNumber]= useState(0)


const {refresh} =props

const submitHandler = (e) => {
  e.preventDefault()
  
      
        const newStore = {
          Name:Name,
          Number:Number,
        }

      axios.post("http://localhost:5001/api/store", newStore)
          .then(res => {
          console.log(res)
          refresh()
          setName("")
          setNumber(0)
         
})
.catch(err => {
    console.log(err)
})
}


  return (
    <div>
    
    <fieldset>
      Form...
      <form onSubmit={submitHandler}>
        <label>Store Name:</label><br />
      
       <input onChange={e=>{setName(e.target.value)}}  value={Name}/><br />
        <label>Store Number:</label><br />
        <input onChange={e=>{setNumber(e.target.value)}} value={Number}/><br />
        <label>Created by :</label><br />

        <input type='submit'/>
       
          
        
      </form>
      
    </fieldset>
    </div>
  )
}

export default Form