import styled from 'styled-components'
import { colors } from '../style/utils'

function Footer() {
	return <FooterConteneur></FooterConteneur>
}

const FooterConteneur = styled.footer`
	position: absolute;
	bottom: 0;
	height: 15%;
	width: 100%;
	background-color: ${colors.primary};
`

export default Footer