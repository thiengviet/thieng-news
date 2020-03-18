import React from 'react';
import { Row, Col, Typography } from 'antd';
import PropsType from 'prop-types';
import utils from 'helpers/utils';
import { Tooltip } from 'antd';


/**
 * Single #hashtag
 */
function HashTag(props) {
  return <Row gutter={[0, 16]}>
    <Col span={24}>
      <Row justify="space-between">
        <Col flex="0 1 auto">
          <Typography.Text strong>{props.tag}</Typography.Text>
        </Col>
        <Col flex="0 1 auto">
          <Tooltip title={props.count}>
            <Typography.Text>{utils.prettyNumber(props.count)}</Typography.Text>
          </Tooltip>
        </Col>
      </Row>
    </Col>
    <Col span={24}>
      <Typography.Text>{props.description}</Typography.Text>
    </Col>
  </Row>
}

HashTag.defaultProps = {
  count: 0,
}

HashTag.propsType = {
  tag: PropsType.string.isRequired,
  count: PropsType.number,
  description: PropsType.string,
}

export { HashTag }


/**
 * Bulletin board
 */
function Bulletin(props) {
  return <Row gutter={[0, 48]}>
    {
      props.tags.map((tag, i) => {
        return <Col key={i} span={24}>
          <HashTag {...tag} />
        </Col>
      })
    }
  </Row>
}

Bulletin.defaultProps = {
  tags: []
}

Bulletin.propsType = {
  tags: PropsType.array,
}

export { Bulletin }