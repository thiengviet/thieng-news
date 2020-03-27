import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { ImageCard } from 'components/cards';
import { StandardComment } from 'components/comments';
import Action from './action';
import { loremIpsum } from "lorem-ipsum";
import moment from 'moment';
import themes from 'static/styles/themes';
import Shelf from './shelf';


class Status extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    }
  }

  getRandImg = () => {
    let rand = Math.floor(Math.random() * 10);
    let width = (rand + 5) * 100;
    let height = Math.floor(width * 3 / 400) * 100;
    let url = `https://source.unsplash.com/random/${width}x${height}`;
    return url
  }

  onOpen = () => {
    this.setState({ visible: true });
  }

  onClose = () => {
    this.setState({ visible: false });
  }

  render() {
    return <Row gutter={[0, themes.globalVerticalGutter]}>
      <Col xs={24}>
        <ImageCard src={this.getRandImg()} onClick={this.onOpen} />
      </Col>
      <Col xs={24}>
        <Row gutter={[0, 0]}>
          <Col xs={24}>
            <StandardComment
              avatar='https://source.unsplash.com/random?portrait'
              name={'Lionel Messi'}
              content={loremIpsum({ count: 2, units: 'sentence' })}
              time={moment().fromNow()} />
          </Col>
          <Col xs={24}>
            <Action
              onShare={() => { }}
              onLike={() => { }}
              onComment={this.onOpen} />
          </Col>
        </Row>
      </Col>
      <Shelf visible={this.state.visible} onClose={this.onClose} />
    </Row>
  }
}

Status.propTypes = {
  statusId: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Status));