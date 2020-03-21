import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Row, Col } from 'antd';
import { Swipeable } from 'react-swipeable';
import { IoMdClose } from 'react-icons/io';


const DEFAULT_HEIGHT = '95%';

class BottomDrawer extends Component {
  constructor() {
    super();

    this.state = {
      height: DEFAULT_HEIGHT
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.visible !== this.props.visible)
      if (this.props.visible)
        return this.setState({ height: DEFAULT_HEIGHT });
  }

  onSwiped = (data) => {
    console.log(data);
    if (data.velocity > 1) return this.props.onClose();
    if (data.absY > 300) return this.props.onClose();
    return this.setState({ height: DEFAULT_HEIGHT });
  }

  onSwiping = (data) => {
    let direction = data.deltaY > 0;
    let deltaY = Math.floor(data.absY);
    let height = `calc(${DEFAULT_HEIGHT} ${direction ? '+' : '-'} ${deltaY}px)`;
    this.setState({ height });
  }

  header = () => {
    return <Swipeable
      onSwiped={this.onSwiped}
      onSwiping={this.onSwiping}
      delta={5}
      style={{ margin: "-16px -24px", padding: "16px 24px" }}
    >
      <Row justify="center">
        <Col xs={4} md={2}
          style={{ backgroundColor: "#000000a6", height: "4px", borderRadius: "2px" }}
        />
        <IoMdClose
          style={{ position: "absolute", top: 12, right: 20, cursor: "pointer" }}
          onClick={this.props.onClose}
        />
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
      bodyStyle={{ padding: "0px 24px" }}
    >
      <Row>
        {this.props.children}
      </Row>
    </Drawer>
  }
}

BottomDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export { BottomDrawer };