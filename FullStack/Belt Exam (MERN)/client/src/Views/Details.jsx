import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'
import axios from 'axios'


const Details = () => {

    const [ OneStore ,SetOneStore]=useState({})

    const { Store_id } = useParams()

     useEffect(()=>{
        axios.get(`http://localhost:5001/api/store${Store_id}`)
          .then(res => {
            console.log(res.data)
            SetOneStore(res.data.OneStore)
          })
          .catch(err => {
            console.log(err)
          })
     },[])
  return (
    <div>
        { (OneStore)?
        <div>
            Store Finder: {OneStore.name}<br/>,
           Store Number: {OneStore.Number}<br/>
            <Link to={("/update/" + OneStore._id)}>Open</Link>
        </div> :null
        }
    </div>
  )
}

export default Details