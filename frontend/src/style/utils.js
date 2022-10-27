export const colors = {
    primary: '#fd2d01',
    secondary: '#f1f1f1',
    enLigne: '#24d83d'
}

export const shading = 'rgba(196, 196, 201, 0.2) 0px 7px 29px 0px'

export const screenSize = {
    tablet: '1025px',
    mobile: '450px'
}

export const handleLeftAndRight = (update) => {

    var screenWidth = window.innerWidth

    
        update(true)
    
		if (screenWidth < 1024) {
			update(false)
			return
        }
		

            
        

		

		
}