import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Badge } from 'antd';
import { BellOutlined, UserOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import { IconOnlyButton } from 'components/buttons';

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      badge: false
    }
  }

  to = (route) => {
    return this.props.history.push(route);
  }

  onNotification = () => {
    this.setState({ badge: !this.state.badge });
  }

  render() {
    return <Row gutter={[24, 0]} justify="end" align="middle">
      <Col>
        <IconOnlyButton
          icon={
            <Badge dot={this.state.badge}>
              <BellOutlined />
            </Badge>}
          onClick={this.onNotification} />
      </Col>
      <Col>
        <IconOnlyButton icon={<TeamOutlined />} />
      </Col>
      <Col>
        <IconOnlyButton icon={<UserOutlined />} onClick={() => this.to('/user')} />
      </Col>
      <Col>
        <IconOnlyButton icon={<SettingOutlined />} />
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
)(Menu));
