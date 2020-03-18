import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { loremIpsum } from "lorem-ipsum";
import { Search } from './search';
import { Bulletin } from './bulletin';

class Trend extends Component {

  render() {
    return <Row gutter={[0, 80]} justify="end">
      <Col span={24}>
        <Search />
      </Col>
      <Col span={20}>
        <Bulletin tags={[{
          tag: "#coronavirus",
          count: 123456,
          description: loremIpsum({ units: 'sentence' }) + " 🤬🤬"
        }, {
          tag: "#economiccrisis",
          count: 11245699
        }, {
          tag: "#olympictokyo2020",
          count: 112456,
          description: "✌️ " + loremIpsum({ units: 'sentence' })
        }]} />
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
)(Trend));