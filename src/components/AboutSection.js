import React from 'react'; 
import ProfilePic from '../img/profilepic.jpeg';
import styled from 'styled-components';

import {About , Description , Image , Hide} from '../styles'

import Wave from './Wave'; 
// Framer Motion 
import {motion} from 'framer-motion';
import {fade , ImageAnim} from '../animation';

const AboutSection = () => {


    // const container = {
    //     hidden : {x : 100} , 
    //     show : {x : 0 , transition : {duration : 1 , ease : "easeOut" , staggerChildren : 1 , }} 
    // }

    const titleAnim = {
   
        hidden : {y:200 },
        show : {y:0 , transition : {duration : 0.75 , ease : 'easeOut' } } 
   
    }
    return(

        
        <About>
            <Description>
                <motion.div  className="title">
                    <Hide>
                        <motion.h2 variants = {titleAnim} >Competitive Programmer</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants = {titleAnim}> <span> turned </span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants = {titleAnim}>Software Developer</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants = {fade} > Contact me for any software project ideas that you have.</motion.p>
                <motion.button variants = {fade}>Contact Me </motion.button>
            </Description>

            <Image>
                <motion.img variants = {ImageAnim} src= {ProfilePic} alt="A random software developer"/>
            </Image>
            <Wave/>
        </About>
    )

}


//Styled Components 



export default AboutSection ; 