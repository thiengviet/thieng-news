import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import * as Vibrant from 'node-vibrant';

class NeonAvatar extends Component {
  constructor() {
    super();

    this.state = {
      shadow: { boxShadow: "0px 20px 30px 2px #c7d5ef40" }
    }
  }

  setShadow = (color) => {
    if (!color) color = "#c7d5ef";
    let value = `0px 20px 30px 2px ${color}40`;
    this.setState({ shadow: { boxShadow: value } });
  }

  componentDidMount() {
    let vibrant = new Vibrant(this.props.src);
    vibrant.getPalette().then(palette => {
      this.setShadow(palette.DarkVibrant.hex);
    }).catch(() => {
      this.setShadow("#c7d5ef");
    });
  }

  render() {
    return <Avatar
      size="large"
      shape="square"
      style={this.state.shadow}
      src={this.props.src} />
  }
}

NeonAvatar.propTypes = {
  src: PropTypes.string.isRequired,
}

export { NeonAvatar }