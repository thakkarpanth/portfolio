import React from 'react'; 
import ProfilePic from '../img/profilepic.jpeg';
import styled from 'styled-components';

const AboutSection = () => {
    return(

        
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Competitive Programmer</h2>
                    </Hide>
                    <Hide>
                        <h2> <span> turned </span></h2>
                    </Hide>
                    <Hide>
                        <h2>Software Developer</h2>
                    </Hide>
                </div>
                <p>Contact me for any software project ideas that you have.</p>
                <button>Contact Me </button>
            </Description>

            <Image>
                <img src= {ProfilePic} alt="A random software developer"/>
            </Image>
        </About>
    )

}


//Styled Components 

const About = styled.div`
    min-height : 90vh ;
    display : flex ; 
    align-items : center ; 
    justify-content : space-between;
    color : white ;
    padding : 5rem 10rem ; 

`

const Description = styled.div`
    padding-right : 5rem ; 
    flex : 1;
   
    h2 {
        font-weight : lighter;
    }


`

const Image = styled.div`
    flex : 1 ;
    overflow : hidden;
    img { 
        width : 100% ; 
        height : 80vh ;
        object-fit : cover ;
    } 
`
const Hide = styled.div `

    overflow : hidden;

`

export default AboutSection ; 