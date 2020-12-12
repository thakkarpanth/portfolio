import React from 'react' ; 

import styled from 'styled-components' ; 
import {About} from '../styles';

const WorkExpSection = () => {
    return (
        <WorkExp>
            <h2><span>Work Experience</span></h2>
                <div className="company-name">
                    <h4>Chatur Chidya</h4>
                    <div className="work-role">
                        <p>Front End Engineer</p>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Optio, odit!
                        </p>
                    </div>
                    <div className="line"></div>
                </div>
                <div className="company-name">
                    <h4>AlgoShots</h4>
                    <div className="work-role">
                        <p>Founder</p>
                        <p>Lorem ipsum dolor sit amet, 
                            consectetur adipisicing elit. 
                            Optio, odit!
                        </p>
                    </div>
                    <div className="line"></div>
                </div>
        </WorkExp>
    )
}

const WorkExp = styled(About)`

    display : block ; 
    span {
        display : block ; 
    }

    h2{
        padding-bottom : 2rem ; 
        font-weight : lighter ; 
    }

    .line{
        background : #cccccc ; 
        height : 0.2rem;
        margin : 2rem 0rem ;  
        width : 100% ;
    }

    .company-name {
        padding : 3rem 0rem ; 
    }
    .work-role {
        padding : 2rem 0rem ; 
        p{
            padding : 1rem 0rem ; 
        }
    }


`;

export default WorkExpSection;