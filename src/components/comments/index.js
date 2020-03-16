import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { NeonAvatar } from 'components/avatars';


function StandardComment(props) {
  return <Row gutter={[24, 0]} style={{ flexWrap: "nowrap" }}>
    <Col flex="auto">
      <NeonAvatar src={props.avatar} />
    </Col>
    <Col flex="auto">
      <Row gutter={[0, 12]} justify="space-between">
        <Col>
          <Typography.Text strong>{props.name}</Typography.Text>
        </Col>
        <Col>
          <Typography.Text type="secondary">{props.time}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text>{props.content}</Typography.Text>
        </Col>
      </Row>
    </Col>
  </Row>
}

StandardComment.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export { StandardComment }