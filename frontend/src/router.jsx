import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from './components/Pages/Home'
import CreateTask from './components/Pages/CreateTask';
import Task from './components/Pages/Task'

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateTask/>}/>
                <Route path="/task/:id" element={<Task/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes