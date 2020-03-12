import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Hello world'
    }
  }

  render() {
    return <p>{this.state.data}</p>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
