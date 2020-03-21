import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Badge } from 'antd';
import {
  BellOutlined, UserOutlined,
  SettingOutlined, TeamOutlined,
  LoginOutlined, LogoutOutlined,
} from '@ant-design/icons';
import { IconOnlyButton } from 'components/buttons';
import PropTypes from 'prop-types';
import { logOut } from 'modules/auth.reducer';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      badge: false
    }
  }

  to = (route) => {
    return this.props.history.push(route);
  }

  onNotification = () => {
    this.setState({ badge: !this.state.badge });
  }

  render() {
    return <Row gutter={[24, 0]} justify="end" align="middle">
      <Col flex="0 1 auto">
        <IconOnlyButton
          icon={
            <Badge dot={this.state.badge}>
              <BellOutlined />
            </Badge>}
          onClick={this.onNotification} />
      </Col>
      <Col flex="0 1 auto">
        <IconOnlyButton icon={<TeamOutlined />} />
      </Col>
      {
        this.props.auth.isValid ? <Fragment>
          <Col flex="0 1 auto">
            <IconOnlyButton icon={<UserOutlined />} onClick={() => this.to('/user')} />
          </Col>
          <Col flex="0 1 auto">
            <IconOnlyButton icon={<LogoutOutlined />} onClick={this.props.logOut} />
          </Col>
        </Fragment> :
          <Col flex="0 1 auto">
            <IconOnlyButton icon={<LoginOutlined />} onClick={this.props.onUser} />
          </Col>
      }
      <Col flex="0 1 auto">
        <IconOnlyButton icon={<SettingOutlined />} onClick={() => this.to('/experimental')} />
      </Col>
    </Row>
  }
}

Menu.propTypes = {
  onUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({
  logOut,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu));
