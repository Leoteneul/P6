import { useState, useEffect } from "react"
import styled from "styled-components"
import { colors } from "../style/utils"

function OutilSearch({userData, updateTabSearch, tabSearch}){
    const [isSearch, updateIsSearch] = useState('')

    useEffect(() => {
		
        if(isSearch === ''){
            updateTabSearch(userData)
        }

	}, [isSearch, updateTabSearch, userData])

    function search(){

           const tabtest = userData.filter(user => user.name.includes(isSearch))
           updateTabSearch(tabtest)
            
            }

    return(
        <SearchWrapper>
            <SearchTitle>Rechercher ...</SearchTitle>
            <SearchInput 
            onChange={(e) => {
                updateIsSearch(e.target.value)
                search()
                
            }}
            type="text" 
            />
        </SearchWrapper>
    )
}

export default OutilSearch


const SearchWrapper = styled.div`

background-color: white;
border-radius: 20px 20px 0 0;

padding: 40px 20px 0 20px;

`

const SearchTitle = styled.h2`

width: 100%;
padding-bottom: 10px;
margin-bottom: 20px;
border-bottom: 1px solid ${colors.primary};

/* background-color: #6e4f4f; */


`

const SearchInput = styled.input`

width: 100%;
height: 40%;
border-radius: 20px;
border: none;
margin-bottom: 30px;
background-color: ${colors.secondary};
padding-left: 20px;
font-size:18px;
font-weight: 600;
color: ${colors.primary};
outline: none;
    &:focus{
        transform: scale(1.05);
    }


`