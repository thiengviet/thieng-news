import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Typography, Row, Col, Avatar, Card } from 'antd';
import { ShareAltOutlined, MessageFilled, HeartFilled } from '@ant-design/icons';
import moment from 'moment';
import * as Vibrant from 'node-vibrant';
import { IconOnlyButton, NeonButton } from 'components/buttons';

class Status extends Component {
  constructor() {
    super();

    this.state = {
      img: "https://source.unsplash.com/random?portrait",
      cover: "https://source.unsplash.com/random",
      shadow: { boxShadow: "0px 20px 30px 2px #c7d5ef40" }
    }
  }

  setShadow = (color) => {
    if (!color) color = "#c7d5ef";
    let value = `0px 20px 30px 2px ${color}40`;
    this.setState({ shadow: { boxShadow: value } });
  }

  componentDidMount() {
    let vibrant = new Vibrant(this.state.img);
    vibrant.getPalette().then(palette => {
      this.setShadow(palette.DarkVibrant.hex);
    }).catch(er => {
      this.setShadow("#c7d5ef");
    });
  }

  render() {
    return <Row gutter={[0, 72]} justify="center">
      <Col span={24}>
        <Card
          cover={<img alt={this.state.cover} src={this.state.cover} />}
        />
      </Col>
      <Col span={20}>
        <Row gutter={[24, 8]} style={{ flexWrap: "nowrap" }}>
          <Col>
            <Avatar
              size="large"
              shape="square"
              style={this.state.shadow}
              src={this.state.img} />
          </Col>
          <Col>
            <Row gutter={[0, 12]} justify="space-between">
              <Col>
                <Typography.Text strong>Phan Son Tu</Typography.Text>
              </Col>
              <Col>
                <Typography.Text type="secondary">{moment().fromNow()}</Typography.Text>
              </Col>
              <Col span={24}>
                <Typography.Text>{this.props.content}</Typography.Text>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Row gutter={[2, 0]} justify="start" align="middle">
              <Col>
                <IconOnlyButton icon={<ShareAltOutlined />} />
              </Col>
              <Col>
                <Typography.Text>2</Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <Row gutter={[32, 8]} justify="end" align="middle">
              <Col>
                <Row gutter={[2, 0]} justify="end" align="middle">
                  <Col>
                    <NeonButton color="#6e45ff" icon={<MessageFilled />} />
                  </Col>
                  <Col>
                    <Typography.Text>2</Typography.Text>
                  </Col>
                </Row>
              </Col>
              <Col>
                <Row gutter={[2, 0]} justify="end" align="middle">
                  <Col>
                    <NeonButton color="#fe536c" icon={<HeartFilled />} />
                  </Col>
                  <Col>
                    <Typography.Text>2</Typography.Text>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  }
}

Status.propTypes = {
  content: PropTypes.string.isRequired,
}

export { Status }