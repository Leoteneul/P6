
import { client, clientMultipart } from './Axios-config'


export const hookPutMail = async (emailChange, e) => {
	e.preventDefault()
	const response = await client.put('/users/email', { email: emailChange })
	alert(response.message)
	window.location.reload()
}

export const hookPutProfil = async (
	nameChange,
	jobChange,
	pictureChange,
	formData,
	e
) => {
	e.preventDefault()

	if (nameChange !== undefined) {
		formData.append('name', nameChange)
	}
	if (jobChange !== undefined) {
		formData.append('job', jobChange)
	}
	if (pictureChange !== {}) {
		formData.append('file', pictureChange)
	}

	const response = await clientMultipart.put('/users/profil', formData)
	clientMultipart.put('/post/modifyAll', formData)

	alert(response.message)
	window.location.reload()
}

export const hookPostLogin = async (e, navigate, emailLogin, passwordLogin) => {
	e.preventDefault()
	const payload = { email: emailLogin, password: passwordLogin }
	const response = await client.post('/users/login', payload)

	localStorage.setItem('id', response.token)
	navigate('/home')
}

export const hookGetHome = async (setHomeData) => {
	const response = await client.get('/users/home')
	setHomeData(response)
}

export const hookPostSignup = async (email, password, e, navigate) => {
	e.preventDefault()
	const payload = { email: email, password: password }
	const response = await client.post('/users/signup', payload)

	localStorage.setItem('id', response.token)
	navigate('/home')
}

export const hookPostCreatePost = async (
	e,
	postContent,
	postImage,
	formData,
	homeData
) => {
		e.preventDefault()
		if (postContent !== undefined) {
			formData.append('description', postContent)
		}
		if (postImage !== undefined) {
			formData.append('file', postImage)
		}
		formData.append('name', homeData.name)
		formData.append('imageUrl', homeData.imageUrl)
		const response = await clientMultipart.post('/post/create', formData)
		
		alert(response.message)
		window.location.reload()
	
}

export const hookGetAllPost = async (setAllPost, isUser, homeData) => {
	const response = await client.get('/post/show')

	if (isUser) {
		const filteredPost = response.filter((post) => post.userId === homeData._id)
		setAllPost(filteredPost)
		return
	}
	setAllPost(response)
}

export const hookDeletePost = async (_id) => {
	const response = await client.delete('/post/deletePost', {data: {postId:_id}})
	alert(response.message)
	window.location.reload()
}

export const hookModifyOne = async (_id, modifiedDescription) => {
	const payload = {
		postId: _id,
		description: modifiedDescription,
	}
	const response = await client.put('/post/modifyOne', payload)
	alert(response.message)
	window.location.reload()
}

export const hookPostLike = async (myLike, homeData, postId) => {
	const payload = {

		postId: postId,
			like: myLike,
			userId: homeData._id,

	}
	client.post('/post/like', payload)	
}

export const hookGetAllUsers = async (setUserData) => {
	const response = await client.get('/coworker/getAllCoworker')
	setUserData(response)
}

export const hookGetOneUser = async (setCoworkerData, coworkerId) => {
	const response = await client.get(`/coworker/getOneCoworker/${coworkerId}`)
	setCoworkerData(response)
}