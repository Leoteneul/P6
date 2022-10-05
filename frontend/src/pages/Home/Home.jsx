
import Header from "../../components/Header"
import LeftFix from "../../components/LeftFix"
import ProfilPanel from "../../components/ProfilPanel"
import RightFix from "../../components/RightFix"
import { useState } from "react"

function Home(){

    const [isDisplayPanel, setDisplayPanel] = useState(false)
    return (<div>
        <LeftFix setDisplayPanel={setDisplayPanel}/>
        <Header />
        <RightFix />
        {isDisplayPanel ? (<ProfilPanel setDisplayPanel={setDisplayPanel}/>):
      null}
        

    </div>
    )
}

export default Home