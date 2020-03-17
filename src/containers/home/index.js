import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Swip from 'containers/swip';
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

  renderPhone = () => {
    return <Swip>
      <Row justify="center">
        <Col span={20}>
          <Newsfeed />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <Newsfeed />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <RightSider />
        </Col>
      </Row>
    </Swip>
  }

  renderTablet = () => {
    return <Swip>
      <Row gutter={[8, 0]} justify="center">
        <Col span={20}>
          <Newsfeed />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={14}>
          <Newsfeed />
        </Col>
        <Col span={6}>
          <RightSider />
        </Col>
      </Row>
    </Swip>
  }

  renderDesktop = () => {
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
    switch (type) {
      case 'xs':
        return this.renderPhone();
      case 'sm':
        return this.renderTablet();
      case 'md':
        return this.renderTablet();
      case 'lg':
        return this.renderDesktop();
      case 'xl':
        return this.renderDesktop();
      case 'xxl':
        return this.renderDesktop();
      default:
        return this.renderDesktop();
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
