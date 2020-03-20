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
        <Col span={20} onClick={props.onClick} style={{ cursor: "pointer" }}>
          <Typography.Text strong>{props.tag}</Typography.Text>
        </Col>
        <Col span={4}>
          <Row justify="end">
            <Tooltip title={props.count}>
              <Typography.Text>{utils.prettyNumber(props.count)}</Typography.Text>
            </Tooltip>
          </Row>
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
  onClick: () => { console.log('ada') },
}

HashTag.propsType = {
  tag: PropsType.string.isRequired,
  count: PropsType.number,
  description: PropsType.string,
  onClick: PropsType.func,
}

export { HashTag }