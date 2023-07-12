import { useState, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from 'axios'
import './App.css'

function App() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/tasks').then((response) => {
            setTasks(response.data)
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
            {
                tasks.map((task) => {
                    return (
                        <>
                            <>
                                <Card>
                                    <Card.Body>
                                        <Link to={`/task/${task._id}`}>
                                            <Card.Title>{task.title}</Card.Title>

                                        </Link>
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
                            </>
                        </>
                    )
                })
            }
        </Container>
    )
}

export default App
