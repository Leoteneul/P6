
import Header from "../components/Header"
import LeftFix from "../components/LeftFix"
import ProfilPanel from "../components/ProfilPanel"
import RightFix from "../components/RightFix"
import { useState } from "react"
import styled from "styled-components"

function Home(){

    const [isDisplayPanel, setDisplayPanel] = useState(false)
    return (<HomeConteneur>
        <LeftFix setDisplayPanel={setDisplayPanel}/>
        <Header />
        <RightFix />
        {isDisplayPanel ? (<ProfilPanel setDisplayPanel={setDisplayPanel}/>):
      null}
        
    </HomeConteneur>
    )
}


const HomeConteneur = styled.div`

position: absolute;
left: 0;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;

`
export default Home