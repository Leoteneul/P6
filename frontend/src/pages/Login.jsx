
import styled from 'styled-components'
import Header from '../components/Header'
import LoginPanel from '../components/LoginPanel'
import GlobalStyle from '../style/GlobalStyle'



function Login({ setUserId }){

    localStorage.removeItem('id')
	return (
            <LoginConteneur>
                <GlobalStyle></GlobalStyle>
                <Header />
                <LoginPanel setUserId={setUserId}></LoginPanel>
			
            </LoginConteneur>
		
	)
}



const LoginConteneur = styled.div`
position: absolute;
left: 0;
/* background-color: blueviolet; */
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;



`



export default Login