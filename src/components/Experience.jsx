import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'WebHawksIT',
        period: '2016/10 - 2017/1',
        description: 'I have 4 months of experince as a Intern Web Developer.',
      },
      {
        company: 'promiti computers & network (pvt.) ltd',
        period: '2017/3 - 2018/8',
        description: 'I have 1 year and 5 months of experience as a web developer(PHP)',
      },
      {
        company: '株式会社プラステコ',
        period: '2021/4 - 2022/3',
        description: 'I have 12 months of experince as a System & Web Engineer.',
      },
      {
        company: 'I.S',
        period: '2022/4 - Present',
        description: 'I have 2 year and 3 months of experince as a Fullstack Developer.',
      },
]



const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto' id="experience">
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-purple-600 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-purple-700/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p className='text-gray-400 mt-4'>{experience.description}</p>


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience