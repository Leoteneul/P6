import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// import App from './App';
import Home from './pages/Home'
import Login from './pages/Login'
import User from './pages/User'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      
      <Routes>
        
        <Route path="/"  element={<Login />} />
        <Route path="/home"  element={<Home />}/>
        <Route path="/user/*"  element={<User />}/>

        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
