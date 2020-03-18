import React, { Component } from 'react';
import PropsType from 'prop-types';
import { Input, Row, Col } from 'antd';
import { IconOnlyButton } from 'components/buttons';
import { FiSearch } from "react-icons/fi";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      value: null
    }
  }

  onChange = (e) => {
    let value = e.target.value;
    this.setState({ value });
    return this.props.onChange(value);
  }

  render() {
    return <Row>
      <Col span={4}>
        <Row span={24} justify="start" align="bottom" style={{ height: "100%" }}>
          <Col flex="0 1 auto">
            <IconOnlyButton
              icon={<FiSearch />}
              onClick={() => this.props.onSearch(this.state.value)}
            />
          </Col>
        </Row>
      </Col>
      <Col span={20}>
        <Input
          size="large"
          placeholder="Search..."
          style={{ marginLeft: "-11px" }}
          onChange={this.onChange}
          onPressEnter={e => this.props.onSearch(e.target.value)}
        />
      </Col>
    </Row>
  }
}

Search.defaultProps = {
  onChange: (e) => { console.log(e) },
  onSearch: (e) => { console.log(e) },
}

Search.propsType = {
  onChange: PropsType.func,
  onSearch: PropsType.func,
}

export { Search };
