import styled from "styled-components"
import { colors } from "../style/utils"
import Home from "./Home/Home"

const ZoneBlanche = styled.div`

    position: absolute;
    top: 0;
    left: 0;
    background-color: ${colors.secondary};
    width: 100%;
    height: 100%;
    z-index: 10;
    opacity: 0.4;

`



function Profil(){

    return(
        <div>
        <ZoneBlanche>

        </ZoneBlanche>
        <Home></Home>
        </div>

    )
}

export default Profil