import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Typography, Affix } from 'antd';
import Search from 'containers/search';
import Trend from 'components/trend';
import themes from 'static/styles/themes';

class Statiz extends Component {

  checkAffix = () => {
    const { type } = this.props.ui;
    if (type === 'xs' || type === 'sm') return true;
    return false;
  }

  render() {
    const main = <Row gutter={[0, themes.globalVerticalGutter]} justify="end">
      <Col span={24}>
        <Typography.Title>Logo</Typography.Title>
      </Col>
      <Col span={24}>
        <Search />
      </Col>
      <Col span={20}>
        <Trend />
      </Col>
    </Row>
    return this.checkAffix() ? main : <Affix>{main}</Affix>
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
)(Statiz));
