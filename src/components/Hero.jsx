import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ForkCanvas } from './canvas';
import { logo } from '../assets'


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-top ">
      <div className={`${styles.paddingX} mx-auto flex items-start gap-5 mb-1 mt-8`}>
        <div className="flex flex-col justify-center items-center">
          <div className='w-5 h-5 rounded-full bg-[#ff8614]'/>
          <div className="w-1 sm:h-20 h-10 violet-gradient"/>
        </div>

        <div className='flex justify-left items-center flex-col'>
            <h1 className={`${styles.heroHeadText} text-white`}>
                We are <span className="fire-text-gradient">Project Torch</span></h1>
            <p className = 'flex justify-center items-center mt-3 text-text text-[24px]'>
            We design stunning  websites for local Blacksburg restaurants for
            </p>
            <p className = 'flex justify-center items-center mt-0 fire-text-gradient text-[30px] font-bold'>Free</p>

            
        </div>
        
      </div>

      <div className="w-full h-[600px]">
        <ForkCanvas />
        <div className="absolute bottom-2 rounded-3 w-full flex justify-center items-center mb-5">
        <a href="#about">
          <div className='w-[35px] h-[64px] border-4 rounded-full border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition= {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      </div>

      

    
    </section>
  );
};

export default Hero;
