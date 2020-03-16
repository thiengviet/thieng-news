import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Spin } from 'antd';
import { Row, Col } from 'antd';
import TweenOne from 'rc-tween-one';

function CardImage(props) {
  const [loading, setLoading] = useState(true);
  const imgLoaded = () => {
    setLoading(false);
  }
  console.log(loading)
  return <Card hoverable={true}>
    <TweenOne
      animation={{ opacity: 1, duration: 1000 }}
      paused={loading}
      style={{ opacity: 0 }}
    >
      <img
        alt={props.src}
        src={props.src}
        style={{
          borderRadius: "44px",
          width: "calc(100% + 48px)",
          height: "auto",
          margin: "-24px -24px",
          display: loading ? "none" : "block"
        }}
        onLoad={imgLoaded}
      />
    </TweenOne>
    {loading ? <Row justify="center">
      <Col flex="0 1 auto">
        <Spin />
      </Col>
    </Row> : null}
  </Card>
}
CardImage.propTypes = {
  src: PropTypes.string.isRequired
}
export { CardImage }