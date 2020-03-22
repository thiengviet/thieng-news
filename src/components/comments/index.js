import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Input } from 'antd';
import { NeonAvatar } from 'components/avatars';
import { ShareAltOutlined, HeartFilled, SendOutlined } from '@ant-design/icons';
import { IconOnlyButton, NeonButton } from 'components/buttons';
import themes from 'static/styles/themes';
import utils from 'helpers/utils';


/**
 * Stardard comment
 */
function StandardComment(props) {
  return <Row gutter={[16, 0]} style={{ flexWrap: "nowrap" }}>
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


/**
 * Full comments
 */

function FullComment(props) {
  return <Row gutter={[0, 24]}>
    {
      props.standardComments.map((standardCommentProps, index) => <Col key={index} span={24}>
        <StandardComment {...standardCommentProps} />
      </Col>)
    }
    {props.avatar ? <Col span={24}>
      <Row gutter={[0, 24]} justify="end">
        <Col span={24}>
          <Row style={{ flexWrap: "nowrap" }} gutter={[16, 0]}>
            <Col flex="0 1 auto">
              <NeonAvatar src={props.avatar} />
            </Col>
            <Col flex="1 1 auto">
              <Input.TextArea
                placeholder="Write..."
                autoSize />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row align="middle" style={{ flexWrap: "nowrap" }}>
            <Col flex="0 1 auto">
              <Row gutter={[8, 0]} align="middle" style={{ flexWrap: "nowrap" }}>
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
            <Col flex="1 1 auto">
              <Row gutter={[32, 0]} justify="end">
                <Col flex="0 1 auto">
                  <Row gutter={[8, 0]} justify="end" align="middle" style={{ flexWrap: "nowrap" }}>
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
                <Col flex="0 1 auto">
                  <NeonButton
                    color={themes.globalSecondaryColor}
                    icon={<SendOutlined />}
                    onClick={props.onSend} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Col> : null}
  </Row>
}

FullComment.defaultProps = {
  standardComments: [],
  onShare: () => { },
  onLike: () => { },
  onSend: () => { },
}

FullComment.propTypes = {
  standardComments: PropTypes.array,
  avatar: PropTypes.string,
  onShare: PropTypes.func,
  onLike: PropTypes.func,
  onSend: PropTypes.func,
}

export { FullComment }