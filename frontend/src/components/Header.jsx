import styled from 'styled-components'
import logo from '../assets/logo.png'

const LogoConteneur = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 200px;
  border-radius: 0 0 50px 50px;
  background-color: white;
  overflow: hidden;

  @media (max-width: 1024px) {
    
    width: 80%;
    }
  
      @media (max-width: 450px){
      
      width: 100%;
    }
`

const Logo = styled.img`
  height: 600px;
  width: 85%;
  
`
function Header() {
  return (
    <LogoConteneur>
      <Logo src={logo} alt="logogroupo" />
    </LogoConteneur>
  )
}

export default Header
