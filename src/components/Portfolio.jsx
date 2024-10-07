import React from 'react';
import ecommerce from "../assets/ecommerce.png"
import admin from "../assets/admin-panel.png"
import edusite from "../assets/edusite.png"
import hotel from "../assets/hotel-website.png"
import weather from "../assets/weather-app.png"
import task from "../assets/task.png"
import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
  {
    img: ecommerce,
    title: "Project #1",
    description: "Ecommerce Using React JS and Firebase.",
    links: {
      site: "https://ecommerce311.netlify.app/",
      github: "https://github.com/Tofiq311/ecommerce",
    },
  },
    {
      img: admin,
      title: "Project #2",
      description: "UI for frontend admin panel using React JS.",
      links: {
        site: "#",
        github: "https://github.com/Tofiq311/admin-panel",
      },
    },
    {
      img: edusite,
      title: "Project #3",
      description: "Educational Website using React JS.",
      links: {
        site: "https://tofiq311.github.io/edusite/",
        github: "https://github.com/Tofiq311/edusite",
      },
    },
    {
      img: hotel,
      title: "Project #4",
      description: "Hotel Details Website and Hotel Rooms Filter using React JS.",
      links: {
        site: "https://ashiktofiq.github.io/react-hotel-details-app/",
        github: "https://github.com/ashiktofiq/react-hotel-details-app",
      },
    },
    {
      img: weather,
      title: "Project #5",
      description: "React JS Weather Application.",
      links: {
        site: "https://tofiq311.github.io/weather-app/",
        github: "https://github.com/Tofiq311/weather-app",
      },
    },
    {
      img: task,
      title: "Project #6",
      description: "React JS Task Application.",
      links: {
        site: "https://task311.netlify.app/",
        github: "https://github.com/Tofiq311/task-app",
      },
    },
  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio