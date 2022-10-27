import styled from 'styled-components'
import OutilsProfil from '../outils/OutilsProfil'
import Widget from '../outils/Widget'
import { colors, screenSize, shading } from '../style/utils'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

function LeftFix({
	setDisplayPanel,
	homeData,
	isUser,
	isLeftFixActive,
	updateIsLeftFix,
}) {
	return (
		<LeftFixConteneur isLeftFixActive={isLeftFixActive}>
			{isLeftFixActive ? (
				<div>
					<OutilsProfil homeData={homeData} isUser={isUser} />
					<Widget
						homeData={homeData}
						isUser={isUser}
						setDisplayPanel={setDisplayPanel}
					/>
					<ButtonLeftActive
						isLeftFixActive={isLeftFixActive}
						onClick={() => {
							updateIsLeftFix(false)
						}}
					>
						<FaArrowLeft />
					</ButtonLeftActive>
				</div>
			) : (
				<ButtonLeftActive
					onClick={() => {
						updateIsLeftFix(true)
					}}
				>
					<FaArrowRight />
				</ButtonLeftActive>
			)}
		</LeftFixConteneur>
	)
}

export default LeftFix

const LeftFixConteneur = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px 0 0 0;
	width: 20%;

	position: fixed;
	top: 0;
	left: 0;
	z-index: 35;
	@media (max-width: ${screenSize.tablet}) {
		width: 40%;
		top: 100px;
		border-radius: 0 25px 25px 0;
		${(props) => props.isLeftFixActive && `background-color: white; box-shadow: ${shading};`}
		
	}

	@media (max-width: ${screenSize.mobile}) {
		${(props) => props.isLeftFixActive && ` width: 100%; height: 100%; top: 0;`}
	}

	
`

const ButtonLeftActive = styled.button`
	display: none;
	background-color: ${colors.primary};
	color: white;
	font-size: 20px;
	border: none;
	left: 0;
	top: 50px;
	z-index: 50;
	width: 50px;
	height: 50px;
	z-index: 100;
	border-radius: 0 25px 25px 0;
	position: absolute;
	justify-content: center;
	align-items: center;

	margin-top: 20px;
	@media (max-width: ${screenSize.tablet}) {
		display: flex;
	}

	${(props) =>
		props.isLeftFixActive &&
		` position: static; box-shadow: ${shading}; height: 50px; align-self: flex-end;`}
`


