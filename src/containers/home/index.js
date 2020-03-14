import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography, Button, Card } from 'antd';
import { SearchOutlined, HeartFilled } from '@ant-design/icons';
import { IconOnlyButton, NeonButton } from 'components/buttons';
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
      <Col xs={20} md={2}>
        <Text>{this.state.data}</Text>
      </Col>
      <Col xs={22} md={10}>
        <Status statusId={'0'} />
        <Status statusId={'0'} />
      </Col>
      <Col xs={20} md={8}>
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
      <Col xs={20} md={4}>
        <Row gutter={[8, 36]}>
          <Col xs={24}>
            <Button type="primary">Button</Button>
          </Col>
          <Col xs={24}>
            <Button shape="circle" icon={<SearchOutlined />} />
          </Col>
          <Col xs={24}>
            <IconOnlyButton icon={<HeartFilled />} />
          </Col>
          <Col xs={24}>
            <NeonButton color="#1be2ff" icon={<HeartFilled />}
            />
          </Col>
        </Row>
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
