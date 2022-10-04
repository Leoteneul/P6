import styled from 'styled-components'
import logo from '../assets/logo.png'

const LogoConteneur = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  border-radius: 0 0 50px 50px;
  background-color: white;
  overflow: hidden;
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
