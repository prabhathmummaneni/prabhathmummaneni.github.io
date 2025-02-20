
import React from "react";
import Pingpong from '../assets/PingPong.png'
import SLR from '../assets/SLR.png'
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 h-[475px] sm:h-[600px] border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a>
                <img
                    className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
                    src={image}
                    alt={title}
                />
            </a>
            <div className="p-4 sm:p-6 h-[200px] sm:h-[250px]">
                <a>
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between items-center'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black min-h-screen w-screen h-auto flex flex-col">
            <div className="flex-grow flex flex-wrap gap-7 justify-center items-center m-12 p-12 mx-auto">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Virtual PingPong',
        description:'I enhanced Pong by enabling real-time paddle movement through color-based object tracking, using Python\'s Pygame and OpenCV for a more interactive experience.',
        image: Pingpong,
        git:'https://github.com/prabhathmummaneni/Virtualpingpong',
        technologies:['Python' ,'PyGame' , 'OpenCV']
    },
    {
        title:'SLR',
        description:'Sign Language Recognition addresses the communication barrier for sign language users by processing hand gestures and translating them into text with convolutional neural networks (CNNs).',
        image: SLR,
        git:"https://github.com/prabhathmummaneni/Real-time-Fingerspelling-sign-Language-Recognition",
        technologies:[ 'Python', 'DeepLearning','ObjectDetection']
    }
]

export default Projects