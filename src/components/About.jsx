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
      <h2 className={styles.sectionHeadText}><span className='fire-text-gradient'>What we do</span></h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className= 'mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
        >
        Project Torch is a student-led initiative dedicated to empowering local Blacksburg restaurants through free, stunning website design. We believe in the power of a strong online presence to drive business growth and community support. Our team of passionate developers and designers collaborates with restaurant owners to create websites that reflect their unique brand stories and attract more customers.
      </motion.p>
      
      
    </>
  )
}

export default SectionWrapper(About, "about")