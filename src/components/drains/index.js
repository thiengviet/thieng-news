import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';


function Drain(props) {
  return <Row style={{ height: `${props.height}px` }}>
  </Row>
}

Drain.defaultProps = {
  height: 50
}

Drain.propTypes = {
  height: PropTypes.number,
}

export { Drain }