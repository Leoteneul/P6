import styled from 'styled-components'
import { FaAt, FaUser } from 'react-icons/fa'
import { colors, shading } from '../../style/utils'
import GlobalStyle from '../../style/GlobalStyle'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'



function Widget({setDisplayPanel, homeData, isUser}) {
  const [dateState, setDateState] = useState(new Date());

  function handleCopy(){
    navigator.clipboard.writeText(homeData.email)
    alert('Email ajouté au presse papier')
  }

  useEffect(() => {
         setInterval(() => setDateState(new Date()), 30000);
  }, []);


  return (
    
    <LinkConteneur>
    <GlobalStyle />
      <StyledLink onClick={() => setDisplayPanel(true)}>
        {isUser ? (<LinkHome to='/home'>Profil</LinkHome>) 
        : 
        (<WidgetTitle>Profil</WidgetTitle>)}
        
        <StyledIcon>
          <FaUser />
        </StyledIcon>
      </StyledLink>
      <StyledLink onClick={handleCopy}>
        <WidgetTitle $isEmail >{homeData.email}</WidgetTitle>
        <StyledIcon>
          <FaAt />
        </StyledIcon>
      </StyledLink>
      <Time>{dateState.toLocaleString('fr-FR', {
        hour: 'numeric',
        minute: 'numeric',
        
      })}</Time>
    </LinkConteneur>
  )
}

export default Widget


const LinkConteneur = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 45%;
  width: 100%;
  position: relative;
  
`

const StyledLink = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  max-width: 80px;
  padding-right: 30px;
  margin-top: 20px;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  background-color: ${colors.tertiary};
  text-decoration: none;
  box-shadow: ${shading};
  cursor: pointer;

  &:hover {
    animation: widgetDisplay 1s forwards;   
  }
`

const LinkHome = styled(Link)`


  width: 300px;
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.tertiary};
  text-decoration: none;
  font-weight: bold;

`

const WidgetTitle = styled.h2`
  width: 300px;
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.tertiary};
  ${(props) =>
        props.$isEmail &&
        `font-size: 20px;`}
`

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  color: white;
  height: 70px;
  width: 70px;
  background-color: ${colors.tertiary};
`
const Time = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-radius: 0 20px 20px 0;
  height: 15%;
  min-height: 50px;
  min-width: 120px;
  background-color: white;
 
`
