import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography, Card } from 'antd';


class Explorer extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Row gutter={[8, 0]} justify="center">
      <Col xs={24} >
        <Card
          title="Default size card"
          extra={<a href="/home">Home</a>}
          style={{ width: 300 }}
        >
          <Card.Grid
            style={{ width: '50%', textAlign: 'center' }}
          >
            <Typography.Text>Hoverable</Typography.Text>
          </Card.Grid>
          <Card.Grid
            style={{ width: '50%', textAlign: 'center' }}
            hoverable={false}>
            <Typography.Text>Unhoverable</Typography.Text>
          </Card.Grid>
        </Card>
      </Col>
    </Row>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Explorer));
