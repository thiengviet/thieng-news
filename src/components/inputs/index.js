import React, { Component } from 'react';
import PropsType from 'prop-types';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

class Search extends Component {

  render() {
    return <Input
      id="search"
      size="large"
      placeholder="Search..."
      prefix={<SearchOutlined style={{ marginRight: "32px" }} />}
      style={{ "&:hover": { borderStyle: "none" } }}
    />
  }
}

Search.propsType = {
  onChange: PropsType.func,
  onSearch: PropsType.func,
}

export { Search }
