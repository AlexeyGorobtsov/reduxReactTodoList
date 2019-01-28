import {connect} from 'react-redux';

import {Link} from "../components/Link";
import {setVisibilityFilter} from "../actions";

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    // console.log(ownProps)
    return {
        active: ownProps.filter === state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    // console.log(dispatch)
    // console.log(ownProps)
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};

export const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);
