import React, { useEffect, useState } from 'react'

import axios from "axios"
import { Link }  from "react-router-dom"



const Dashbord = (props) => {

const [AllStore,setAllStores] = useState([])
const {refreshState, refresh}=props

useEffect(()=>{
 axios.get("http://localhost:5001/api/store")
    .then(res=>{
      console.log(res.data)
      setAllStores(res.data)
    })
    .catch(err =>{
      console.log(err)
      
    })
},[refreshState])

const deleteHandler = (id)=>{
  axios.delete(`http://localhost:5001/api/store/${id}`)
  .then(res => { refresh() })
  .catch(err => {
      console.log(err)
  })
}
  return (
    <div>
   
    <fieldset>
   
   {
    AllStore.map((Store)=>{
      return <div key={Store._id} >
        Store Name: <h5> {Store.Name}</h5>
        Store Number: <h5>{Store.Number} </h5>
       
        <Link to={("/oneStore/" + Store._id)} type="submit" value="More Details">More Details</Link>
        <button onClick={(e) => { deleteHandler(Store._id) }}>Delete</button>
                       <hr />   
      </div>
    })
   }
    </fieldset>
    </div>
  )
}

export default Dashbord