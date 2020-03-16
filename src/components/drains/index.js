import React from 'react';
import PropsType from 'prop-types';
import { Row } from 'antd';


function Drain(props) {
  return <Row style={{ height: `${props.height}px` }}>
  </Row>
}

Drain.defaultProps = {
  height: 50
}

Drain.propsType = {
  height: PropsType.number,
}

export { Drain }