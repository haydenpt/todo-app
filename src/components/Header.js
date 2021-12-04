import PropTypes from 'prop-types'
import Sticky from './Sticky'
import { GiNotebook } from 'react-icons/gi'

const Header = ( { title } ) => {
    return (
        <header class='header'>
            <h1>{title}</h1>
            <GiNotebook style={{fontSize: '45'}}/>
            <Sticky/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Things to do',

}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
