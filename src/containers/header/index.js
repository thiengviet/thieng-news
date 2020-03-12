import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  Row, Col, Affix,
} from 'antd';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Header'
    }
  }

  render() {
    return <Fragment>
      <Affix>
        <Row>
          <Col span={12}>
            <p>{this.state.data}</p>
          </Col>
          <Col span={12}>
            <p>{this.state.data}</p>
          </Col>
        </Row>
      </Affix>
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
