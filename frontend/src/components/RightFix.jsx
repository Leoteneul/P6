import styled from 'styled-components'

const RightFixContainer = styled.div`
  height: 100%;
  width: 20%;
  background-color: white;
  position: fixed;
  top: 0;
  right: 0;
`
function RightFix() {
  return <RightFixContainer></RightFixContainer>
}

export default RightFix
