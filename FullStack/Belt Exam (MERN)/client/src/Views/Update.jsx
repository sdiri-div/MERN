import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Update = () => {
   
const [Name,setName]= useState("")
const [Number,setNumber]= useState(0)

    const navigate = useNavigate()


    const { store_id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5001/api/store/${store_id}`)
            .then(res => {
                console.log(res.data.OneStore)
                const { Name,Number } = res.data.OneStore

                setName(Name)
                setNumber(Number)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const UpdateHandler = (e) => {
        e.preventDefault()

       

        const updateStore = {
            Name,
            Number
        }

        axios.put(`http://localhost:5001/api/store/${store_id}`, updateStore)
            .then(res => {
                console.log(res)
                navigate("/")

            })
            .catch(err => {
                console.log(err)
            })

    }


    return (

        <div>
            <p>Find Stores in your area!</p>
            <fieldset>
                Form ..
                <form onSubmit={UpdateHandler}>
                    <label>Store Name  :</label><br />
                    <input onChange={e => { setName(e.target.value) }} value={Name} /><br /><br />
                    <label>Store Number  :</label><br />
                    <input onChange={e => { setNumber(e.target.value) }} value={Number} /><br /><br />
                    <label>Created By :</label><br />
                   
                    <input type="submit" value="Update" />
                </form>
            </fieldset>
        </div>
    )
}

export default Update