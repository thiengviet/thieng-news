import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Search from 'containers/search';
import Trend from 'containers/trend';
import Network from 'containers/network';
import themes from 'static/styles/themes';

class Tool extends Component {

  render() {
    return <Row gutter={[0, themes.globalVerticalGutter]} justify="end">
      <Col span={24}>
        <Search />
      </Col>
      <Col span={20}>
        <Trend />
      </Col>
      <Col span={24}>
        <Network />
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
)(Tool));