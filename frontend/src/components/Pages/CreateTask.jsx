import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'
function CreateTask() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [asignee, setAsignee] = useState('')
  const [date, setDate] = useState('')
  const createTask = () => {
    axios.post('http://localhost:3000/tasks', {
      "title": title,
      "content": content,
      "asignee": asignee,
      "done": false,
      "dueDate": date,
      "isActive": true
    })
    alert('Task creado')
  }
  return (
    <Container>
      <div>
        <Link to="/">Regresar a lista de tareas</Link>

      </div>
      <Form.Label htmlFor="title">Titulo del task</Form.Label>
      <Form.Control
        type="text"
        id="title"
        onChange={
          (event) => setTitle(event.target.value)
        }
      />
      <Form.Label htmlFor="content">Conenido</Form.Label>
      <Form.Control type="text" id="content"
        onChange={
          (event) => setContent(event.target.value)
        } />
      <Form.Label htmlFor="asignee">Quien va a hacer el task?</Form.Label>
      <Form.Control type="text" id="asignee"
        onChange={
          (event) => setAsignee(event.target.value)
        }
      />
      <Form.Label htmlFor="date">Fecha</Form.Label>
      <Form.Control type="date" id="dueDate"
        onChange={
          (event) => setDate(event.target.value)
        }
      />


      <Button onClick={createTask}>Crear Task</Button>
    </Container>
  )
}

export default CreateTask