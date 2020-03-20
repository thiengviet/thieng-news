import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { ShareAltOutlined, MessageFilled, HeartFilled } from '@ant-design/icons';
import { IconOnlyButton, NeonButton } from 'components/buttons';
import utils from 'helpers/utils';
import themes from 'static/styles/themes';


function Action(props) {
  return <Row justify="space-between" align="middle" style={{ flexWrap: "nowrap" }}>
    <Col flex="0 1 auto">
      <Row gutter={[8, 0]} justify="start" align="middle">
        <Col flex="0 1 auto">
          <IconOnlyButton
            icon={<ShareAltOutlined />}
            onClick={props.onShare} />
        </Col>
        <Col flex="0 1 auto">
          <Typography.Text>{utils.prettyNumber(props.shares)}</Typography.Text>
        </Col>
      </Row>
    </Col>
    <Col flex="0 1 auto">
      <Row gutter={[32, 0]} justify="end" align="middle">
        <Col>
          <Row gutter={[8, 0]} justify="end" align="middle">
            <Col flex="0 1 auto">
              <NeonButton
                color={themes.globalMinorColorOne}
                icon={<MessageFilled />}
                onClick={props.onComment} />
            </Col>
            <Col flex="0 1 auto">
              <Typography.Text>{utils.prettyNumber(props.comments)}</Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col flex="0 1 auto">
          <Row gutter={[8, 0]} justify="end" align="middle">
            <Col flex="0 1 auto">
              <NeonButton
                color={themes.globalPrimaryColor}
                icon={<HeartFilled />}
                onClick={props.onLike} />
            </Col>
            <Col flex="0 1 auto">
              <Typography.Text>{utils.prettyNumber(props.likes)}</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
}

Action.defaultProps = {
  likes: Math.floor(Math.random() * 1000000),
  comments: Math.floor(Math.random() * 1000000),
  shares: Math.floor(Math.random() * 1000000),
}

Action.propTypes = {
  likes: PropTypes.number,
  comments: PropTypes.number,
  shares: PropTypes.number,
  onShare: PropTypes.func,
  onLike: PropTypes.func,
  onComment: PropTypes.func,
}

export default Action;