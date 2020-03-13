import React, { cloneElement } from 'react';
import PropTypes from "prop-types";
import { Button } from 'antd';

/**
 * Icon only button
 */
function IconOnlyButton(props) {
  return <Button {...props}
    shape="circle"
    style={{
      ...props.style,
      boxShadow: 'none',
      background: 'transparent',
    }}
  />
}
IconOnlyButton.propTypes = {
  icon: PropTypes.object.isRequired,
}
export { IconOnlyButton };


/**
 * Neon button
 */
function NeonButton(props) {
  const icon = cloneElement(
    props.icon,
    { style: { filter: `drop-shadow(0px 20px 15px ${props.color}ff)` } }
  )
  return <IconOnlyButton {...props}
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