import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography, Card } from 'antd';
import Status from 'containers/status';

const { Text } = Typography;

class Home extends Component {
  constructor() {
    super();

    this.state = {
      data: 'Typography'
    }
  }

  render() {
    return <Row gutter={[{ xs: 16, md: 32, lg: 72 }, 0]} justify="center">
      <Col xs={24} md={12}>
        <Status statusId={'0'} />
        <Status statusId={'0'} />
        <Status statusId={'0'} />
        <Status statusId={'0'} />
      </Col>
      <Col xs={24} md={12} >
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
