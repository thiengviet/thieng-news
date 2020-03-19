import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { loremIpsum } from "lorem-ipsum";
import { HashTag } from 'components/tags';


class Trend extends Component {
  constructor() {
    super();

    this.state = {
      tags: [{
        tag: "#coronavirus",
        count: Math.floor(Math.random() * 1000000),
        description: loremIpsum({ units: 'sentence' }) + " 🤬🤬"
      }, {
        tag: "#economiccrisis",
        count: Math.floor(Math.random() * 1000000),
      }, {
        tag: "#olympictokyo2020",
        count: Math.floor(Math.random() * 1000000),
        description: "✌️ " + loremIpsum({ units: 'sentence' })
      }]
    }
  }

  render() {
    return <Row gutter={[0, 32]}>
      {
        this.state.tags.map((tag, i) => {
          return <Col key={i} span={24}>
            <HashTag {...tag} />
          </Col>
        })
      }
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