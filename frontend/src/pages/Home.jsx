
import Header from '../components/Header'
import LeftFix from '../components/LeftFix'
import ProfilPanel from '../components/ProfilPanel'
import RightFix from '../components/RightFix'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { hookGetAllUsers, hookGetHome } from '../hooks/ApiHook'
import PostPanel from '../components/PostPanel'
import PostItem from '../components/PostItem'
import { colors, handleLeftAndRight, screenSize } from '../style/utils'
import { FaSignOutAlt } from 'react-icons/fa'
import background from '../assets/background.png'

function Home() {
	const [isDisplayPanel, setDisplayPanel] = useState(false)
	const [homeData, setHomeData] = useState({})
	const [userData, setUserData] = useState([])
	const [isLeftFixActive, updateIsLeftFix] = useState(false)
	const [isRightFixActive, updateIsRightFix] = useState(false)
	const isUser = false

	window.onresize = () => {
		handleLeftAndRight(updateIsLeftFix)
		handleLeftAndRight(updateIsRightFix)
	}

	useEffect(() => {
		hookGetHome(setHomeData)
		hookGetAllUsers(setUserData)
		handleLeftAndRight(updateIsLeftFix)
		handleLeftAndRight(updateIsRightFix)
		return
	}, [])

	return (
		<HomeConteneur>
			<Background />
			<LogOut to="/">
				<FaSignOutAlt />
			</LogOut>
			<LeftFix
				homeData={homeData}
				isUser={isUser}
				setDisplayPanel={setDisplayPanel}
				isLeftFixActive={isLeftFixActive}
				updateIsLeftFix={updateIsLeftFix}
			/>

			<Header />
			<PostPanel homeData={homeData} />
			<PostWrapper>
				<PostItem homeData={homeData} isUser={isUser} />
			</PostWrapper>
			<RightFix
				userData={userData}
				setUserData={setUserData}
				isRightFixActive={isRightFixActive}
				updateIsRightFix={updateIsRightFix}
			/>
			{isDisplayPanel ? (
				<ProfilPanel homeData={homeData} setDisplayPanel={setDisplayPanel} />
			) : null}
		</HomeConteneur>
	)
}

const HomeConteneur = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	
`

const Background = styled.div`
height: 100%;
width: 100%;
	
	background-image: url(${background});
	
	position: fixed;
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
`
const LogOut = styled(Link)`
	position: absolute;
	top: 0;
	right: 50px;
	background-color: ${colors.tertiary};
	color: white;
	font-size: 25px;
	padding: 10px 15px;
	border-radius: 0 0 10px 10px;
	z-index: 50;
`
export default Home