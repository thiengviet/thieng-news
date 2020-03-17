import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
import TweenOne from 'rc-tween-one';
import { CircleSpin } from 'components/spins';

function CardImage(props) {
  const [loading, setLoading] = useState(true);
  const imgLoaded = () => {
    setLoading(false);
  }
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
        <CircleSpin />
      </Col>
    </Row> : null}
  </Card>
}
CardImage.propTypes = {
  src: PropTypes.string.isRequired
}
export { CardImage }