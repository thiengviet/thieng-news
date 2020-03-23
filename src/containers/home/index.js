import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Newsfeed from 'containers/newsfeed';
import Tool from 'containers/tool';
import Explorer from 'containers/explorer';
import themes from 'static/styles/themes';

class Home extends Component {

  render() {
    return <Row gutter={[themes.globalHorizontalGutter, 0]} justify="center" >
      <Col xs={0} md={0} xl={6} xxl={5}>
        <Tool />
      </Col>
      <Col xs={22} md={12} xl={9} xxl={9}>
        <Newsfeed />
      </Col>
      <Col xs={22} md={10} xl={7} xxl={6}>
        <Explorer />
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
