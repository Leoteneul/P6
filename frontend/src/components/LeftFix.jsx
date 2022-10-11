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

function LeftFix({setDisplayPanel, homeData}) {
  
  
  
  return (
    <LeftFixConteneur>
      <OutilsProfil homeData={homeData} />
      <Widget setDisplayPanel={setDisplayPanel}/>
    </LeftFixConteneur>
  )
}

export default LeftFix
