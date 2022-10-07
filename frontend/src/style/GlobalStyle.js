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
  
  
  body {
    
    display: flex;
    justify-content: center;
    background-color: ${colors.secondary};
    
  }
  h2{
    
    color: ${colors.primary};
    }
    
  
  `


export default GlobalStyle
