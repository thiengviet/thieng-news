import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import themes from 'static/styles/themes';
import Swip from 'containers/swip';
import Statiz from 'containers/statiz';
import Dynamiz from 'containers/dynamiz';

class Home extends Component {

  render() {
    return <Row >
      <Col xs={24}>
        <Swip
          defaultIndex={1}
          gutter={[themes.globalHorizontalGutter, 0]}
        >
          <Col xs={22} md={8} xl={6}>
            <Statiz />
          </Col>
          <Col xs={22} md={14} xl={16}>
            <Dynamiz />
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
