import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Newsfeed from 'containers/newsfeed';
import Discover from 'containers/discover';
import themes from 'static/styles/themes';
import Swip from 'containers/swip';

class Home extends Component {

  render() {
    return <Row >
      <Col xs={24}>
        <Swip
          defaultIndex={1}
          gutter={[themes.globalHorizontalGutter, 0]}
        >
          <Col xs={22} md={9} xl={8}>
            <Discover />
          </Col>
          <Col xs={22} md={11} xl={12}>
            <Newsfeed />
          </Col>
        </Swip>
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
