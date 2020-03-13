import React, { cloneElement } from 'react';
import PropTypes from "prop-types";
import { Button } from 'antd';


/**
 * Neon button
 */
function NeonButton(props) {
  // props.icon.props.style = { filter: `drop-shadow(0px 12px 10px ${props.color}73)` }
  const icon = cloneElement(
    props.icon,
    { style: { filter: `drop-shadow(0px 12px 10px ${props.color}73)` } }
  )
  return <Button {...props}
    shape="circle"
    style={{ color: props.color }}
    icon={icon}
  />
}
NeonButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
}
export { NeonButton };