

// Hook route PUT changement de profil
export const hookPutMail = async (emailChange, e) =>  {
	e.preventDefault()

	try {
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

	const mailData = await response.json()
	console.log(mailData)
	alert('Email modifié!')
	} catch (error) {
		alert("Une erreur est survenue pour le changement d'email. Veuillez réessayer")
	}finally{
		window.location.reload()
	}
	
};

// Hook route PUT changement de profile
export const hookPutProfil = async (nameChange, jobChange, pictureChange, formData, e) => {
	e.preventDefault()
try {
	
	if (nameChange !== undefined) {
		formData.append('name', nameChange)
	}
	if (jobChange !== undefined) {
		formData.append('job', jobChange)
	}
	if (pictureChange !== {}) {
		formData.append('file', pictureChange)
	}

	const userId = localStorage.getItem('id')
	const response = await fetch('http://localhost:3000/api/users/profil', {
		method: 'PUT',
		headers: {
			Authorization: userId,
		},
		body: formData,
	})
	const json = await response.json()
	alert('Profil modifié')
	console.log(json)

} catch (error) {
	alert('Une erreur est survenue. Veuillez réessayer..')
}finally{
	window.location.reload()
	
}
	
};

// Hook route GET recup donnes home/user
export const hookGetHome = async (setHomeData) => {
	const userId = localStorage.getItem("id");
			const response = await fetch('http://localhost:3000/api/users/home', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
          
          			Authorization: userId
				},

				
			})
			const json = await response.json()
			const userData = JSON.parse(JSON.stringify(json))
			setHomeData(userData)
}

// Hook route POST login
export const hookPostLogin = async (e, navigate, emailLogin, passwordLogin) => {
	e.preventDefault()

		const rawResponse = await fetch('http://localhost:3000/api/users/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: emailLogin,
				password: passwordLogin,
			}),
		})

		const id = await rawResponse.json()
		localStorage.setItem('id', id.token)

		if (rawResponse.ok) {
			navigate(`/home`)
			
		}
}

// Hook route POST signup
export const hookPostSignup = async (email, password, e, navigate) => {
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
	
	const id = await rawResponse.json()
		localStorage.setItem('id', id.token)

	if (rawResponse.ok) {
		navigate('/home')
	}
}
