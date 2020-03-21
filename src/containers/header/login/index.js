import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Modal, Button, Typography } from 'antd';
import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { AppleFilled, FacebookFilled, GoogleOutlined, TwitterOutlined } from '@ant-design/icons';
import configs from 'configs';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { refreshSession, logIn, logOut } from 'modules/auth.reducer';

class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      error: null
    }
  }

  componentDidMount() {
    this.props.refreshSession();
  }

  logIn = (data) => {
    if (data.googleId) {
      this.setState({ error: null });
      let user = {
        service: 'google',
        accessToken: data.tokenId,
        email: data.profileObj.email,
        displayname: data.profileObj.name,
        avatar: data.profileObj.imageUrl,
      }
      this.props.logIn(user);
      return this.props.callback(null, user);
    }
    else if (data.graphDomain === 'facebook') {
      this.setState({ error: null });
      let user = {
        service: 'facebook',
        accessToken: data.accessToken,
        email: data.email,
        displayname: data.name,
        avatar: data.picture.data.url,
      }
      this.props.logIn(user);
      return this.props.callback(null, user);
    } else {
      this.setState({ error: 'Some errors have occured. Please try again!' });
      return this.props.callback('Login errors.', null);
    }
  }

  onClose = () => {
    this.setState({ error: null });
    return this.props.callback(null, null);
  }

  footer = () => {
    return <Row justify="end">
      <Col flex="0 1 auto">
        <Button type="link" >Do you need support?</Button>
      </Col>
    </Row>
  }

  render() {
    return <Modal
      title="Sign In"
      visible={this.props.visible}
      onCancel={this.onClose}
      footer={this.footer()}
      closeIcon={<IoMdClose />}
    >
      <Row gutter={[24, 24]} justify="center">
        <Col span={24}>
          <Typography.Text>You can easily log in to the website with your favourite service and skip the inconvenience of registration.</Typography.Text>
        </Col>
        {this.state.error ? <Col span={24}>
          <Typography.Text type="danger">{this.state.error}</Typography.Text>
        </Col> : null}
        <Col xs={24} md={12}>
          <GoogleLogin
            clientId={configs.auth.google.clientId}
            render={props => <Button
              onClick={props.onClick}
              size="large"
              icon={<GoogleOutlined />}
              style={{ width: "100%" }}
              disabled={props.disabled}
            >Continue with Google</Button>}
            onSuccess={this.logIn}
            onFailure={this.logIn}
            cookiePolicy={'single_host_origin'}
          />
        </Col>
        <Col xs={24} md={12}>
          <Button
            size="large"
            icon={<AppleFilled />}
            style={{ width: "100%" }}
            disabled
          >Continue with Apple</Button>
        </Col>
        <Col xs={24} md={12}>
          <FacebookLogin
            appId={configs.auth.facebook.appId}
            fields='name,email,picture'
            render={props => <Button
              size="large"
              icon={<FacebookFilled />}
              onClick={props.onClick}
              style={{ width: "100%" }}
            >Continue with Facebook</Button>}
            callback={this.logIn} />
        </Col>
        <Col xs={24} md={12}>
          <Button
            size="large"
            icon={<TwitterOutlined />}
            style={{ width: "100%" }}
            disabled
          >Continue with Twitter</Button>
        </Col>
      </Row>
    </Modal>
  }
}

LogIn.defaultProps = {
  callback: () => { },
}

LogIn.propTypes = {
  visible: PropTypes.bool.isRequired,
  callback: PropTypes.func,
}

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => bindActionCreators({
  refreshSession, logIn, logOut,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn));
