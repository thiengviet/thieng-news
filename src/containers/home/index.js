import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Typography, Button, Card } from 'antd';
import { SearchOutlined, HeartFilled } from '@ant-design/icons';
import { IconOnlyButton, NeonButton } from 'components/buttons';

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
      <Row gutter={[8, 8]}>
        <Col span={12} >
          <Text>{this.state.data}</Text>
        </Col>
        <Col span={12} >
          <Row gutter={[8, 8]}>
            <Col xs={24} md={6}>
              <Button type="primary">Button</Button>
            </Col>
            <Col xs={12} md={6}>
              <Button shape="circle" icon={<SearchOutlined />} />
            </Col>
            <Col xs={12} md={6}>
              <IconOnlyButton icon={<HeartFilled />} />
            </Col>
            <Col xs={12} md={6}>
              <NeonButton color="#1be2ff" icon={<HeartFilled />}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24} >
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
        <Col span={24} >
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
        <Col span={24} >
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
        <Col span={24} >
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
        <Col span={24} >
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
        <Col span={24} >
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
        <Col span={24} >
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
        <Col span={24} >
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
        <Col span={24} >
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
    </Fragment >
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
