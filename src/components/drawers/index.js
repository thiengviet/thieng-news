import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Drawer, Row,
  Col, Tooltip,
  Popover, Button,
} from 'antd';
import { Swipeable } from 'react-swipeable';
import { FiMoreHorizontal } from 'react-icons/fi';
import utils from 'helpers/utils';
import { SettingOutlined } from '@ant-design/icons';


/**
 * Right drawer
 */
class BottomDrawer extends Component {
  constructor() {
    super();

    this.DEFAULT_HEIGHT = '95%';
    this.state = {
      height: this.DEFAULT_HEIGHT
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible)
      if (this.props.visible)
        return this.setState({ height: this.DEFAULT_HEIGHT });
  }

  onSwiped = (data) => {
    if (data.velocity > 1) return this.props.onClose();
    if (data.absY > 300) return this.props.onClose();
    return this.setState({ height: this.DEFAULT_HEIGHT });
  }

  onSwiping = (data) => {
    let direction = data.deltaY > 0;
    let deltaY = Math.floor(data.absY);
    let height = `calc(${this.DEFAULT_HEIGHT} ${direction ? '+' : '-'} ${deltaY}px)`;
    this.setState({ height });
  }

  settings = () => {
    return <Row>
      <Col span={24}>
        {this.props.settings}
      </Col>
    </Row>
  }

  header = () => {
    return <Swipeable
      onSwiped={this.onSwiped}
      onSwiping={this.onSwiping}
      delta={5}
      style={{ margin: "-16px -24px", padding: "16px 24px" }}
    >
      <Row justify="center">
        {
          utils.checkDevice() ?
            <Col xs={4} md={2}
              style={{ backgroundColor: "#000000a6", height: "4px", borderRadius: "2px", cursor: "pointer" }}
            /> :
            <Tooltip title="Click to close">
              <Col xs={4} md={2}
                style={{ backgroundColor: "#000000a6", height: "4px", borderRadius: "2px", cursor: "pointer" }}
                onClick={this.props.onClose}
              />
            </Tooltip>
        }
        <Popover content={this.settings()} placement="bottomRight" trigger="click">
          <FiMoreHorizontal
            style={{ position: "absolute", top: 8, right: 22, cursor: "pointer", fontSize: 20 }}
          />
        </Popover>
      </Row>
    </Swipeable >
  }

  render() {
    return <Drawer
      title={this.header()}
      placement="bottom"
      visible={this.props.visible}
      onClose={this.props.onClose}
      closable={false}
      height={this.state.height}
      drawerStyle={{ borderRadius: "16px 16px 0px 0px", backgroundColor: "#ffffff" }}
      bodyStyle={{ padding: "0px 24px" }}
    >
      <Row>
        <Col span={24}>
          {this.props.children}
        </Col>
      </Row>
    </Drawer >
  }
}

BottomDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  settings: PropTypes.object,
}

export { BottomDrawer }


/**
 * Right drawer
 */
class RightDrawer extends Component {
  constructor() {
    super();

    this.DEFAULT_WIDTH = 325;
    this.state = {
      width: this.DEFAULT_WIDTH
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible)
      if (this.props.visible)
        return this.setState({ width: this.DEFAULT_WIDTH });
  }

  onSwiped = (data) => {
    if (data.velocity > 1) return this.props.onClose();
    if (data.absX > 100) return this.props.onClose();
    return this.setState({ width: this.DEFAULT_WIDTH });
  }

  onSwiping = (data) => {
    let deltaX = Math.floor(data.deltaX);
    let width = this.DEFAULT_WIDTH + deltaX;
    this.setState({ width });
  }

  side = () => {
    return <Swipeable
      onSwiped={this.onSwiped}
      onSwiping={this.onSwiping}
      delta={5}
      style={{
        height: "64px", position: "absolute",
        top: "calc(50% - 32px)", left: "8px",
        margin: "-8px", padding: "8px"
      }}
    >
      {utils.checkDevice() ? <div
        style={{
          backgroundColor: "#000000a6", width: "4px",
          height: "64px", borderRadius: "2px",
          cursor: "pointer", position: "absolute",
          top: "calc(50% - 16px)", left: "8px",
        }}
      /> :
        <Tooltip title="Click to close">
          <div
            style={{
              backgroundColor: "#000000a6", width: "4px",
              height: "64px", borderRadius: "2px",
              cursor: "pointer", position: "absolute",
              top: "calc(50% - 16px)", left: "8px",
            }}
            onClick={this.props.onClose}
          />
        </Tooltip>}
    </Swipeable>
  }

  footer = () => {
    return <Row justify="center">
      <Col flex="0 1 auto">
        <Popover content={this.settings()} placement="top" trigger="click">
          <Button icon={<SettingOutlined />}>Settings</Button>
        </Popover>
      </Col>
    </Row>
  }

  settings = () => {
    return <Row>
      <Col span={24}>
        {this.props.settings}
      </Col>
    </Row>
  }

  render() {
    return <Drawer
      placement="right"
      visible={this.props.visible}
      onClose={this.props.onClose}
      closable={false}
      width={this.state.width}
      drawerStyle={{ borderRadius: "16px 0px 0px 16px", backgroundColor: "#ffffff" }}
      bodyStyle={{ padding: "24px 24px 24px 32px" }}
      footer={this.footer()}
    >
      {this.side()}
      <Row style={{ flexWrap: "nowrap", width: this.DEFAULT_WIDTH - 24 - 32 }}>
        <Col flex="1 1 auto">
          {this.props.children}
        </Col>
      </Row>
    </Drawer >
  }
}

RightDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  settings: PropTypes.object,
}

export { RightDrawer }
