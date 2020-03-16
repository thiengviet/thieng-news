import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { Row, Col } from 'antd';
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

  renderPortrait = () => {
    return <Row>
      <SwipeableViews
        resistance
        ignoreNativeScroll
        slideClassName="ant-col ant-col-24">
        <Row justify="center">
          <Col span={20}>
            <Newsfeed />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={20}>
            <Explorer />
          </Col>
        </Row>
        <Row justify="center">
          <Col span={20}>
            <RightSider />
          </Col>
        </Row>
      </SwipeableViews>
    </Row>
  }

  renderLandscape = () => {
    return <Row justify="center">
      <Col span={22}>
        <Row justify="center">
          <Col span={10}>
            <Newsfeed />
          </Col>
          <Col span={10}>
            <Explorer />
          </Col>
          <Col span={4}>
            <RightSider />
          </Col>
        </Row>
      </Col>
    </Row>
  }


  render() {
    const type = this.props.ui.type;
    console.log(type)
    switch (type) {
      case 'xs':
        return this.renderPortrait();
      case 'sm':
        return this.renderPortrait();
      case 'md':
        return this.renderLandscape();
      case 'lg':
        return this.renderLandscape();
      case 'xl':
        return this.renderLandscape();
      case 'xxl':
        return this.renderLandscape();
      default:
        return this.renderLandscape();
    }
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
