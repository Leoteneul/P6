import { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import styled from 'styled-components'
import { hookPostLike } from '../hooks/ApiHook'

import { colors } from '../style/utils'

function OutilLike({ usersLiked, homeData, likes, postId }) {
	const [liked, setLiked] = useState(false)
    const [count, updateCount] = useState(0)
    function handleLike(){
        let myLike = 0
        if(liked){
            setLiked(false)
            updateCount(count - 1)
            

        }else{
            setLiked(true)
            updateCount(count + 1)
            myLike = 1

        }
        hookPostLike(myLike, homeData, postId)
    }
    
    useEffect(() => {
        
        if(usersLiked.includes(homeData.userHome)){
            setLiked(true)
            return
            
        }
        
    }, [homeData.userHome, usersLiked])

	return (
		<ItemsButtonsWrapper>
			<ButtonPost
            onClick={() => handleLike()}
            
            >Like</ButtonPost>
			<HeartDiv>
                {liked ? (<FaHeartIcon />):(<FaRegHeart />)}
				
				
				
				{likes + count}
			</HeartDiv>
		</ItemsButtonsWrapper>
	)
}

export default OutilLike

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

	&:hover {
		border-bottom: 4px solid ${colors.primary};
		border-radius: 30px 30px 0 0;
	}
`

const HeartDiv = styled.div`
	margin: 0 10px 5px 10px;
	display: flex;
	color: ${colors.primary};
	justify-content: space-between;
	font-size: 22px;
	align-items: center;
	/* background-color: red; */
	width: 7%;
	position: absolute;
	right: 20px;
	top: 20px;
`

const FaHeartIcon = styled(FaHeart)`
	opacity: 0;
	display: flex;
	align-items: center;
	justify-content: center;

	animation: 0.7s forwards likeAnim;
`