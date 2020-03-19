import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, Typography } from 'antd';
import TweenOne from 'rc-tween-one';
import { CircleSpin } from 'components/spins';
import LazyLoad from 'react-lazyload';
import { NeonAvatar } from 'components/avatars';
import { IoIosAdd } from "react-icons/io";
import { GoPrimitiveDot } from "react-icons/go";
import { IconOnlyButton } from 'components/buttons';


/**
 * Image card
 */
function ImageCard(props) {
  const [loading, setLoading] = useState(true);

  const imgLoaded = () => {
    setLoading(false);
  }

  const MainComponent = <Card hoverable={true}>
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

  if (props.lazy) return <LazyLoad height={500} offset={500} once children={MainComponent} />
  else return MainComponent
}

ImageCard.defaultProps = {
  lazy: false,
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
}

export { ImageCard }


/**
 * User card
 */
function UserCard(props) {
  return <Row>
    <Col span={20}>
      <Row gutter={[16, 0]} align="middle" style={{ flexWrap: "nowrap" }}>
        <Col flex="0 1 auto">
          <NeonAvatar src={props.src} />
        </Col>
        <Col flex="0 1 auto">
          <Row align="stretch">
            <Col span={24}>
              <Row gutter={[16, 0]} style={{ flexWrap: "nowrap" }} >
                <Col flex="0 1 auto">
                  <Typography.Text strong>{props.name}</Typography.Text>
                </Col>
                {props.online ? <Col flex="0 1 auto">
                  <Row align="middle" style={{ height: "100%" }}>
                    <GoPrimitiveDot style={{ color: "#1be2ff", fontSize: "16px", filter: "drop-shadow(0px 10px 10px #1be2ffff)" }} />
                  </Row>
                </Col> : null}
              </Row>
            </Col>
            <Col span={24}>
              <Typography.Text>{props.mention}</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
    <Col span={4}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Col flex="0 1 auto">
          <IconOnlyButton icon={<IoIosAdd />} onClick={props.onAdd} />
        </Col>
      </Row>
    </Col>
  </Row>
}

UserCard.defaultProps = {
  online: false,
  onAdd: () => { },
}

UserCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mention: PropTypes.string.isRequired,
  online: PropTypes.bool,
  onAdd: PropTypes.func,
}

export { UserCard }
