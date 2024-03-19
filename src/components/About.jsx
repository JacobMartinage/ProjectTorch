import React from 'react';
import { motion } from 'framer-motion'

import { styles } from '../styles';

import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';


//test
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className = {styles.sectionSubText}>What we do</p>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className= 'mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
        >
        Project Torch Description
      </motion.p>
      
      
    </>
  )
}

export default SectionWrapper(About, "about")