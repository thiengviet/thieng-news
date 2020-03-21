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
import { Parallax } from 'rc-scroll-anim';
import LazyLoad from 'react-lazyload';


class Status extends Component {
  constructor() {
    super();

    this.state = {
      img: 'https://source.unsplash.com/random?portrait',
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
      <Parallax animation={{ y: 0 }}
        style={{ transform: "translateY(50px)", width: "100%" }} >
        <Col xs={24}>
          <ImageCard src={this.getRandImg()} onClick={this.onOpen} lazy />
        </Col>
      </Parallax>
      <Parallax animation={{ y: 0 }}
        style={{ transform: "translateY(50px)", width: "100%" }} >
        <Col xs={24}>
          <Row gutter={[0, 0]}>
            <Col xs={24}>
              <StandardComment
                avatar={this.state.img}
                name={'Lionel Messi'}
                content={loremIpsum({ count: 2, units: 'sentence' })}
                time={moment().fromNow()} />
            </Col>
            <Col xs={24}>
              <Action
                onShare={this.onOpen}
                onLike={this.onOpen}
                onComment={this.onOpen} />
            </Col>
          </Row>
        </Col>
      </Parallax>
      <LazyLoad height={500} offset={500}>
        <Shelf visible={this.state.visible} onClose={this.onClose} />
      </LazyLoad>
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