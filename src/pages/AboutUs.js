import React from 'react'; 
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import WorkExpSection from '../components/WorkExpSection'

import {motion} from 'framer-motion'; 
import {pageAnimation} from '../animation';

const AboutUs = () => {
    return (
        <motion.div variants = {pageAnimation} exit = "exit" initial = "hidden" animate = "show">
           < AboutSection />
           < ServicesSection />
           < WorkExpSection />
        </motion.div>
    )
}

export default AboutUs ; 