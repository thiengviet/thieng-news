import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { ShareAltOutlined, MessageFilled, HeartFilled } from '@ant-design/icons';
import { IconOnlyButton, NeonButton } from 'components/buttons';


function Action(props) {
  return <Row justify="space-between" align="middle" style={{ flexWrap: "nowrap" }}>
    <Col>
      <Row gutter={[2, 0]} justify="start" align="middle">
        <Col>
          <IconOnlyButton
            icon={<ShareAltOutlined />}
            onClick={props.onShare} />
        </Col>
        <Col>
          <Typography.Text>{props.shares}</Typography.Text>
        </Col>
      </Row>
    </Col>
    <Col>
      <Row gutter={[32, 0]} justify="end" align="middle">
        <Col>
          <Row gutter={[2, 0]} justify="end" align="middle">
            <Col>
              <NeonButton
                color="#6e45ff"
                icon={<MessageFilled />}
                onClick={props.onComment} />
            </Col>
            <Col>
              <Typography.Text>{props.comments}</Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row gutter={[2, 0]} justify="end" align="middle">
            <Col>
              <NeonButton
                color="#fe536c"
                icon={<HeartFilled />}
                onClick={props.onLike} />
            </Col>
            <Col>
              <Typography.Text>{props.likes}</Typography.Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
}

Action.defaultProps = {
  likes: '-',
  comments: '-',
  shares: '-',
}

Action.propTypes = {
  likes: PropTypes.string,
  comments: PropTypes.string,
  shares: PropTypes.string,
  onShare: PropTypes.func,
  onLike: PropTypes.func,
  onComment: PropTypes.func,
}

export default Action;