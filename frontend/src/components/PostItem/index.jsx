import styled from 'styled-components'
import { hookGetAllPost } from '../../hooks/ApiHook'
import { colors, screenSize, shading } from '../../style/utils'
import { useEffect, useState } from 'react'

import GlobalStyle from '../../style/GlobalStyle'
import OutilLike from './OutilLike'
import Outildescription from './OutilDescription'

function PostItem({ homeData, isUser }) {
	const [allPost, setAllPost] = useState([])

	useEffect(() => {
		hookGetAllPost(setAllPost, isUser, homeData)
	}, [isUser, homeData])

	// Conteneur qui englobe tous les posts
	return (
		// on map nos items sur les post récupérés de la BDD
		<div>
			<GlobalStyle /> 

			{allPost.map(
				(
					{name, _id, description, imageUrl, imagePostUrl, userId, usersLiked, likes}, index) => 
					(
					<Post key={`${name}-${index}`}>
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
					</Post>
				)
			)}
		</div>
	)
}

const Post = styled.div`
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
	border-bottom: 3px solid ${colors.tertiary};
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
	height: 60px;
	width: 60px;
	border-radius: 30px;
	margin-right: 20px;
	border: 2px solid ${colors.tertiary};
	object-fit: cover;
	object-position: top;
`

const UserName = styled.h3`
	font-weight: bold;
`

export default PostItem