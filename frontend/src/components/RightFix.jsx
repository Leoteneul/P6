import { useState } from 'react'
import styled from 'styled-components'
import OutilSearch from '../outils/OutilSearch'
import OutilUser from '../outils/OutilUser'


function RightFix({ userData }) {

  const [tabSearch, updateTabSearch] = useState([])
  return (<RightFixContainer>

      <OutilSearch userData={userData} tabSearch={tabSearch} updateTabSearch={updateTabSearch}/>
      <OutilUser userData={tabSearch}/>
    

  </RightFixContainer>)
}

export default RightFix


const RightFixContainer = styled.div`
  height: 100%;
  width: 20%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
`



