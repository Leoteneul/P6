import styled from 'styled-components'
import { colors } from '../style/utils'
import { shading } from '../style/utils'
import { useState } from 'react'
import { FaSave } from 'react-icons/fa'

function OutilsProfil({ homeData }) {
	const [nameChange, setNameChange] = useState()
	const [jobChange, setJobChange] = useState()
	const [pictureChange, setPictureChange] = useState({})
	const [isProfilFocus, setProfilFocus] = useState(false)
	let formData = new FormData()
	async function submitNewProfil(e) {
		e.preventDefault();
		
		formData.append('file', pictureChange)
		formData.append('job', jobChange)
		formData.append('name', nameChange)
		
		
		
		
		console.log(formData)
		const userId = localStorage.getItem('id')
		const response = await fetch('http://localhost:3000/api/users/profil', {
			method: 'PUT',
			headers: {
				Authorization: userId
			},
			body: formData

			
				
			
			
		})

		console.log(response)
	}

	return (
		<ProfilContainer
			method="put"
			enctype="multipart/form-data"
			onSubmit={(event) => {
				submitNewProfil(event)
			}}
			onMouseOver={() => setProfilFocus(true)}
			onMouseOut={() => setProfilFocus(false)}
		>
			<Name
				type="text"
				defaultValue={homeData.name}
				onInput={(e) => setNameChange(e.target.value)}
			/>
			<PictureContainer>
				<PictureWrapper>
					<Picture src={homeData.imageUrl} alt="photo de profil" />
					<PictureInput 
					type="file"
					name='image'
					onChange={(e) => setPictureChange(e.target.files[0])}
					/>
				</PictureWrapper>
				<Status>En Ligne</Status>
			</PictureContainer>
			<Job
				type="text"
				defaultValue={homeData.job}
				onInput={(e) => setJobChange(e.target.value)}
			/>
			{isProfilFocus ? (
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
	padding: 10px 0 0 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 60%;
	width: 70%;
	border-radius: 0 0 20px 20px;
	background-color: white;
	box-shadow: rgba(196, 196, 201, 0.2) 0px 7px 29px 0px;
	z-index: 2;
`
const PictureWrapper = styled.div`
	background-color: #164b7a;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 120px;
	width: 120px;
	overflow: hidden;
	border-radius: 60px;
	border: 4px solid ${colors.enLigne};
	position: relative;
`
const PictureInput = styled.input`
	display: flex;
	position: absolute;
	width: 100%;
	height: 100%;
	/* background-color: red; */
	padding: 40px 0 0 0;
	z-index: 40;
	cursor: pointer;
`
const Picture = styled.img`
	max-height: 200px;
	max-width: 200px;
`

const Status = styled.p`
	margin-top: 10px;
	padding-left: 15px;
	color: ${colors.enLigne};
	align-self: flex-start;
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
	background-color: ${colors.primary};
	right: 0;
	bottom: 0;
	z-index: 20;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`




