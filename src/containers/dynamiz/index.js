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
      left: [0],
      right: [],
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

  onScroll = () => {
    const component = document.querySelector('#dynamiz');
    const coordinates = component.getBoundingClientRect();
    if (coordinates.height + coordinates.top - window.innerHeight <= 0) {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.loadData, 1000);
    }
  }

  getRandStatus = () => {
    return Math.floor(Math.random() * 10) % 3 + 1;
  }

  loadData = () => {
    const { type } = this.props.ui;
    let { left, right } = this.state;
    const leftHeight = document.querySelector('#left-dynamiz').offsetHeight;
    const rightHeight = document.querySelector('#right-dynamiz').offsetHeight;
    let distribution = (leftHeight - rightHeight) / (450 * 2);
    for (let i = -5; i < 5; i++) {
      if (type === 'xl' || type === 'xxl') {
        if (i > distribution) left.push(this.getRandStatus());
        else right.push(this.getRandStatus());
      }
      else {
        right.push(this.getRandStatus());
      }
    }
    return this.setState({ left, right });
  }

  componentDidMount() {
    this.loadData();
    window.addEventListener('scroll', this.onScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return <Row id="dynamiz" gutter={[themes.globalHorizontalGutter, 0]}>
      <Col xs={24} xl={12}>
        <Row id="left-dynamiz" gutter={[0, themes.globalVerticalGutter]}>
          {
            this.state.left.map((id, i) => {
              return <Col key={i} span={24}>
                {this.getCard(id)}
              </Col>
            })
          }
        </Row>
      </Col>
      <Col xs={24} xl={12}>
        <Row id="right-dynamiz" gutter={[0, themes.globalVerticalGutter]}>
          {
            this.state.right.map((id, i) => {
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
