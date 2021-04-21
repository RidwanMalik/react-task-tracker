import { Link } from 'react-router-dom'
import { MdInfo, MdInfoOutline } from "react-icons/md"

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021 <a href="https://to-do-task-tracker.netlify.app/">Task Tracker</a>. All rights reserved.</p>
      <Link to="/about" className='footer-about' style={{ fontSize: "1.2em" }}>
        <div className='init'>
          <MdInfoOutline />
        </div>
        <div className='hover'>
          <MdInfo />
        </div>
      </Link>
    </footer>
  )
}

export default Footer
