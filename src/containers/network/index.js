import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'antd';
import { PlankCard, UserCard } from 'components/cards';
import theme from 'static/styles/themes';

class Network extends Component {

  render() {
    return <Row>
      <Col span={24}>
        <PlankCard screen={this.props.ui.type}
          style={{
            backgroundColor: theme.globalColors.purple,
            color: "#ffffff",
          }}>
          <Row gutter={[0, 32]}>
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
        </PlankCard>
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