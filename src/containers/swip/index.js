import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { Row } from 'antd';
import { setSwipIndex } from 'modules/ui.reducer';


/**
 * Swipeable container
 */
class Swip extends Component {
  onChange = (index) => {
    return this.props.setSwipIndex(index);
  }

  readResponsiveProps = (props) => {
    const xs = typeof props.xs === 'number' ? props.xs : 24;
    const sm = typeof props.sm === 'number' ? props.sm : xs;
    const md = typeof props.md === 'number' ? props.md : sm;
    const lg = typeof props.lg === 'number' ? props.lg : md;
    const xl = typeof props.xl === 'number' ? props.xl : lg;
    const xxl = typeof props.xxl === 'number' ? props.xxl : xl;
    return { xs, sm, md, lg, xl, xxl }
  }

  calculateGroupViews = (responsiveViews) => {
    let groups = [];
    responsiveViews.forEach((span, index) => {
      if (index === 0)
        return groups.push([{ index, span }]);
      let lastGroup = groups[groups.length - 1];
      let totalSpanInLastGroup = lastGroup.reduce((s, e) => s + e.span, 0);
      if (totalSpanInLastGroup + span > 24)
        return groups.push([{ index, span }]);
      return groups[groups.length - 1].push({ index, span });
    });
    return groups;
  }

  groupViews = (children) => {
    let type = this.props.ui.type;
    let responsiveViews = children.map(view => this.readResponsiveProps(view.props)[type]);
    let groups = this.calculateGroupViews(responsiveViews);
    return groups.map((group, index) => {
      return <Row
        key={index}
        justify="center"
        gutter={this.props.gutter}>
        {group.map(view => children[view.index])}
      </Row>
    });
  }

  render() {
    let { defaultIndex, children } = this.props;
    if (!children) return null;
    children = this.groupViews(children);
    if (children.length === 1) return children;
    return <Row>
      <SwipeableViews
        resistance
        ignoreNativeScroll
        disableLazyLoading
        enableMouseEvents
        index={defaultIndex}
        slideClassName="ant-col ant-col-24"
        slideStyle={{ height: "100vh", overflowX: "hidden" }}
        onChangeIndex={this.onChange}
      >
        {children}
      </SwipeableViews>
    </Row>
  }
}

const mapStateToProps = state => ({
  ui: state.ui
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSwipIndex
}, dispatch);

Swip.defaultProps = {
  defaultIndex: 0,
  gutter: [0, 0]
}

Swip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  defaultIndex: PropTypes.number,
  gutter: PropTypes.array,
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Swip));