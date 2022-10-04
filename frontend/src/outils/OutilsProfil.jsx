import styled from 'styled-components'
import ProfilPicture from '../assets/ProfilPicture.jpg'
import { colors } from '../style/utils'
import { shading } from '../style/utils'

const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  width: 100%;
`

const Name = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20%;
  width: 80%;
  border-radius: 15px;
  background-color: white;
  box-shadow: ${shading};
  z-index: 6;
`

const PictureContainer = styled.div`
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  width: 70%;
  border-radius: 0 0 20px 20px;
  background-color: white;
  box-shadow: rgba(196, 196, 201, 0.2) 0px 7px 29px 0px;
`
const PictureWrapper = styled.div`
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 120px;
  overflow: hidden;
  border-radius: 60px;
  border: 4px solid ${colors.enLigne};
`
const Picture = styled.img`
  max-height: 200px;
  max-width: 200px;
`

const Status = styled.p`
  margin-top: 10px;
  padding-left: 15px;
  color: ${colors.enLigne};
  align-self: flex-start;
`

function OutilsProfil() {
  return (
    <ProfilContainer>
      <Name>Teneul Léo</Name>
      <PictureContainer>
        <PictureWrapper>
          <Picture src={ProfilPicture} alt="photo de profil" />
        </PictureWrapper>
        <Status>En Ligne</Status>
      </PictureContainer>
    </ProfilContainer>
  )
}

export default OutilsProfil
