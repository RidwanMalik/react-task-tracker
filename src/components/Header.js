import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
  const onClick = () => {
    console.log("Hello");
  }

  return (
    <header className='header'>
       <h1>{title}</h1>
       <Button text='Add' color='black' onClick={onClick} />
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
