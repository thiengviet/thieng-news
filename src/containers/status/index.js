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


class Status extends Component {
  constructor() {
    super();

    this.state = {
      img: "https://source.unsplash.com/random?portrait",
    }
  }

  getRandImg = () => {
    let rand = Math.floor(Math.random() * 1000) + 600;
    let url = `https://source.unsplash.com/random/${rand}x${rand}`;
    return url
  }

  render() {
    return <Row gutter={[0, themes.globalVerticalGutter]}>
      <Col xs={24}>
        <ImageCard src={this.getRandImg()} lazy/>
      </Col>
      <Col xs={24}>
        <Row gutter={[0, 0]}>
          <Col xs={24}>
            <StandardComment
              avatar={this.state.img}
              name={'Lionel Messi'}
              content={loremIpsum({ units: 'paragraph' })}
              time={moment().fromNow()} />
          </Col>
          <Col xs={24}>
            <Action />
          </Col>
        </Row>
      </Col>
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