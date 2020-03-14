import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

function CardImage(props) {
  return <Card hoverable={true}>
    <img
      alt={props.src}
      src={props.src}
      style={{
        borderRadius: "44px",
        width: "calc(100% + 48px)",
        height: "auto",
        margin: "-24px -24px"
      }}
    />
  </Card>
}
CardImage.propTypes = {
  src: PropTypes.string.isRequired
}
export { CardImage }