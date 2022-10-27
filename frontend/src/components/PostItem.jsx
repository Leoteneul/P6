import styled from 'styled-components'
import { hookGetAllPost } from '../hooks/ApiHook'
import { colors, screenSize, shading } from '../style/utils'
import { useEffect, useState } from 'react'

import GlobalStyle from '../style/GlobalStyle'
import OutilLike from '../outils/OutilLike'
import Outildescription from '../outils/OutilDescription'

function PostItem({ homeData, isUser }) {
	const [allPost, setAllPost] = useState([])

	useEffect(() => {
		hookGetAllPost(setAllPost, isUser, homeData)
	}, [isUser, homeData])

	return (
		<div>
			<GlobalStyle />
			{allPost.map(
				(
					{
						name,
						_id,
						description,
						imageUrl,
						imagePostUrl,
						userId,
						usersLiked,
						likes,
					},
					index
				) => (
					<Test key={`${name}-${index}`}>
						{/* Info sur le propriétaire du post */}
						<InfoUserWrapper>
							<UserImg src={imageUrl} alt="imagepost" />
							<UserName>{name}</UserName>
						</InfoUserWrapper>
						<hr />

						{/* Affichage des boutons pour l'user hote sinon description */}
						{homeData.userHome === userId || homeData.isAdmin === true ? (
							<Outildescription description={description} postId={_id} />
						) : (
							<DescriptionText>{description}</DescriptionText>
						)}

						{/* Image du post */}
						<ImagePost src={imagePostUrl}></ImagePost>
						<hr />

						{/* Bouton + box like */}
						<OutilLike
							usersLiked={usersLiked}
							homeData={homeData}
							likes={likes}
							postId={_id}
						/>
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
	@media (max-width: ${screenSize.mobile}) {
		
		
		border-radius: 0;
		
	}
	
`

const InfoUserWrapper = styled.div`
	padding: 0 40px 0 40px;
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	color: ${colors.primary};
	border-radius: 20px 20px 0 0;
`

const DescriptionText = styled.p`
	padding: 20px 40px 20px 40px;
`

const ImagePost = styled.img`
	height: 600px;
	margin-bottom: 20px;
	@media (max-width: ${screenSize.tablet}) {
		
		max-height: 500px;
		
	}
	@media (max-width: ${screenSize.mobile}) {
		
		max-height: 400px;
		
	}
`

const UserImg = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 25px;
	margin-right: 20px;
`

const UserName = styled.h3`
	font-weight: bold;
`

export default PostItem