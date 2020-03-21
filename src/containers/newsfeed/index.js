import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import Status from 'containers/status';
import Form from 'containers/form';
import themes from 'static/styles/themes';


class NewsFeed extends Component {
  constructor() {
    super();

    this.state = {
      total: 5
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.ui.scrollEnd !== this.props.ui.scrollEnd && this.props.ui.scrollEnd)
      this.setState({ total: this.state.total + 5 });
  }

  render() {
    return <Row gutter={[8, themes.globalVerticalGutter]} justify="center">
      <Col span={24}>
        <Form />
      </Col>
      <Col span={24}>
        {
          [...Array(this.state.total).keys()].map(i => <Status key={i} statusId={String(i)} />)
        }
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed));
