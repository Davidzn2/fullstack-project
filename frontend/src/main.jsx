import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import MyRoutes from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>,
)
