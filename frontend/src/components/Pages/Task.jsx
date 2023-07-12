import { useState, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './App.css'

function App() {
    const params = useParams()

    const [task, setTask] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/tasks/${params.id}`).then((response) => {
            setTask(response.data)
        })
    })
    const setDone = (id) => {
        axios.put(`http://localhost:3000/tasks/${id}`, {
            done: true
        })
    }
    const setNotDone = (id) => {
        axios.put(`http://localhost:3000/tasks/${id}`, {
            done: false
        })
    }
    return (
        <Container>
            <Link to="/create">Crear Task</Link>
            <Card>
                <Card.Body>
                    <Card.Title>{task.title}</Card.Title>
                    {
                        task.done ? <Button onClick={() => {
                            setNotDone(task._id)
                        }}>Marcar como No completado</Button> :
                            <Button onClick={() => {
                                setDone(task._id)
                            }}>Marcar como Completado</Button>
                    }
                    <Card.Body>
                        Descripcion: {task.content}
                        {
                            task.done ? <span>✅</span> : <span>⛔️</span>
                        }
                    </Card.Body>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default App
