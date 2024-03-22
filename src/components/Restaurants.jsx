import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { restaurantData } from '../constants';



const RestaurantCard = ({ name, testimonial, index, image, link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="p-5 bg-primary rounded-2xl sm:w-[360px] w-full">
                <a href={link} target="_blank" rel="noopener noreferrer"> {/* Add link here */}
                    <div className='relative w-full h-[230px]'>
                        <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl' />
                    </div>
                    <div>
                        <h3 className='orange-red-text-gradient font-bold text-[26px]'>{name}</h3>
                        <p className='mt-2 text-accent text-[13px]'>{testimonial}</p>
                    </div>     
                </a>
            </Tilt>
        </motion.div>
    );
}


const Restaurants = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}></p>
        <h2 className={styles.sectionHeadText}><span className='fire-text-gradient'>Our Work</span></h2>
      </motion.div>

      <div className='w-full flex'>
          <motion.p
            variants = {fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
            >
            Here are some projects we've worked on, click anywhere on the card to see their new website designed by us!
          </motion.p>

      </div>
      <div className = 'mt-20 flex flex-wrap gap-10 justify-center'>
          {restaurantData.map((rest, index) => (
            <RestaurantCard key ={`rest-${index}`} {...rest} index = {index}/>
          
          ))}
      </div>
    
    
    </>
  )
}

export default SectionWrapper(Restaurants, "restaurants");