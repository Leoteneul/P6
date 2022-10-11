import styled from 'styled-components'
import { colors, screenSize, shading } from '../style/utils'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function OutilLogin() {
	const [emailLogin, setEmailLogin] = useState('')
	const [passwordLogin, setPasswordLogin] = useState('')
	const navigate = useNavigate()
	async function submitForm(e) {
		e.preventDefault()

		const rawResponse = await fetch('http://localhost:3000/api/users/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: emailLogin,
				password: passwordLogin,
			}),
		})


		const id = await rawResponse.json();
		localStorage.setItem('id', id.token)
		
	
		
		if (rawResponse.ok) {

			navigate(`/home`)
			console.log(rawResponse)
			
		}
	}

	return (
		<LoginWrapper>
			<LoginForm
				method="post"
				onSubmit={(event) => {
					submitForm(event)
				}}
			>
				<LoginTitle>Email:</LoginTitle>
				<LoginInput type="text" onInput={(e) => setEmailLogin(e.target.value)} />
				<LoginTitle>Mot de Passe:</LoginTitle>
				<LoginInput type="text" onInput={(e) => setPasswordLogin(e.target.value)} />
				<LoginButton type="submit">Se Connecter</LoginButton>
			</LoginForm>
		</LoginWrapper>
	)
}

export default OutilLogin

const LoginWrapper = styled.div`
	height: 50%;
	width: 100%;
	background-color: white;
	display: flex;
	justify-content: center;
	box-shadow: ${shading};
	border-radius: 15px 0 15px 15px;

	@media (max-width: ${screenSize.tablet}) {
		height: 60%;
		/* background-color: green; */
	}

	@media (max-width: ${screenSize.mobile}) {
		border-radius: 0;
		height: 95%;
	}
`
const LoginForm = styled.form`
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

const LoginTitle = styled.h2`
	margin-top: 40px;
`

const LoginInput = styled.input`
	border: 2px solid ${colors.primary};
	height: 10%;
	border-radius: 20px;
	padding-left: 20px;
	color: ${colors.primary};
	font-size: 20px;
	font-weight: bold;
	margin-top: 10px;

	&:focus {
		outline: none;
	}
`

const LoginButton = styled.button`
	background-color: ${colors.primary};
	height: 15%;
	padding: 0 20px 0 20px;
	color: white;
	font-size: 30px;
	font-weight: bold;
	border: none;
	margin-top: 60px;
	align-self: center;
	border-radius: 15px 15px 0 0;
	cursor: pointer;
`