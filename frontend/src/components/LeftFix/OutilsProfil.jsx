import styled from 'styled-components'
import { colors } from '../../style/utils'
import { shading } from '../../style/utils'
import { useState } from 'react'
import { FaSave } from 'react-icons/fa'
import { hookPutProfil } from '../../hooks/ApiHook'
function OutilsProfil({ homeData, isUser }) {
	const [nameChange, setNameChange] = useState()
	const [jobChange, setJobChange] = useState()
	const [pictureChange, setPictureChange] = useState({})
	const [isProfilFocus, setProfilFocus] = useState(false)
	let formData = new FormData()

	return ( // Outil qui gère le profil et ses modifications
		<ProfilContainer isUser={isUser}
			method="put"
			enctype="multipart/form-data"
			onSubmit={(e) => {
				hookPutProfil(nameChange, homeData, jobChange, pictureChange, formData, e)
			}}
			onMouseOver={() => setProfilFocus(true)}
			onMouseOut={() => setProfilFocus(false)}
		>
			<Name
				type="text"
				disabled={isUser}
				defaultValue={homeData.name}
				onInput={(e) => setNameChange(e.target.value)}
			/>
			<PictureContainer>
				<PictureWrapper>
					<Picture src={homeData.imageUrl} alt="photo de profil" />
					<PictureInput
						type="file"
						name="image"
						disabled={isUser}
						onChange={(e) => setPictureChange(e.target.files[0])}
					/>
				</PictureWrapper>
				
			</PictureContainer>
			<Job
				type="text"
				disabled={isUser}
				defaultValue={homeData.job}
				onInput={(e) => setJobChange(e.target.value)}
			/>
			
			{isProfilFocus && isUser === false ? (
				<SubmitButton type="submit">
					<FaSave />
				</SubmitButton>
			) : null}
		</ProfilContainer>
	)
}

export default OutilsProfil

const ProfilContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 280px;
	width: 100%;
	position: relative;
`

const Name = styled.input`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 20%;
	width: 80%;
	border-radius: 15px;
	font-size: 1.5em;
	background-color: white;
	box-shadow: ${shading};
	z-index: 6;
	border: none;
	color: ${colors.primary};
	
	text-align: center;
	&:focus {
		outline-color: ${colors.primary};
	}
`

const PictureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 60%;
	width: 70%;
	border-radius: 0 0 20px 20px;
	background-color: white;
	box-shadow: rgba(196, 196, 201, 0.2) 0px 7px 29px 0px;
	z-index: 2;
`
const PictureWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 120px;
	width: 120px;
	overflow: hidden;
	border-radius: 60px;
	border: 4px solid ${colors.tertiary};
	position: relative;
`
const PictureInput = styled.input`
	display: hidden;
	position: absolute;
	width: 100%;
	height: 100%;
	padding: 40px 0 0 0;
	z-index: 40;
	cursor: pointer;
	opacity: 0;
	
`
const Picture = styled.img`
	
	border-radius: 30px;
	height: 100%;
	width: 100%;
	
	object-fit: cover;
	object-position: top;

`

const Job = styled.input`
	border-radius: 0 0 15px 15px;
	background-color: white;
	height: 15%;
	width: 60%;
	box-shadow: ${shading};
	z-index: 0;
	border: none;
	font-size: 1.5em;
	color: ${colors.primary};
	text-align: center;
	&:focus {
		outline-color: ${colors.primary};
	}
`

const SubmitButton = styled.button`
	position: absolute;
	height: 50px;
	width: 50px;
	border-radius: 25px;
	font-size: 20px;
	border: none;
	right: 0;
	bottom: 0;
	z-index: 20;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`




