import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Typography } from 'antd';
import themes from 'static/styles/themes';
import News from 'containers/news';
import Network from 'containers/network';
import Status from 'containers/status';
import Search from 'containers/search';
import Trend from 'containers/trend';


class Discover extends Component {
  constructor() {
    super();

    this.state = {
      total: 5
    }
  }

  render() {
    return <Row gutter={[0, themes.globalVerticalGutter]} justify="end" >
      <Col span={24}>
        <Typography.Title>Logo Here</Typography.Title>
      </Col>
      <Col span={24}>
        <Search />
      </Col>
      <Col span={20}>
        <Trend />
      </Col>
      <Col span={24}>
        <News />
      </Col>
      <Col span={24}>
        <Network />
      </Col>
      <Col span={24}>
        <News />
      </Col>
      <Col span={24}>
        {
          [...Array(this.state.total).keys()].map(i => <Status key={i} statusId={String(i)} />)
        }
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
)(Discover));
