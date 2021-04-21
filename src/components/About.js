import { Link } from 'react-router-dom'
import { MdArrowBack } from 'react-icons/md'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import ridwan from '../Ridwan_Malik.jpg'


const About = () => {
  return (
    <div className='about'>
      <div className="about-heading d-flex">
        <h4>Version 1.0.0</h4>
        <Link to="/" className='link-back'>
          <MdArrowBack className='md-icon' />
          Back To Home
        </Link>
      </div>
      <p>Task Tracker is a simple <a href="https://reactjs.org/">React.js</a> App. That can maintain the tasks you want to do.</p>
      <p>Its use <a href="https://github.com/typicode/json-server">json server</a> as Backend. It's a really light weight handy app for tracking tasks and setting reminder of them</p>
      <p><b>Developed By: </b></p>
      <div className="d-flex f-center">
        <img src={ridwan} alt='Ridwan Malik' className='about-img' />
        <h3 className='dev-name'><b>Ridwan Malik</b></h3>
        <div className="social-menu">
          <a href='https://www.facebook.com/sk.ridwan.malik/' target='_blank' rel='noopener noreferrer'><FaFacebook className='fa-icon' /></a>
          <a href='https://github.com/RidwanMalik/' target='_blank' rel='noopener noreferrer'><FaGithub className='fa-icon' /></a>
          <a href='https://www.linkedin.com/in/skridwanmalik/' target='_blank' rel='noopener noreferrer'><FaLinkedin className='fa-icon' /></a>
          <a href='https://www.instagram.com/skridwanulmalik/' target='_blank' rel='noopener noreferrer'><FaInstagram className='fa-icon' /></a>
          <a href='mailto:skridwanulmalik@gmail.com' target='_blank' rel='noopener noreferrer'><FaRegEnvelope className='fa-icon' /></a>
        </div>
      </div>
    </div>
  )
}

export default About
