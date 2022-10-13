async function submitMail(emailChange) {
	const userId = localStorage.getItem('id')
	const response = await fetch('http://localhost:3000/api/users/email', {
		method: 'PUT',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: userId,
		},

		body: JSON.stringify({
			email: emailChange,
		}),
	})

	// const mailData = await response.json()
	// REPONSE
}

export default submitMail