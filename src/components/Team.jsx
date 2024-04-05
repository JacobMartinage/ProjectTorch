import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { teamData } from '../constants';



const TeamCard = ({ name, icon, index, title, year, about, websites, website_icons,gradient}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 2, scale: 1, speed: 2 }} className="p-5 bg-primary rounded-2xl  sm:w-[360px] w-full">
                <a href={websites[0]} target="_blank" rel="noopener noreferrer"> {/* Add link here */}
                    <div className='relative w-[full] h-[300px]'>
                        <img src={icon} alt={name} className='w-full h-full object-cover rounded-2xl' />
                    </div>
                    <div>
                    
                        <h3 className='orange-red-text-gradient font-bold text-center text-[30px]'>{name}</h3>
                    <div className='flex space-x-12 justify-center'>
                      <div className={`rounded-full px-2 py-1 ${gradient}`}>
                            <span className='text-light-blue'>{title}</span>
                        </div>
                        <div className='border border-accent rounded-full px-2 py-1 bg-primary text-accent'>
                            <span className='tag-bubble-text'>{year}</span>
                        </div>
                    </div>
                        <p className='mt-1 text-accent text-[13px]'><strong>Bio:</strong> {about}</p>
                        <div className='mt-3 flex space-x-4'>
                            {website_icons.map((iconName, index) => (
                                <a href={websites[index]} target="_blank" rel="noreferrer" key={websites[index]}>
                                    <img src={iconName} alt={iconName} className='w-10 h-10' /> 
                                </a>
                            ))}
                        </div>

                    </div>     
                </a>
            </Tilt>
        </motion.div>
    );
}


const Team = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}><span className='orange-red-text-gradient'>Meet the team</span></h2>
      </motion.div>

      <div className = 'mt-20 flex flex-wrap gap-10 justify-center'>
          {teamData.map((team, index) => (
            <TeamCard key ={`team-${index}`} {...team} index = {index}/>
          
          ))}
      </div>
    
    
    </>
  )
}

export default SectionWrapper(Team, "team");






