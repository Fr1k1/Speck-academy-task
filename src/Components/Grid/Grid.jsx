import PropTypes from 'prop-types'
import "./Grid.scss";
import {Grid as GridWrapper} from "../../utils/styles/generalStyles";

const Grid = ({ children }) => {
    return (
       

        <GridWrapper>{children}</GridWrapper>
    )
}

Grid.propTypes = {

    children: PropTypes.node
}

export default Grid