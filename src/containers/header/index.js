import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Hello world'
    }
  }

  render() {
    return <Fragment>
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
)(Header));
