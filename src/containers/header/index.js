import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Affix } from 'antd';
import Brand from './brand';
import Menu from './menu';
import themes from 'static/styles/themes';

class Header extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return <Affix offsetBottom={0}>
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
              <Menu />
            </Col>
          </Row>
        </Col>
      </Row>
    </Affix>
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
