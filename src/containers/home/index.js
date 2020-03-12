import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Button } from 'antd';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Hello world'
    }
  }

  render() {
    return <Fragment>
      <Button type="primary">Button</Button>
      <Row>
        <Col span={12}>
          <p>{this.state.data}</p>
        </Col>
        <Col span={12}>
          <p>{this.state.data}</p>
        </Col>
      </Row>
    </Fragment>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
