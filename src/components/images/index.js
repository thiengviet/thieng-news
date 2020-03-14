import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

function CardImage(props) {
  return <Card hoverable={true}>
    <img
      alt={props.src}
      src={props.src}
      style={{
        borderRadius: "20px",
        width: "calc(100% + 36px)",
        height: "auto",
        margin: "-18px -18px"
      }}
    />
  </Card>
}
CardImage.propTypes = {
  src: PropTypes.string.isRequired
}
export { CardImage }