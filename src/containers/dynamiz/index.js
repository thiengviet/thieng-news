import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import themes from 'static/styles/themes';

// Info Card
import Form from 'containers/cards/form';
import Status from 'containers/cards/status';
import Network from 'containers/cards/network';
import News from 'containers/cards/news';

class Dynamiz extends Component {
  constructor() {
    super();

    this.state = {
      newfeeds: [0, 1, 1, 2, 2, 1, 3, 1, 1, 2, 1, 2, 1, 3, 2, 1]
    }
  }

  getCard = (id) => {
    switch (id) {
      case 0:
        return <Form />;
      case 1:
        return <Status statusId={String(Math.random())} />;
      case 2:
        return <News />;
      case 3:
        return <Network />;
      default:
        return null;
    }
  }

  render() {
    return <Row gutter={[themes.globalHorizontalGutter, 0]}>
      <Col xs={24} xl={12}>
        <Row gutter={[0, themes.globalVerticalGutter]}>
          {
            this.state.newfeeds.filter((id, i) => i % 2 === 0).map((id, i) => {
              return <Col key={i} span={24}>
                {this.getCard(id)}
              </Col>
            })
          }
        </Row>
      </Col>
      <Col xs={24} xl={12}>
        <Row gutter={[0, themes.globalVerticalGutter]}>
          {
            this.state.newfeeds.filter((id, i) => i % 2 === 1).map((id, i) => {
              return <Col key={i} span={24}>
                {this.getCard(id)}
              </Col>
            })
          }
        </Row>
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dynamiz));
