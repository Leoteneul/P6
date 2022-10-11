




async function submitForm(e, email, password) {
	
	e.preventDefault()

	const rawResponse = await fetch('http://localhost:3000/api/users/signup', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	})

	return rawResponse

}

export default submitForm