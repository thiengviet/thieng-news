import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { NeonButton } from 'components/buttons';

class Brand extends Component {
  constructor() {
    super();

    this.state = {
      route: '/home'
    }
  }

  onBrand = () => {
    return window.location.href = this.state.route;
    // return this.props.history.push(this.state.route);
  }

  render() {
    return <Row justify="start" align="middle">
      <Col>
        <NeonButton
          color="#1be2ff"
          icon={<HomeFilled />}
          onClick={this.onBrand}
        />
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
)(Brand));
