import React, {useEffect} from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';
import { Link,useLocation } from 'react-router-dom';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='flex flex-col min-h-screen'>

      <div className='pt-16 flex-grow bg-black h-full w-full text-white sm:flex sm:justify-around about  overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 I'm a 2025 graduate passionate about software development and machine learning 🤖. With expertise in Java, Python, React, and full-stack development, I love building scalable systems and intelligent applications that drive real-world impact.
              <br/>
              <br/>
              My work spans from developing dynamic applications 🏗️ to leveraging ML for smarter solutions 📊. I also have experience in automation and performance testing to ensure reliability and efficiency ⚡. I thrive on solving complex problems and turning ideas into robust, high-performing systems.
              <br/>
              <br/>
              Let’s <Link className=' text-purple-300 hover:text-purple-400 duration-300' to='/contact'>connect</Link> and create something innovative! 💡
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/1sDNCGvJk3d9x1ENL6TKFFM4S1bH3HxLs/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-16 sm:mt-0 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;