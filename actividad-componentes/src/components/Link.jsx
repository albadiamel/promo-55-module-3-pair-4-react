import 'react'
import PropTypes from 'prop-types';

const Link = (props) => {
    return (
        <li>{props.text}</li>
    )
}

export default Link;

Link.propTypes = {
    text: PropTypes.string
}