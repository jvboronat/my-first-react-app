import PropTypes from 'prop-types'
import Button from './Button'


// rface

export const Header = ({title, onClick}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text ='Add' color='green' onClick={onClick}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'You have to set the title'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    
}

//CSS in line

//const headingStyle = {
    //color: 'red',
    //backgroundColor: 'black',
//}

export default Header


