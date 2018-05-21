import React from 'react'
import { connect } from 'react-redux'

const Footer = (props) => (
  <h2>Hey the Count is again {props.count}</h2>
)

const mapStateToProps = state => {
  console.log(state);
  return {
    count: state.counterReducer.count,
    username: state.userReducer.name
  }
}

export default connect(mapStateToProps)(Footer)
