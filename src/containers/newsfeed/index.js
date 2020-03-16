import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Status from 'containers/status';


class NewsFeed extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Row gutter={[8, 0]} justify="center">
      <Col span={24}>
        <Status statusId={'0'} />
        <Status statusId={'0'} />
        <Status statusId={'0'} />
        <Status statusId={'0'} />
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed));
