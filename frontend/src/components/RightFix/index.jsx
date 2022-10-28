import { useState } from 'react'
import styled from 'styled-components'
import OutilSearch from './OutilSearch'
import OutilUser from './OutilUser'
import { colors, screenSize, shading } from '../../style/utils'
import { FaAddressBook } from 'react-icons/fa'

function RightFix({ userData, isRightFixActive, updateIsRightFix }) {
	const [tabSearch, updateTabSearch] = useState([])
	return (
		<RightFixContainer isRightFixActive={isRightFixActive}>
			{isRightFixActive ? (
				<Test>
					<OutilSearch
						userData={userData}
						tabSearch={tabSearch}
						updateTabSearch={updateTabSearch}
					/>
					<OutilUser userData={tabSearch} />
					<ButtonRightActive
						isRightFixActive={isRightFixActive}
						onClick={() => {
							updateIsRightFix(false)
						}}
					>
						<FaAddressBook />
					</ButtonRightActive>
				</Test>
			) : (
				<ButtonRightActive
					onClick={() => {
						updateIsRightFix(true)
					}}
				>
					<FaAddressBook />
				</ButtonRightActive>
			)}
		</RightFixContainer>
	)
}

export default RightFix

const RightFixContainer = styled.div`
	height: 100%;
	width: 23%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 40;

	@media (max-width: ${screenSize.tablet}) {
		width: 50%;
	}
	@media (max-width: ${screenSize.mobile}) {
		${(props) => props.isRightFixActive && `width: 100%;`}
	}
`

const Test = styled.div`
	width: 80%;
	min-width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const ButtonRightActive = styled.button`
	display: none;
	color: white;
	background-color: ${colors.primary};
	font-size: 20px;
	border: none;
	right: 0;
	top: 400px;
	z-index: 100;
	width: 40px;
	height: 50px;
	z-index: 40;
	border-radius: 25px 0 0 25px;
	position: absolute;
	justify-content: center;
	align-items: center;

	@media (max-width: ${screenSize.tablet}) {
		display: flex;
	}

	${(props) =>
		props.isRightFixActive &&
		`position:static; box-shadow: ${shading}; height: 50px; align-self: flex-end;`}
`



