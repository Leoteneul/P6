
import Home from "./pages/Home"
import Login from "./pages/Login"
import User from "./pages/User"
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  
  
  return (
    <BrowserRouter>
      
      <Routes>
        
        <Route path="/"  element={<Login />} />
        <Route path="/home"  element={<Home />}/>
        <Route path="/user/*"  element={<User />}/>

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
