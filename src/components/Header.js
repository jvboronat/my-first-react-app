import PropTypes from 'prop-types'
import Button from './Button'


// rface

export const Header = ({title, onAdd, showAddTask}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text ={showAddTask ? 'Hide':'Add'} color={showAddTask ? 'red':'green'}  onClick={onAdd}/>
            
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


