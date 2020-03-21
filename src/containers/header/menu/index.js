import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  Row, Col,
  Badge, Popover,
  Button, Switch, Typography,
  Divider,
} from 'antd';
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

  settings = () => {
    return <Row>
      <Col span={24}>
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Row gutter={[16, 0]}>
              <Col flex="0 1 auto">
                <Switch defaultChecked />
              </Col>
              <Col flex="0 1 auto">
                <Typography.Text>Allowed Navigation</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={24}>
            <Row gutter={[16, 0]}>
              <Col flex="0 1 auto">
                <Switch defaultChecked />
              </Col>
              <Col flex="0 1 auto">
                <Typography.Text>Dark Mode</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Divider />
      <Col span={24}>
        <Button
          icon={<LogoutOutlined />}
          onClick={this.props.logOut}
          style={{ width: "100%" }}
          disabled={!this.props.auth.isValid}
        >Log Out</Button>
      </Col>
    </Row>
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
        <Popover placement="topRight" content={this.settings()} trigger="click">
          <IconOnlyButton icon={<SettingOutlined />} />
        </Popover>
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
