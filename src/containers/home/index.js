import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography, Button, Card } from 'antd';

const { Text } = Typography;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Fragment>
      <Row>
        <Col span={8}>
          <Text>{this.state.data}</Text>
        </Col>
        <Col span={8}>
          <Button type="primary">Button</Button>
        </Col>
        <Col span={8}>
          <Card
            title="Default size card"
            extra={<a href="/home">Home</a>}
            style={{ width: 300 }}
          >
            <Card.Grid
              style={{ width: '50%', textAlign: 'center' }}
            >
              <Text>Hoverable</Text>
            </Card.Grid>
            <Card.Grid
              style={{ width: '50%', textAlign: 'center' }}
              hoverable={false}>
              <Text>Unhoverable</Text>
            </Card.Grid>
          </Card>
        </Col>
      </Row>
    </Fragment>
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
