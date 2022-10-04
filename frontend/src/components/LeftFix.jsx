import { Link } from 'react-router-dom'
import styled from 'styled-components'
import OutilsProfil from '../outils/OutilsProfil'
import Widget from '../outils/Widget'

const LeftFixConteneur = styled.div`
    padding: 40px 0 0 0;
    height: 100%;
    width: 20%;
    position: fixed;
    top: 0;
    left: 0;
  `

function LeftFix() {
  

  return (
    <LeftFixConteneur>
      <OutilsProfil />
      <Widget />
      <Link to="/profil">Profil</Link>
    </LeftFixConteneur>
  )
}

export default LeftFix
