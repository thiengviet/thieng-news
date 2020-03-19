import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
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
  }

  onSearch = () => {
    let { value } = this.state;
    console.log(value);
  }

  render() {
    return <Row>
      <Col span={4}>
        <Row span={24} justify="start" align="bottom" style={{ height: "100%" }}>
          <Col flex="0 1 auto">
            <IconOnlyButton
              icon={<FiSearch />}
              onClick={this.onSearch}
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
          onPressEnter={this.onSearch}
        />
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
)(Search));
