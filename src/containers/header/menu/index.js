import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  Row, Col, Typography,
  Badge, Popover,
} from 'antd';
import {
  BellOutlined, UserOutlined,
  SettingOutlined, TeamOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { IconOnlyButton } from 'components/buttons';
import PropTypes from 'prop-types';
import { logOut } from 'modules/auth.reducer';
import { RightDrawer } from 'components/drawers';
import { Setting } from './settings';
import Notification from 'containers/notification';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      badge: false,
      visibleNotification: false,
    }
  }

  to = (route) => {
    return this.props.history.push(route);
  }

  onNotification = () => {
    return this.setState({
      badge: !this.state.badge,
      visibleNotification: !this.state.visibleNotification,
    });
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
        this.props.auth.isValid ? <Col flex="0 1 auto">
          <IconOnlyButton icon={<UserOutlined />} onClick={() => this.to('/user')} />
        </Col> :
          <Col flex="0 1 auto">
            <IconOnlyButton icon={<LoginOutlined />} onClick={this.props.onUser} />
          </Col>
      }
      <Col flex="0 1 auto">
        <Popover
          placement="topRight"
          content={<Setting onLogout={this.props.logOut} disabled={!this.props.auth.isValid} />}
          trigger="click"
          overlayStyle={{ position: "fixed", width: "300px" }}
        >
          <IconOnlyButton icon={<SettingOutlined />} />
        </Popover>
      </Col>
      <RightDrawer
        visible={this.state.visibleNotification}
        onClose={this.onNotification}
        settings={<Typography.Text>Test</Typography.Text>}
      >
        <Notification />
      </RightDrawer>
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
