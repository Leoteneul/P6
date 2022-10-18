
import Header from '../components/Header'
import LeftFix from '../components/LeftFix'
import ProfilPanel from '../components/ProfilPanel'
import RightFix from '../components/RightFix'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { hookGetHome } from '../hooks/ApiHook'
import PostPanel from '../components/PostPanel'
import PostItem from '../components/PostItem'

function Home() {
	const [isDisplayPanel, setDisplayPanel] = useState(false)
	const [homeData, setHomeData] = useState({})

	useEffect(() => {
		hookGetHome(setHomeData)
	}, [])

	return (
		<HomeConteneur>
			<LeftFix homeData={homeData} setDisplayPanel={setDisplayPanel} />
			<Header />
			<PostPanel homeData={homeData}/>
			<PostWrapper>
			<PostItem homeData={homeData} />
			</PostWrapper>




			<RightFix />
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

const PostWrapper = styled.div`

	width: 38%;
	
	/* background-color: yellow; */

`
export default Home