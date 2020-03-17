import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropsType from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Row } from 'antd';
import { setSwipIndex } from 'modules/ui.reducer';

class Swip extends Component {

  onChange = (index) => {
    return this.props.setSwipIndex(index);
  }

  renderSwip = (children) => {
    return <Row>
      <SwipeableViews
        resistance
        ignoreNativeScroll
        disableLazyLoading
        slideClassName="ant-col ant-col-24"
        onChangeIndex={this.onChange}
      >
        {children}
      </SwipeableViews>
    </Row>
  }

  renderNonSwip = (children) => {
    return children;
  }

  render() {
    if (this.props.disabled)
      return this.renderNonSwip(this.props.children);
    return this.renderSwip(this.props.children)
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSwipIndex
}, dispatch);

Swip.propsType = {
  children: PropsType.object,
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Swip));
