import styled from 'styled-components'
import OutilsProfil from '../outils/OutilsProfil'
import { colors, shading } from '../style/utils'
import { FaTimes } from 'react-icons/fa'
import Footer from './Footer'
import { useState } from 'react'
import submitMail from '../hooks/HookSubmitMail'

function ProfilPanel({ setDisplayPanel, homeData }) {
	const [emailChange, setEmailChange] = useState()
	submitMail(emailChange);

	return (
		<BlurZone>
			<PanelConteneur>
				<Title>Mon Profil</Title>
				<ProfilWrapper>
					<OutilsProfil homeData={homeData} />
					<MailWrapper
						method="put"
						onSubmit={(event) => {
							submitMail(event)
						}}
					>
						<MailTitle>Mail</MailTitle>
						<MailInput
							placeholder={homeData.email}
							type="text"
							onInput={(e) => setEmailChange(e.target.value)}
						/>
						<MailButton type="submit">Submit</MailButton>
					</MailWrapper>
				</ProfilWrapper>
				<CrossButton onClick={() => setDisplayPanel(false)}>
					<FaTimes />
				</CrossButton>
				<Footer />
			</PanelConteneur>
		</BlurZone>
	)
}

const BlurZone = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	width: 100%;
	height: 100%;
	z-index: 10;
	backdrop-filter: blur(2px);
	color: #1b6eb6;
	display: flex;
	align-items: center;
	justify-content: center;
`

const PanelConteneur = styled.div`
	background-color: white;
	height: 50%;
	width: 50%;
	z-index: 20;
	box-shadow: ${shading};
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`

const CrossButton = styled.button`
	width: 70px;
	height: 70px;
	border-radius: 0 0 0 30px;
	color: white;
	background-color: ${colors.primary};
	border: none;
	position: absolute;
	font-size: 30px;
	right: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		transform: scale(1.1);
	}
`
const Title = styled.h2`
	position: absolute;
	color: white;
	font-size: 40px;
	background-color: ${colors.primary};
	border-radius: 0 0 30px 0;
	padding: 10px 50px 10px 50px;
	left: 0;
	top: 0;
`
const ProfilWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 50%;
	height: 100%;
	z-index: 10;
	/* background-color: green; */
`

const MailWrapper = styled.form`
	height: 15%;
	margin-top: 70px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	/* background-color: red; */
`
const MailTitle = styled.h3`
	margin-right: 20px;
`

const MailInput = styled.input`
	border: none;
	border-radius: 15px 0 0 15px;
	padding: 10px;
	width: 70%;
	height: 40%;
	font-size: 18px;
	font-weight: bold;
	color: ${colors.primary};

	&::placeholder {
		color: ${colors.primary};
	}

	&:focus {
		outline: none;
	}
`
const MailButton = styled.button`
	background-color: ${colors.primary};
	font-size: 18px;
	font-weight: bold;
	cursor: pointer;
	border: 2px solid white;
	border-left: none;
	border-radius: 0 15px 15px 0;
	width: 20%;
	height: 40%;
	color: white;
`

export default ProfilPanel
