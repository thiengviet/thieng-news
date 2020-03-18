import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { loremIpsum } from "lorem-ipsum";
import Trend from 'containers/trend';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Row justify="center">
      <Col xs={20} lg={8} xl={6}>
        <Row gutter={[0, 80]}>
          <Col xs={24}>
            <Trend />
          </Col>
          <Col xs={24}>
            <Typography.Text>
              {loremIpsum({ count: 2, units: 'paragraph' })}
            </Typography.Text>
          </Col>
        </Row>
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
)(Home));
