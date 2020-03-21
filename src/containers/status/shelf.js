import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { loremIpsum } from "lorem-ipsum";
import { NeonAvatar } from 'components/avatars';
import { BottomDrawer } from 'components/drawers';


class Shelf extends Component {

  render() {
    return <BottomDrawer
      visible={this.props.visible}
      onClose={this.props.onClose}
    >
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Row gutter={[16, 0]}>
            <Col flex="0 1 auto">
              <NeonAvatar src='https://source.unsplash.com/random?portrait' />
            </Col>
            <Col flex="1 1 auto">
              <Row>
                <Col span={24}>
                  <Typography.Text strong>Phan Son Tu</Typography.Text>
                </Col>
                <Col span={24}>
                  <Typography.Text>@tuphan</Typography.Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[0, 24]}>
            <Col span={24}>
              <img alt="random" src="https://source.unsplash.com/random/1" width="100%" height="auto" />
            </Col>
            <Col span={24}>
              <Typography.Paragraph>{loremIpsum({ units: 'paragraph' })}</Typography.Paragraph>
              <Typography.Paragraph type="secondary">{loremIpsum({ units: 'paragraph' })}</Typography.Paragraph>
            </Col>
            <Col span={24}>
              <Row gutter={[8, 0]}>
                <Col span={12}>
                  <img alt="random" src="https://source.unsplash.com/random/2" width="100%" height="auto" />
                </Col>
                <Col span={12}>
                  <img alt="random" src="https://source.unsplash.com/random/3" width="100%" height="auto" />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <img alt="random" src="https://source.unsplash.com/random/4" width="100%" height="auto" />
            </Col>
            <Col span={24}>
              <Typography.Title>{loremIpsum({ units: 'sentence' })}</Typography.Title>
              <Typography.Paragraph>{loremIpsum({ units: 'paragraph' })}</Typography.Paragraph>
            </Col>
            <Col span={24}>
              <img alt="random" src="https://source.unsplash.com/random/5" width="100%" height="auto" />
            </Col>
            <Col span={24}>
              <Typography.Paragraph>{loremIpsum({ count: 2, units: 'paragraph' })}</Typography.Paragraph>
            </Col>
          </Row>
        </Col>
      </Row>
    </BottomDrawer>
  }
}

Shelf.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf));