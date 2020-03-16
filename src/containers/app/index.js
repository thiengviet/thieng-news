import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import 'static/styles/index.css'
import { Drain } from 'components/drains';
import Header from 'containers/header';
import Home from 'containers/home';
import RightSider from 'containers/rightsider';

class App extends Component {

  render() {
    return <Row justify="center" style={{ overflowX: "hidden" }}>
      <Col span={24}>
        <Drain height={50} />
      </Col>
      <Col span={20}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
        </Switch>
      </Col>
      <Col span={4}>
        <RightSider />
      </Col>
      <Col span={24} >
        <Header />
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
