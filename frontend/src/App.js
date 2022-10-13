import GlobalStyle from "./style/GlobalStyle"

import Home from "./pages/Home/Home"
import Login from "./pages/Login"
import { useState } from "react"


function App() {

  const [userId, setUserId] = useState()

  return (
    <div>
      <GlobalStyle />
      <Login setUserId={setUserId}/>
      <Home userId={userId} />
     
    </div>
  )
}

export default App
