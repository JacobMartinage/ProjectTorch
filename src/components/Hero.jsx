import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ForkCanvas } from './canvas';
import { logo } from '../assets'


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-top ">
      
      <div className={`${styles.paddingX} mx-auto flex items-start gap-5 mb-1 mt-2`}>
        
        <div className='flex justify-center items-center flex-col'>
          <div className = 'flex justify-center items-center flex-row gap-2'> 

            <h1 className={`${styles.heroHeadText} text-center text-primary`}>
      Ditch</h1>
          </div>
            <p className = 'flex justify-center items-center text-center mt-3 text-text text-[24px]'>
            We use advanced AI to call and cancel your subscriptions for you. Tired of waiting on hold and talking to customer service? We got you.
            </p>

            
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
