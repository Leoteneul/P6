import styled from 'styled-components'
import { hookDeletePost, hookGetAllPost, hookModifyOne } from '../hooks/ApiHook'
import { colors, shading } from '../style/utils'
import { useEffect, useState } from 'react'
import { FaTimes, FaCog, FaShareSquare, FaHeart, FaRegHeart } from 'react-icons/fa'
import GlobalStyle from '../style/GlobalStyle'

function PostItem({ homeData }) {
	const [allPost, setAllPost] = useState([])
	const [isModifyDisplay, setModifyDisplay] = useState(false)
	const [modifiedDescription, updateDescription] = useState('')
	const [isEmptyHeart, setIsEmptyHeart] = useState(false)

	useEffect(() => {
		hookGetAllPost(setAllPost)
	}, [])

	return (
		<div>
			<GlobalStyle />
			{allPost.map(
				({ name, _id, description, imageUrl, imagePostUrl, userId }, index) => (
					<Test key={`${name}-${index}`}>
						<InfoUserWrapper>
							<UserImg src={imageUrl} alt="imagepost" />
							<UserName>{name}</UserName>
						</InfoUserWrapper>
						<hr />

						{/* On verifie que modify et display et qu'il est bien l'hote du post */}
						{isModifyDisplay === true && homeData._id === userId ? (
							<DescriptionInput
								type="text"
								defaultValue={description}
								onChangeCapture={(e) => updateDescription(e.target.value)}
							></DescriptionInput>
						) : (
							<DescriptionText>{description}</DescriptionText>
						)}

						<ImagePost src={imagePostUrl}></ImagePost>
							<hr />
						<ItemsButtonsWrapper>
							<ButtonPost onClick={() => isEmptyHeart ? setIsEmptyHeart(false) : setIsEmptyHeart(true)}>Like</ButtonPost>
							<HeartDiv>
								<FaHeartIcon active={isEmptyHeart} />
								<FaRegHeart active={!isEmptyHeart} onClick={() => setIsEmptyHeart(false)}/>
								<h3>12</h3>
							</HeartDiv>
						</ItemsButtonsWrapper>

						{homeData._id === userId ? (
							isModifyDisplay ? (
								<OutilPostWrapper>
									<OutilPost
										onClick={() => {
											setModifyDisplay(false)
											hookModifyOne(_id, modifiedDescription)
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
									<OutilPost onClick={(e) => hookDeletePost(_id, e)}>
										<FaTimes />
									</OutilPost>
								</OutilPostWrapper>
							)
						) : null}
					</Test>
				)
			)}
		</div>
	)
}

const Test = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: flex-end;
	overflow: hidden;
	width: 100%;
	background-color: white;
	box-shadow: ${shading};
	border-radius: 20px;
	margin-top: 40px;
	border-bottom: 3px solid ${colors.primary};
`

const InfoUserWrapper = styled.div`
	padding: 0 40px 0 40px;
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	color: ${colors.primary};
	/* border: 2px solid ${colors.primary}; */
	border-radius: 20px 20px 0 0;
`

const DescriptionText = styled.p`
	padding: 20px 40px 20px 40px;
`

const DescriptionInput = styled.input`
	padding: 20px 40px 20px 40px;
	outline-color: ${colors.primary};
	border: 1px solid ${colors.primary};
`

const ImagePost = styled.img`
	height: 600px;
	margin-bottom: 20px;
`

const ItemsButtonsWrapper = styled.div`
	width: 100%;
	/* background-color: #2c82cc; */
	height: 80px;
	display: flex;
	justify-content: center;
	position: relative;
`

const ButtonPost = styled.button`
	color: ${colors.primary};
	background-color: white;
	height: 100%;
	width: 30%;
	display: flex;
	padding-bottom: 20px;
	justify-content: center;
	align-items: flex-end;
	border: none;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;

	&:hover{
		border-bottom: 4px solid ${colors.primary};
		border-radius: 30px 30px 0 0;
	}
    
  
`

const HeartDiv = styled.div`

margin: 0 10px 5px 10px;
display: flex;
color: ${colors.primary};
justify-content: space-between;
font-size: 18px;
align-items: center;
/* background-color: red; */
width: 6%;
position: absolute;
right: 20px;
top: 20px;

`

const FaHeartIcon = styled(FaHeart)`


position: absolute;
opacity: 0;
${({ active }) =>
		active &&
		`
		animation: 0.7s forwards likeAnim;
  `}
`



const UserImg = styled.img`
	height: 50px;
	width: 50px;
	margin-right: 20px;
`

const UserName = styled.h3`
	font-weight: bold;
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
	background-color: ${colors.primary};
	cursor: pointer;

	&:hover {
		transform: scale(0.9);
	}
`

export default PostItem