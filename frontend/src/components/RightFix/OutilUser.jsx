import styled from 'styled-components'
import GlobalStyle from '../../style/GlobalStyle'
import { colors, shading } from '../../style/utils'
import { Link } from 'react-router-dom'

function OutilUser({ userData }) {
	return (
		<UsersWrapper>
			<GlobalStyle />
            
            <UserTitle>Contact</UserTitle>
            
			<UserConteneur>
				{userData.map(({ name, imageUrl, job, _id }, index) => (
					<UsersBox 
                    to={`/user/?id=${_id}`}
                    key={`${name}-${index}`}
                    onClick={() => window.location.replace()}
                    >
                    
						<UserImage src={imageUrl} alt="" />

						<UserName>
							{name}
							<br /> <span>{job}</span>{' '}
						</UserName>
					</UsersBox>
				))}
			</UserConteneur>
		</UsersWrapper>
	)
}

export default OutilUser

const UsersWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: white;
	height: 50%;
	border-radius: 0 0 0 20px;
	padding: 40px 20px 0 20px;
	overflow-y: scroll;
	box-shadow: ${shading};
`

const UserTitle = styled.h2`
padding-bottom: 10px;
margin-bottom: 20px;
border-bottom: 1px solid red;

`
const UserConteneur = styled.div`
`
const UsersBox = styled(Link)`
	background-color: ${colors.secondary};
	display: flex;
	margin: 10px 0 10px 0;
	padding: 5px 5px 5px 10px;
    text-decoration: none;
    border-radius: 10px;
    cursor: pointer;
`

const UserName = styled.h3`
	width: 60%;
	color: ${colors.primary};
	font-size: 20px;
`

const UserImage = styled.img`
	width: 60px;
    height: 60px;
	border-radius: 30px;
	margin-right: 10px;
`