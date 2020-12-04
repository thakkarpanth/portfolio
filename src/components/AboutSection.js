import React from 'react'; 
import ProfilePic from '../img/profilepic.jpeg';
import styled from 'styled-components';

import {About , Description , Image , Hide} from '../styles'
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



export default AboutSection ; 