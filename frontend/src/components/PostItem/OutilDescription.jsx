
import styled from 'styled-components'
import { hookDeletePost, hookModifyOne } from '../../hooks/ApiHook'
import { colors } from '../../style/utils'
import { FaTimes, FaCog, FaShareSquare } from 'react-icons/fa'
import { useState } from 'react'

function Outildescription({ description, postId }) {
	const [isModifyDisplay, setModifyDisplay] = useState(false)
	const [modifiedDescription, updateDescription] = useState('')
	return (
		
		<div>
			
			{isModifyDisplay ? (
				<DescriptionInput
					type="text"
					defaultValue={description}
					onChangeCapture={(e) => updateDescription(e.target.value)}
				></DescriptionInput>
			) : (
				<DescriptionText>{description}</DescriptionText>
			)}

			{isModifyDisplay ? (
				<OutilPostWrapper>
					<OutilPost
						onClick={() => {
							setModifyDisplay(false)
							hookModifyOne(postId, modifiedDescription)
						}}
					>
						<FaShareSquare />
					</OutilPost>
					<OutilPost onClick={() => setModifyDisplay(false)}>
						<FaTimes />
					</OutilPost>
				</OutilPostWrapper>
			) : (
				<OutilPostWrapper>
					<OutilPost onClick={() => setModifyDisplay(true)}>
						<FaCog />
					</OutilPost>
					<OutilPost onClick={(e) => hookDeletePost(postId, e)}>
						<FaTimes />
					</OutilPost>
				</OutilPostWrapper>
			)}
		</div>
	)
}

export default Outildescription

const DescriptionInput = styled.input`
	padding: 20px 40px 20px 40px;
	outline-color: ${colors.primary};
	border: 1px solid ${colors.primary};
	width: 100%;
`
const DescriptionText = styled.p`
	padding: 20px 40px 20px 40px;
`

const OutilPostWrapper = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	right: 0;
	top: 10px;
	/* background-color: red; */
	padding: 10px;
	z-index: 50;
`

const OutilPost = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	color: white;
	height: 36px;
	width: 36px;
	margin-right: 15px;
	border-radius: 18px;
	border: none;
	cursor: pointer;

	&:hover {
		transform: scale(0.9);
	}
`