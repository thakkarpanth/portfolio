import React from 'react'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Nav = () => {

    return (
        <StyledNav>
            <h1 id = "logo"><Link to = "/"><span>Panth Thakkar</span></Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Me</Link>
                </li>

                <li>
                    <Link to="/skills">2. Skills</Link>
                </li>

                <li>
                    <Link to="/contact">3. Contact Me</Link>
                </li>

            </ul>
        </StyledNav>
    )

}

const StyledNav = styled.nav`

     
    min-height : 10vh ; 
    display : flex ; 
    justify-content : space-between ; 
    margin : auto ; 
    align-items : center ; 
    padding : 1rem 10rem ;
    background : #282828; 

    a{
        color : white ; 
        text-decoration : none ; 

    }
    ul{
        display : flex ; 
        list-style : none ; 


    }
    #logo {
        font-size : 1.5rem ; 
        font-family : "Lobster" , cursive ; 
        font-weight : lighter ;
    }
    li {
        padding-left : 10rem ; 
        position : relative ; 
    }
    
`

export default Nav ;  