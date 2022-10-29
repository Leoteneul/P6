import { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { colors, screenSize, shading } from '../../style/utils'
import { hookPostSignup } from '../../hooks/ApiHook'

function OutilSignUp() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	
	// Outil qui gère le signup
	return (
		<SignUpWrapper>
			<SignUpForm
				method="post"
				onSubmit={(e) => {
					hookPostSignup(email, password, e, navigate)
				}}
			>
				<SignUpTitle>Email:</SignUpTitle>
				<SignUpInput type="text" onInput={(e) => setEmail(e.target.value)} />
				<SignUpTitle>Mot de Passe:</SignUpTitle>
				<SignUpInput type="password" onInput={(e) => setPassword(e.target.value)} />
				<SignUpButton type="submit">S'inscrire</SignUpButton>
			</SignUpForm>
		</SignUpWrapper>
	)
}

export default OutilSignUp

const SignUpWrapper = styled.div`
	height: 60%;
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
const SignUpForm = styled.form`
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`

const SignUpTitle = styled.h2`
	margin-top: 40px;
`

const SignUpInput = styled.input`
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

const SignUpButton = styled.button`
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