import React from 'react'

import styled from 'styled-components'
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import {Link} from 'react-router-dom'

import {motion} from 'framer-motion'; 
import {pageAnimation , sliderContainer , slider , fade , ImageAnim , lineAnim} from '../animation';

const Skills = () => {

    return (
        
        <SkillProject style={{ background : '#fff'}} variants ={pageAnimation} exit = "exit" initial = "hidden" animate = "show">
            <motion.div variants = {sliderContainer}> 
                <Frame1 variants = {slider}></Frame1> 
                <Frame2 variants = {slider}></Frame2> 
                <Frame3 variants = {slider}></Frame3> 
                <Frame4 variants = {slider}></Frame4> 
            </motion.div>
            <Project >
                <motion.h2 variants = {fade}>The Athlete</motion.h2>
                <motion.div variants = {lineAnim} className="line"></motion.div>
                <Link  to= "skills/the-athlete">
                    <Hide>
                        <motion.img variants = {ImageAnim} src={athlete} alt="athlete"/>
                    </Hide>
                </Link>
            </Project>
            <Project>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="skills/the-racer"> 
                    <img src={theracer} alt="The Racer"/>
                </Link>
            </Project>
            <Project>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="skills/good-times">
                    <img src={goodtimes} alt="Good times"/>
                </Link>
            </Project>
        </SkillProject>
    )
}


const SkillProject = styled(motion.div)`
    min-height : 100vh;
    overflow : hidden ; 
    padding : 5rem 10rem ; 
    h2 {
        padding : 1rem 0rem ; 
    }
`

const Project = styled.div`
    padding-bottom : 10rem ; 

    .line {
        height : 0.5rem ; 
        background : #23d997;
        margin-bottom: 3rem ; 




    }

    img {
        width : 100% ; 
        height : 70vh ; 
        object-fit : cover ; 

    }
`

const Hide = styled.div`
    overflow : hidden ; 
`


const Frame1 = styled(motion.div)`
    position : fixed ; 
    left : 0 ; 
    top : 10% ; 
    width : 100% ; 
    height : 100vh ; 
    z-index : 2 ;
    background : #fffebf;
`

const Frame2 = styled(Frame1)`
    
    background : #ff8efb;
`

const Frame3 = styled(Frame1)`
    background : #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background : #8effa0;
`
export default Skills ; 