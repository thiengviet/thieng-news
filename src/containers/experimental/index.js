import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Swip from 'containers/swip';
import { Row, Col, Affix } from 'antd';
import Explorer from 'containers/explorer';
import Newsfeed from 'containers/newsfeed';
import RightSider from 'containers/rightsider';
import themes from 'static/styles/themes';

class Experimental extends Component {

  render() {
    return <Row justify="center">
      <Col xs={24}>
        <Swip
          defaultIndex={1}
          gutter={[themes.globalHorizontalGutter, 0]}
        >
          <Col xs={22} md={22} xl={8}>
            <Explorer />
          </Col>
          <Col xs={22} md={14} xl={10}>
            <Newsfeed />
          </Col>
          <Col xs={22} md={8} xl={4}>
            <Affix>
              <RightSider />
            </Affix>
          </Col>
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
