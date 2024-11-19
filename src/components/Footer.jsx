import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-5">
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="mb-4">
          <p className="text-sm text-center">&copy; 2024 <Link to='/' className='text-red-600'>Coupon_Kit</Link> All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl hover:text-gray-400" />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-gray-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

