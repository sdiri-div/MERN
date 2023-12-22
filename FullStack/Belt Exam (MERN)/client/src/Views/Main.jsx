import React, { useState } from 'react'
import  Dashbord from '../components/Dashbord'
import  Form  from '../components/Form'



const Main = () => {

const [refreshState,SetRefreshState] =useState(false)

const refresh =()=>{
  SetRefreshState(!refreshState)
}
  return (
    <div>
      <fieldset>
      <Form refresh={refresh} />  
   <Dashbord refresh={refresh} refreshState ={refreshState} />
   
   </fieldset>
    </div>
  )
}

export default Main