import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onShow, showAddTask}) => {
  return (
    <header className='header'>
       <h1>{title}</h1>
       <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? '#FE5F55' : '#008BF8'} onClick={onShow} />
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
