import styled from 'styled-components'
import { FaPaperPlane, FaAt, FaUser } from 'react-icons/fa'
import { colors, shading } from '../style/utils'
import GlobalStyle from '../style/GlobalStyle'

const LinkConteneur = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50%;
  width: 100%;
  position: relative;
`

const StyledLink = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  max-width: 80px;
  padding-right: 30px;
  margin-top: 40px;
  border-radius: 0 20px 20px 0;
  overflow: hidden;
  background-color: ${colors.primary};
  text-decoration: none;
  box-shadow: ${shading};
  cursor: pointer;

  &:hover {
    animation: widgetDisplay 1s forwards;   
  }
`

const WidgetTitle = styled.h2`
  color: white;
  width: 300px;
  height: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.primary};
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
  background-color: ${colors.primary};
`
const Time = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  border-radius: 0 20px 20px 0;
  height: 15%;
  min-width: 120px;
  background-color: white;
`

function Widget({setDisplayPanel, homeData}) {
    const now = new Date()
    const heure = now.getHours()
    const minute = now.getMinutes()

  return (
    
    <LinkConteneur>
    <GlobalStyle />
      <StyledLink onClick={() => setDisplayPanel(true)}>
      
        <WidgetTitle>Profil</WidgetTitle>
        <StyledIcon>
          <FaUser />
        </StyledIcon>
      </StyledLink>
      <StyledLink>
        <WidgetTitle $isEmail >{homeData.email}</WidgetTitle>
        <StyledIcon>
          <FaAt />
        </StyledIcon>
      </StyledLink>
      <StyledLink>
        <WidgetTitle>Contact</WidgetTitle>
        <StyledIcon>
          <FaPaperPlane />
        </StyledIcon>
      </StyledLink>
      <Time>{heure}:{minute}</Time>
    </LinkConteneur>
  )
}

export default Widget
