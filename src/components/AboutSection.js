import React from 'react'; 
import ProfilePic from '../img/profilepic.jpeg'

const AboutSection = () => {
    return(

        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>Competitive Programmer</h2>
                    </div>
                    <div className="hide">
                        <h2> <span> turned </span></h2>
                    </div>
                    <div className="hide">
                        <h2>Software Developer</h2>
                    </div>
                </div>
                <p>Contact me for any software project ideas that you have.</p>
                <button>Contact Me </button>
            </div>

            <div className="img">
                <img src= {ProfilePic} alt="A random software developer"/>
            </div>
        </div>
    )

}

export default AboutSection ; 