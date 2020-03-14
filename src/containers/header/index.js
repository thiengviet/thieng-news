import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Affix } from 'antd';
import Brand from './brand';
import Menu from './menu';
import styles from './styles';

class Header extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return <Affix offsetBottom={8}>
      <Row justify="center" align="middle" style={styles.backdropStyle}>
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
