import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from "react-router-dom";

import {Link} from "../components/Link";
import {setVisibilityFilter} from "../actions";

// const mapStateToProps = (state, ownProps) => {
//     // console.log(state)
//     // console.log(ownProps)
//     return {
//         active: ownProps.filter === state.visibilityFilter
//     }
// };
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//     // console.log(dispatch)
//     // console.log(ownProps)
//     return {
//         onClick: () => {
//             dispatch(setVisibilityFilter(ownProps.filter))
//         }
//     }
// };

// export const FilterLink = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Link);

export const FilterLink = ({ filter, children }) => (
  <NavLink
      to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
      activeStyle={{
          textDecoration: 'none',
          color: 'black'
      }}
  >
      {children}
  </NavLink>
);
