import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import themes from 'static/styles/themes';
import { NotificationCard } from 'components/cards';
import moment from 'moment';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: [
        props.auth.avatar,
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait',
        'https://source.unsplash.com/random?portrait'
      ]
    }
  }

  render() {
    return <Row gutter={[0, themes.globalVerticalGutter]}>
      {
        this.state.sources.map((src, index) => <Col key={index} span={24}>
          <NotificationCard
            type="like"
            src={src}
            content={`${this.props.auth.displayname} like your post.`}
            time={moment().startOf('day').fromNow()}
          />
        </Col>
        )
      }
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification));
