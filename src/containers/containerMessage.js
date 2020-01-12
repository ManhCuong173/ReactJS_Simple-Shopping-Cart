import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from './../components/message';
import PropTypes from 'prop-types';


class MessageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { message } = this.props;
    return (
      <Message>
        { message }
      </Message>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
}


export default  connect(mapStateToProps, null)(MessageContainer)