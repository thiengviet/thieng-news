import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import 'static/styles/index.css';
import { Row, Col } from 'antd';
import Header from 'containers/header';
import Home from 'containers/home';

class App extends Component {

  render() {
    return <Fragment>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Header />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={24}>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/user/:userId/:projectId?" component={User} /> */}
          </Switch>
        </Col>
      </Row>
    </Fragment>
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
