import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import { UserCard } from 'components/cards';

class Network extends Component {

  getMargin = () => {
    switch (this.props.ui.type) {
      case 'xs':
        return "8px";
      default:
        return "16px 32px";
    }
  }

  render() {
    return <Row>
      <Col span={24}>
        <Card hoverable={true} style={{ backgroundColor: "#ffffff" }}>
          <Row gutter={[0, 32]} style={{ margin: this.getMargin() }}>
            <Col span={24}>
              <UserCard
                src="https://source.unsplash.com/random?portrait"
                name="Hubert Blaine Wolfesch"
                mention="@wolfesch"
              />
            </Col>
            <Col span={24}>
              <UserCard
                src="https://source.unsplash.com/random?portrait"
                name="Lionel Messi"
                mention="@leo"
                online
              />
            </Col>
            <Col span={24}>
              <UserCard
                src="https://source.unsplash.com/random?portrait"
                name="Tu Phan"
                mention="@tuphan"
              />
            </Col>
          </Row>
        </Card>
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
)(Network));