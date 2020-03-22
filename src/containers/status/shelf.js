import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';
import { loremIpsum } from "lorem-ipsum";
import { FullComment } from 'components/comments';
import { BottomDrawer } from 'components/drawers';
import moment from 'moment';


class Shelf extends Component {
  constructor() {
    super();

    this.state = {
      standardComments: [
        {
          avatar: 'https://source.unsplash.com/random?portrait',
          name: 'Lionel Messi',
          content: loremIpsum({ count: 2, units: 'sentence' }),
          time: moment().fromNow(),
        },
        {
          avatar: 'https://source.unsplash.com/random?portrait',
          name: 'Lionel Messi',
          content: loremIpsum({ count: 2, units: 'sentence' }),
          time: moment().fromNow(),
        },
        {
          avatar: 'https://source.unsplash.com/random?portrait',
          name: 'Lionel Messi',
          content: loremIpsum({ count: 2, units: 'sentence' }),
          time: moment().fromNow(),
        },
      ]
    }
  }

  render() {
    return <BottomDrawer
      visible={this.props.visible}
      onClose={this.props.onClose}
    >
      <Row gutter={[24, 0]}>
        <Col xs={24} lg={17}>
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
        <Col xs={24} lg={7}>
          <FullComment
            standardComments={this.state.standardComments}
            avatar={this.props.auth.avatar}
            likes={Math.floor(Math.random() * 1000000)}
            shares={Math.floor(Math.random() * 1000000)}
          />
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
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Shelf));