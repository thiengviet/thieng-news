import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card,
  Typography, Badge
} from 'antd';
import TweenOne from 'rc-tween-one';
import { CircleSpin } from 'components/spins';
import LazyLoad from 'react-lazyload';
import { NeonAvatar } from 'components/avatars';
import { IoIosAdd } from "react-icons/io";
import { IconOnlyButton } from 'components/buttons';
import {
  CloudFilled, HeartFilled, MessageFilled,
  NotificationFilled, UserAddOutlined
} from '@ant-design/icons';
import { NeonButton } from 'components/buttons';
import themes from 'static/styles/themes';


/**
 * Plank card
 */
function PlankCard(props) {
  const iconColor = props.style.color ? { fill: props.style.color } : null;
  const getMargin = () => {
    switch (props.screen) {
      case 'xs':
        return "0px 16px";
      default:
        return "8px 24px";
    }
  }
  return <Card hoverable={props.hoverable} style={{ ...iconColor, ...props.style }}>
    <Row style={{ margin: getMargin() }}>
      <Col span={24}>
        {props.children}
      </Col>
    </Row>
  </Card>
}

PlankCard.defaultProps = {
  style: {},
  screen: 'lg',
  hoverable: true,
}

PlankCard.propTypes = {
  style: PropTypes.object,
  screen: PropTypes.string,
  hoverable: PropTypes.bool,
}

export { PlankCard }


/**
 * Image card
 */
function ImageCard(props) {
  const [loading, setLoading] = useState(true);

  const imgLoaded = () => {
    setLoading(false);
  }

  const MainComponent = <Card
    hoverable={true}
    onClick={props.onClick}
  >
    <TweenOne
      animation={{ opacity: 1, duration: 300 }}
      paused={loading}
      style={{ opacity: 0 }}
    >
      <img
        alt={props.src}
        src={props.src}
        style={{
          borderRadius: themes.globalRadius,
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
  onClick: () => { },
}

ImageCard.propTypes = {
  src: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  onClick: PropTypes.func,
}

export { ImageCard }


/**
 * User card
 */
function UserCard(props) {
  return <Row
    gutter={[16, 0]}
    align="middle"
    style={{ flexWrap: "nowrap" }}
    onClick={props.onUser}
  >
    <Col flex="0 1 auto">
      <NeonAvatar src={props.src} />
    </Col>
    <Col flex="0 1 auto">
      <Row align="stretch">
        <Col span={24}>
          <Row gutter={[16, 0]} style={{ flexWrap: "nowrap" }} >
            <Col flex="0 1 auto">
              <Typography.Text style={{ color: "inherit" }} strong>{props.name}</Typography.Text>
            </Col>
            {props.online ? <Col flex="0 1 auto">
              <Row align="middle" style={{ height: "100%" }}>
                <CloudFilled style={{
                  color: themes.globalSecondaryColor,
                  filter: `drop-shadow(0px 10px 10px ${themes.globalSecondaryColor})`
                }} />
              </Row>
            </Col> : null}
          </Row>
        </Col>
        <Col span={24}>
          <Typography.Text style={{ color: "inherit" }}>{props.mention}</Typography.Text>
        </Col>
      </Row>
    </Col>
  </Row>
}

UserCard.defaultProps = {
  online: false,
  onUser: () => { },
}

UserCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mention: PropTypes.string.isRequired,
  online: PropTypes.bool,
  onUser: PropTypes.func,
}

export { UserCard }


/**
 * Stranger card
 */
function StrangerCard(props) {
  return <Row>
    <Col span={20}>
      <UserCard
        src={props.src}
        name={props.name}
        mention={props.mention}
        online={props.online}
        onUser={props.onUser}
      />
    </Col>
    <Col span={4}>
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Col flex="0 1 auto">
          <IconOnlyButton icon={<IoIosAdd style={{ fill: "inherit" }} />} onClick={props.onAdd} />
        </Col>
      </Row>
    </Col>
  </Row>
}

StrangerCard.defaultProps = {
  onAdd: () => { },
}

StrangerCard.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mention: PropTypes.string.isRequired,
  online: PropTypes.bool,
  onUser: PropTypes.func,
  onAdd: PropTypes.func,
}

export { StrangerCard }


/**
 * Notification card
 */

function NotificationCard(props) {
  const getIcon = (type) => {
    switch (type) {
      case 'connect':
        return {
          icon: <UserAddOutlined />,
          color: themes.globalColors.purple
        }
      case 'like':
        return {
          icon: <HeartFilled />,
          color: themes.globalPrimaryColor
        }
      case 'comment':
        return {
          icon: <MessageFilled />,
          color: themes.globalSecondaryColor
        }
      default:
        return {
          icon: <NotificationFilled />,
          color: themes.globalColors.yellow
        }
    }
  }
  return <Row
    gutter={[24, 0]}
    align="middle"
    style={{ flexWrap: "nowrap" }}
  >
    <Col flex="0 1 auto">
      <Badge dot={props.notRead}>
        <NeonAvatar src={props.src} onClick={props.onUser} />
      </Badge>
    </Col>
    <Col flex="0 1 auto">
      <Row>
        <Col span={24}>
          <Typography.Text>{props.content}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text type="secondary">{props.time}</Typography.Text>
        </Col>
      </Row>
    </Col>
    <Col flex="0 1 auto">
      <NeonButton {...getIcon(props.type)} onClick={props.onDetail} />
    </Col>
  </Row>
}

NotificationCard.defaultProps = {
  type: 'other',
  onUser: () => { },
  onDetail: () => { },
  notRead: false,
}

NotificationCard.propTypes = {
  src: PropTypes.string,
  type: PropTypes.oneOf(['connect', 'like', 'comment', 'other']),
  content: PropTypes.string,
  time: PropTypes.string,
  onUser: PropTypes.func,
  onDetail: PropTypes.func,
  notRead: PropTypes.bool,
}

export { NotificationCard }