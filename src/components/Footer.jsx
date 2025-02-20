import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import '../assets/css/compcodicons.css'


const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='bg-slate-900 h-92px sm:h-50px w-screen p-4 z-10 relative whitespace-nowrap flex justify-between flex-wrap gap-4' style={{ cursor: 'default' }}>
			<p className='text-white text-center w-full sm:w-auto font-light'>© {year} Prabhath. All rights reserved.</p>
			<div className='text-white flex justify-around sm:w-[250px] w-full'>
				
				<a href="mailto:prabhathmummaneni2000@gmail.com" className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
					<FiMail className='text-xl' />
				</a>
				{/* <a href="https://twitter.com/Nithin80875999" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
					<FaTwitter className='text-xl' />
				</a> */}
				<a href="https://www.linkedin.com/in/prabhathmummaneni/" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
					<AiFillLinkedin className='text-xl' />
				</a>
				<a href="https://github.com/prabhathmummaneni" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
					<FaGithub className='text-xl' />
				</a>
			    <a href="https://codeforces.com/profile/prabhath123" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
					<div className='cci cci-codeforces' />
				</a>
				<a href="https://www.codechef.com/users/prabhath123" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }} >
					<div className='cci cci-codechef' />
				</a>	
				{/* <a href="https://medium.com/@goudnithin77" target='_blank' className='transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1' style={{ cursor: 'pointer' }}>
					<AiFillMediumCircle className='text-xl' />
				</a> */}
			</div>
		</div>
	);
}

export default Footer;