import { createGlobalStyle } from 'styled-components'
import lato from '../assets/Lato-Regular.ttf'
import { colors } from './utils'
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${lato});
  }

  @keyframes widgetDisplay {

  0% {
    padding-right: 30px;
    max-width: 80px;
  }
  
  100% {
    padding-right: 0;
    max-width: 300px;
    background-color: white;
    
  }
}


  *{
    margin: 0;
    padding: 0 0 0 0;
    box-sizing: border-box;
    font-family: 'Lato';
  }
  
  

  @keyframes likeAnim {

0% {
  opacity: 0;
}

100% {
  opacity: 1;
  
}
}


*{
  margin: 0;
  padding: 0 0 0 0;
  box-sizing: border-box;
  font-family: 'Lato';
}




button{
  background-color: ${colors.tertiary};
}




  span{
    color: ${colors.tertiary};
    font-weight: bold;
    font-size: 15px;
  }


  body {
    
    display: flex;
    justify-content: center;
    background-color: ${colors.secondary};
    
  }
  h2{
    
    color: ${colors.primary};
    }
    
  hr{
    color: ${colors.primary};
    background-color: ${colors.tertiary};
    border: none;
    width: 90%;
    height: 1px;
    margin-left: 5%;
    z-index: 90;
    
  }
  `

export default GlobalStyle
