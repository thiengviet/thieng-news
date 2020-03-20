import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Button, Input } from 'antd';
import { PlankCard } from 'components/cards';
import { NeonAvatar } from 'components/avatars';
import { NeonButton } from 'components/buttons';
import { PaperClipOutlined, SmileFilled } from '@ant-design/icons';
import themes from 'static/styles/themes';


class Form extends Component {
  constructor() {
    super();

    this.state = {
      text: null
    }
  }

  onChange = (e) => {
    let text = e.target.value;
    return this.setState({ text });
  }

  render() {
    return <Row>
      <Col span={24}>
        <PlankCard hoverable={true} style={{ padding: "0px 24px" }}>
          <Row gutter={[16, 24]} >
            <Col span={24} />
          </Row>
          <Row style={{ flexWrap: "nowrap" }} gutter={[16, 24]}>
            <Col flex="0 1 auto">
              <NeonAvatar src='https://source.unsplash.com/random?portrait' />
            </Col>
            <Col flex="1 1 auto">
              <Input.TextArea
                placeholder="Write..."
                value={this.state.text}
                onChange={this.onChange}
                autoSize />
            </Col>
          </Row>
          <Row style={{ flexWrap: "nowrap" }} gutter={[24, 24]} justify="end" align="middle">
            <Col flex="0 1 auto">
              <NeonButton color={themes.globalMinorColorOne} icon={<PaperClipOutlined />} />
            </Col>
            <Col flex="0 1 auto">
              <NeonButton color={themes.globalMinorColorTwo} icon={<SmileFilled />} />
            </Col>
            <Col flex="0 1 auto">
              <Button type="primary">Send</Button>
            </Col>
          </Row>
        </PlankCard>
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
)(Form));
