import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Drawer, Typography } from 'antd';
import { loremIpsum } from "lorem-ipsum";
import { Swipeable } from 'react-swipeable';


const DEFAULT_HEIGHT = '90%';

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

  onSwipedDown = (data) => {
    console.log(data);
    if (data.velocity > 1) return this.props.onClose();
    if (data.absY > 400) return this.props.onClose();
    return this.setState({ height: DEFAULT_HEIGHT });
  }

  onSwiping = (data) => {
    let deltaY = Math.floor(data.absY);
    let height = `calc(${DEFAULT_HEIGHT} - ${deltaY}px)`;
    this.setState({ height });
  }

  header = () => {
    return <Swipeable onSwipedDown={this.onSwipedDown} onSwiping={this.onSwiping}>"Basic Drawer"</Swipeable>
  }

  render() {
    return <Drawer
      title={this.header()}
      placement="bottom"
      visible={this.props.visible}
      onClose={this.props.onClose}
      closable={false}
      height={this.state.height}
    >
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
      <Typography.Paragraph>{loremIpsum({ count: 4, units: 'paragraph' })}</Typography.Paragraph>
    </Drawer>
  }
}

BottomDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomDrawer));