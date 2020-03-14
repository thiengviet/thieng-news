import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { CardImage } from 'components/images';
import { StandardComment } from 'components/comments';
import Action from './action';
import { loremIpsum } from "lorem-ipsum";
import moment from 'moment';


class Status extends Component {
  constructor() {
    super();

    this.state = {
      img: "https://source.unsplash.com/random?portrait",
      cover: "https://source.unsplash.com/random/1600x1600",
    }
  }

  render() {
    return <Row gutter={[0, 72]}>
      <Col span={24}>
        <CardImage src={this.state.cover} />
      </Col>
      <Col span={24}>
        <Row gutter={[0, 0]}>
          <Col span={24}>
            <StandardComment
              avatar={this.state.img}
              name={'Lionel Messi'}
              content={loremIpsum({ units: 'paragraph' })}
              time={moment().fromNow()} />
          </Col>
          <Col span={24}>
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