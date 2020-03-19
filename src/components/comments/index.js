import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { NeonAvatar } from 'components/avatars';


function StandardComment(props) {
  return <Row gutter={[24, 0]} style={{ flexWrap: "nowrap" }}>
    <Col flex="0 1 auto">
      <NeonAvatar src={props.avatar} />
    </Col>
    <Col flex="0 1 auto">
      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Row justify="space-between" style={{ flexWrap: "nowrap" }}>
            <Col flex="0 1 auto">
              <Typography.Text strong>{props.name}</Typography.Text>
            </Col>
            <Col flex="0 1 auto">
              <Typography.Text type="secondary">{props.time}</Typography.Text>
            </Col>
          </Row>
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