import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Affix } from 'antd';
import Brand from './brand';
import Menu from './menu';
import themes from 'static/styles/themes';
import LogIn from './login';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      visible: false,
    }
  }

  onLogIn = (er, re) => {
    if (er) return console.error(er);
    if (re) console.log(re);
    return this.setState({ visible: false });
  }

  openLogIn = () => {
    return this.setState({ visible: true });
  }

  render() {
    return <Fragment>
      <Affix offsetBottom={0}>
        <Row justify="center" align="middle" style={{
          height: "48px",
          backgroundColor: themes.globalBodyBackgroundColor + "99",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
        }}>
          <Col xs={22}>
            <Row gutter={[8, 0]}>
              <Col xs={4}>
                <Brand />
              </Col>
              <Col xs={20}>
                <Menu onUser={this.openLogIn} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Affix>
      <LogIn visible={this.state.visible} callback={this.onLogIn} />
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
