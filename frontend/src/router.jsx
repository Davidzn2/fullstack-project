import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './components/Pages/Home'
import CreateTask from './components/Pages/CreateTask';
import Task from './components/Pages/Task'
import Ejemplo from './components/Ejemplo';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateTask/>}/>
                <Route path="/task/:id" element={<Task/>}/>
                <Route path="/tasks" element={<Ejemplo/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes