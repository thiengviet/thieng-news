import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Swip, { SwipChild } from 'containers/swip';
import { Row, Col } from 'antd';
import Explorer from 'containers/explorer';
import Newsfeed from 'containers/newsfeed';
import RightSider from 'containers/rightsider';

class Experimental extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Row justify="center">
      <Col xs={24} lg={20} xl={18}>
        <Swip defaultIndex={1}>
          <SwipChild xs={24} md={8}>
            <Row justify="center">
              <Col xs={22}>
                <Explorer />
              </Col>
            </Row>
          </SwipChild>
          <SwipChild xs={24} md={12}>
            <Row justify="center">
              <Col xs={22}>
                <Newsfeed />
              </Col>
            </Row>
          </SwipChild>
          <SwipChild xs={24} md={4}>
            <Row justify="center">
              <Col xs={22}>
                <RightSider />
              </Col>
            </Row>
          </SwipChild>
        </Swip>
      </Col>
    </Row>
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
)(Experimental));
