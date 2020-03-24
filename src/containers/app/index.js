import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import 'static/styles/index.css'
import Header from 'containers/header';
import Home from 'containers/home';
import { setScreen } from 'modules/ui.reducer';

class App extends Component {
  constructor(props) {
    super(props);
    props.setScreen(window.innerWidth);
  }

  componentDidMount() {
    window.onresize = () => {
      this.props.setScreen(window.innerWidth);
    }
  }

  render() {
    return <Row justify="center" style={{ overflow: "hidden" }}>
      <Col xs={24}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user" component={Home} />
        </Switch>
      </Col>
      <Col xs={24} >
        <Header />
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setScreen,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
