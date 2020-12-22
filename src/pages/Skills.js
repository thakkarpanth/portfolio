import React from 'react'

import styled from 'styled-components'
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

import {Link} from 'react-router-dom'

import {motion} from 'framer-motion'; 
import {pageAnimation} from '../animation';

const Skills = () => {

    return (
        
        <SkillProject variants ={pageAnimation} exit = "exit" initial = "hidden" animate = "show">
            <Project>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link  to= "skills/the-athlete">
                    <img src={athlete} alt="athlete"/>
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
        background : #cccccc;
        margin-bottom: 3rem ; 




    }

    img {
        width : 100% ; 
        height : 70vh ; 
        object-fit : cover ; 

    }
`
export default Skills ; 