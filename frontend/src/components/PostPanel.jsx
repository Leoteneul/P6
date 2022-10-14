import { useState } from 'react'
import styled from 'styled-components'
import { hookPostCreatePost } from '../hooks/ApiHook'
import { colors, shading } from '../style/utils'


function PostPanel({ homeData }) {

    const [postContent, setPostContent] = useState()
    const [postImage, setPostImage] = useState()
    let formData = new FormData()

	return (
		<PostPanelConteneur
			method="put"
			enctype="multipart/form-data"
			onSubmit={(e) => {
				hookPostCreatePost(e, postContent, postImage, formData, homeData.name)
			}}
		>
			<Title>Exprimez vous..</Title>
			<TextInput
            type="textarea" 
            onInput={(e) => setPostContent(e.target.value)}
             />
			<InputFileLabel htmlFor="inputFile">
				<TextFile>Image..</TextFile>
				<InputFile 
                id="inputFile" 
                type="file" 
                onChange={(e) => setPostImage(e.target.files[0])}
                />
				<span id="imageName"></span>
			</InputFileLabel>
			<SubmitButton type="submit">Publier</SubmitButton>
		</PostPanelConteneur>
	)
}

const PostPanelConteneur = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	height: 35%;
	width: 40%;
	padding: 20px 50px 0 50px;
	border-radius: 20px;
	background-color: white;
	box-shadow: ${shading};
	margin-top: 50px;
`

const Title = styled.h1`
	color: ${colors.primary};
`

const TextInput = styled.input`
	height: 35%;
	width: 100;
	border-radius: 20px;
	margin-top: 20px;
	border: none;
	background-color: ${colors.secondary};
	outline: none;
	font-size: 20px;
	padding: 0 20px 0 20px;
`

const InputFileLabel = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 0 0 20px 20px;
	height: 15%;
	width: 20%;
	background-color: ${colors.primary};
	font-size: 20px;
	cursor: pointer;
	margin-left: 20px;
	min-width: 80px;
`
const InputFile = styled.input`
	display: none;
`
const TextFile = styled.p`
	color: white;
`
const SubmitButton = styled.button`
	margin-top: 30px;
	height: 15%;
	width: 40%;
	align-self: center;
	border-radius: 20px 20px 0 0;
	background-color: ${colors.primary};
	color: white;
	font-size: 25px;
	border: none;
	cursor: pointer;
	box-shadow: ${shading};
`
export default PostPanel