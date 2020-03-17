import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Swip, { SwipChild } from 'containers/swip';
import Explorer from 'containers/explorer';
import Newsfeed from 'containers/newsfeed';
import RightSider from 'containers/rightsider';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Swip>
      <SwipChild xs={20} md={20} xl={10}>
        <Newsfeed />
      </SwipChild>
      <SwipChild xs={20} md={10} xl={10}>
        <Explorer />
      </SwipChild>
      <SwipChild xs={20} md={4} xl={4}>
        <RightSider />
      </SwipChild>
    </Swip>
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
