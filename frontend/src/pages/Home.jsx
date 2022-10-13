
import Header from '../components/Header'
import LeftFix from '../components/LeftFix'
import ProfilPanel from '../components/ProfilPanel'
import RightFix from '../components/RightFix'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { hookGetHome } from '../hooks/ApiHook'

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
export default Home