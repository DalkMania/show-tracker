import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  displayMessage,
  clearMessage
} from '../../actions/snackbar'
import SnackBar from 'react-material-snackbar'

class SnackBarToast extends Component {
  componentWillReceiveProps = ( nextProps ) => {
     if(nextProps.open === true) {
      setTimeout(() => {
        this.props.clearMessage()
      }, 4000)
    }
  }

  render() {
    return (
        <SnackBar show={this.props.open} timer={4000} onRequestClose={this.props.clearMessage}>
        <p>{this.props.message}</p>
          <span style={{"float": "right", marginLeft: "20px", cursor: "pointer", color: "red"}} onClick={this.props.clearMessage}>Close</span>
      </SnackBar>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.snackbar.message,
    open: state.snackbar.open
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  displayMessage,
  clearMessage
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackBarToast)
