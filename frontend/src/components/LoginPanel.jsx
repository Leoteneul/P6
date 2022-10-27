import styled from 'styled-components'

import { useState } from 'react'
import OutilLogin from '../outils/OutilLogin'
import OutilSignUp from '../outils/OutilSignUp'
import { colors, screenSize } from '../style/utils'
function LoginPanel() {
	const [isLoginDisplay, setLoginDisplay] = useState(true)
	return (
		<PanelConteneur>
			<BigTitle>{!isLoginDisplay ? 'Inscription' : 'Connexion'}</BigTitle>
			<TitleWrapper>
				<Title active={isLoginDisplay} onClick={() => setLoginDisplay(true)}>
					Log In
				</Title>
				<Title active={!isLoginDisplay} onClick={() => setLoginDisplay(false)}>
					Sign Up
				</Title>
			</TitleWrapper>

			{isLoginDisplay ? <OutilLogin /> : <OutilSignUp />}
		</PanelConteneur>
	)
}

const PanelConteneur = styled.div`
	height: 100%;
	width: 50%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	/* background-color: red; */

	@media (max-width: ${screenSize.tablet}) {
		width: 80%;
	}

	@media (max-width: ${screenSize.mobile}) {
		width: 100%;
		height: 100%;
	}
`

const TitleWrapper = styled.div`
	width: 100%;
	height: 5%;
	margin-top: 20px;

	/* background-color: green; */
	display: flex;
	justify-content: flex-end;
`
const Title = styled.h3`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	min-width: 20%;
	color: ${colors.primary};
	border-radius: 15px 15px 0 0;
	background-color: white;
	cursor: pointer;

	${({ active }) =>
		active &&
		`
    background: ${colors.primary};
	color: white;
	border-bottom: none;
	z-index: 15;
  `}
`
const BigTitle = styled.h1`
	color: ${colors.primary};
	font-size: 50px;
	align-self: flex-start;
	margin-top: 20px;

	@media (max-width: ${screenSize.mobile}) {
		padding-left: 20px;
		font-size: 40px;
	}
`

export default LoginPanel