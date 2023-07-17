import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link, live_site_link}) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
        </div>
        <div className='absolute inset-0 flex justify-end m-3 card_img-hover'>
          <div onClick={() => window.open(
            source_code_link, '_blank'
          )}
          className='black-gradient w-10 h-10 rounded-full flex 
          justify-center items-center cursor-pointer'>
            <img src={github} alt='github'
            className='w=1/2 h=1/2 object-contain' />
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px]'>
            {description}
          </p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          )) }
          <button onClick={() => window.open(
            live_site_link, '_blank'
          )} 
          className='absolute flex  ml-60 bg-blue-500 hover:bg-blue-600 py-1 px-4 rounded-full'>
            Live Site
          </button>

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>My work</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    <div className='w-full flex'>
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)}
      className='mt-5 text-[17px] text-secondary mx-w-3xl leading-[30px]'>
        Welcome to my projects section, a humble showcase of my work in the world of technology. 
        Here, you'll find a collection of projects that reflect my passion for creative problem-solving and learning. 
        Take a glimpse into the endeavors where I've applied my skills and knowledge to build practical and meaningful solutions. 
        Join me as we explore the progress I've made and the exciting possibilities that lie ahead. 
        Let's embark on this journey together and uncover the potential of my projects.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard 
        key={`project-${index}`}
        index={index}
        {...project} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, 'work');