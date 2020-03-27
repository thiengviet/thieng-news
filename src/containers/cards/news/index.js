import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import { loremIpsum } from "lorem-ipsum";

class News extends Component {
  render() {
    return <Row gutter={[0, 16]}>
      <Col span={24}>
        <Typography.Title>
          {loremIpsum({ units: 'sentence' })}
        </Typography.Title>
      </Col>
      <Col span={24}>
        <Typography.Text type="secondary">
          {loremIpsum({ units: 'sentence' })}
        </Typography.Text>
      </Col>
      <Col span={24}>
        <Typography.Text>
          {loremIpsum({ count: 2, units: 'paragraph' })}
        </Typography.Text>
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
)(News));
