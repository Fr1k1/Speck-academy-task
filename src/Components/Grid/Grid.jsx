import PropTypes from 'prop-types'
import "./Grid.scss";

const Grid = ({ children }) => {
    return (
        <div className='Grid'>{children}</div>
    )
}

Grid.propTypes = {

    children: PropTypes.node
}

export default Grid