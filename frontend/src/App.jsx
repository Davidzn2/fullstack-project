import { useState, useEffect } from 'react'
import { Button, Card, Container} from 'react-bootstrap';
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
    <>
      {
        tasks.map((task) => {
          return (
            <>
         

              <Container>
                <Card>
                  <Card.Body>
                    <Card.Title>Titulo {task.title}</Card.Title>
                    {
                      task.done ? <Button onClick={() => {
                        setNotDone(task._id)
                      }}>Marcar como No completado</Button> :
                        <Button onClick={() => {
                          setDone(task._id)
                        }}>Marcar como Completado</Button>
                    }
                    <Card.Body>
                      Descripcion {task.content}
                      {
                        task.done ? <span>✅</span> : <span>⛔️</span>
                      }
                    </Card.Body>
                  </Card.Body>


                </Card>
              </Container>
            </>
          )
        })
      }
    </>
  )
}

export default App
