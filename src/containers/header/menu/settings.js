import React from 'react';
import {
  Row, Col,
  Button, Switch, Typography,
  Divider,
} from 'antd';
import { LogoutOutlined, } from '@ant-design/icons';
import PropTypes from 'prop-types';

function Setting(props) {
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
        onClick={props.logOut}
        style={{ width: "100%" }}
        disabled={props.disabled}
      >Log Out</Button>
    </Col>
  </Row>
}

Setting.defaultProps = {
  onLogout: () => { },
  disabled: false,
}

Setting.propTypes = {
  onLogout: PropTypes.func,
  disabled: PropTypes.bool,
}

export { Setting }