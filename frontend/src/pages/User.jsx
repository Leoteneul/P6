import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import LeftFix from '../components/LeftFix'
import PostItem from '../components/PostItem'
import RightFix from '../components/RightFix'
import { hookGetAllUsers } from '../hooks/ApiHook'

import { hookGetOneUser } from '../hooks/ApiHook'
import { handleLeftAndRight, screenSize } from '../style/utils'

function User() {
	const [coworkerData, setCoworkerData] = useState({})
	const [isDisplayPanel, setDisplayPanel] = useState(false)
    const [userData, setUserData] = useState([])
	const [isLeftFixActive, updateIsLeftFix] = useState(false)
	const [isRightFixActive, updateIsRightFix] = useState(false)
    const isUser = true

	window.onresize = () => {
		handleLeftAndRight(updateIsLeftFix)
		handleLeftAndRight(updateIsRightFix)
	}

	function handleGetUser() {
        const url = window.location
		const params = url.search
		const lui = params.split('=')[1]
        
		hookGetOneUser(setCoworkerData, lui)
        
	}

	useEffect(() => {
		handleGetUser()
        hookGetAllUsers(setUserData)
		handleLeftAndRight(updateIsLeftFix)
		handleLeftAndRight(updateIsRightFix)
        
	}, [])

	return (
		<UserConteneur>
			<LeftFix
				homeData={coworkerData}
				isDisplayPanel={isDisplayPanel}
				setDisplayPanel={setDisplayPanel}
                isUser={isUser}
				isLeftFixActive={isLeftFixActive}
				updateIsLeftFix={updateIsLeftFix}
			/>
			<Header />
            <PostWrapper>
				<PostItem homeData={coworkerData} isUser={isUser}/>
			</PostWrapper>
            <RightFix 
			userData={userData}
			setUserData={setUserData}
			isRightFixActive={isRightFixActive}
			updateIsRightFix={updateIsRightFix}
			/>
			
		</UserConteneur>
	)
}

export default User

const UserConteneur = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const PostWrapper = styled.div`
	width: 38%;
	z-index: 0;
	@media (max-width: ${screenSize.tablet}) {
		width: 76%;
	}
	@media (max-width: ${screenSize.mobile}) {
		width: 100%;
	}
	

	/* background-color: yellow; */
`