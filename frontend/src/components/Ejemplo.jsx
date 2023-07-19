import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Ejemplo() {
    const [tasks, setTasks] = useState({})
    useEffect(()=>{
        axios.get('http://localhost:3000/tasks').then((response)=>{
            console.log(response.data)
            setTasks(response.data)
        })
    }, [])
    return (
        <>
            {
                tasks.map((task)=>{
                    return <p>{task.title}</p>
                })
            }
        </>
    )
}

export default Ejemplo