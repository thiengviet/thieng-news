import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Button, Typography } from 'antd';

class RightSider extends Component {
  constructor() {
    super();

    this.state = {
      collapse: false
    }
  }

  collapse = () => {
    this.setState({ collapse: !this.state.collapse });
  }


  render() {
    return <Row style={{ margin: "10px 0px" }}>
      <Col xs={24}>
        <Typography.Text>Right sider 1</Typography.Text>
        <Button type="primary" onClick={this.collapse}>Collapse</Button>
      </Col>
      <Col xs={24}>
        <Typography.Text>Right sider 2</Typography.Text>
        <Button type="primary" onClick={this.collapse}>Collapse</Button>
      </Col>
      <Col xs={24}>
        <Typography.Text>Right sider 3</Typography.Text>
        <Button type="primary" onClick={this.collapse}>Collapse</Button>
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
)(RightSider));