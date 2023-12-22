import React, { useState } from 'react'


const Function = (props) => {

  const [input,setInput]=useState("")
  const  [animals,setAnimals]=useState(["🐺","🦊","🦁","🐅","🐯","🐴","🦄","🦌","🦓"])
  const submitHadler=(m)=>{
    m.preventDefault()

    const animalsCopy =[...animals]
    animalsCopy.push(input)
    setAnimals(animalsCopy)
  }
  return (
    <fieldset>
    <legend>Function</legend>
    {JSON.stringify(animals)}
    {JSON.stringify(input)}
    <form onSubmit={submitHadler}>
    <label>set name</label>
    <input type='text' onChange={(e)=>{setInput(e.target.value)}}></input>
    <button type='submit'>submit</button>
    </form>
    <h1>{props.number}</h1>
    <h2>{props.obj.name} </h2>

    {/* <Display/> */}
    </fieldset>
  )
}

export default Function