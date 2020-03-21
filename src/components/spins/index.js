import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function getFontSize(size) {
  switch (size) {
    case 'small':
      return 14;
    case 'medium':
      return 24;
    case 'large':
      return 32;
    default:
      return 24;
  }
}

function CircleSpin(props) {
  let fontSize = getFontSize(props.size);
  return <Spin indicator={<LoadingOutlined style={{ fontSize }} />} />
}
CircleSpin.defaultProps = {
  size: 'medium',
}
CircleSpin.propTypes = {
  size: PropTypes.string,
}
export { CircleSpin }