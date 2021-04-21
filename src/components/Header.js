import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onShow, showAddTask }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' &&
        <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? '#FE5F55' : '#008BF8'} onClick={onShow} />
      }
    </header>
  )
}

Header.defultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
