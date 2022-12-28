import { InfoWindowF } from "@react-google-maps/api";
import PropTypes from "prop-types";
import React from "react";

const SmartInfoWindow = ({ open, onCloseClick, children, ...rest }) => {
  return (
    <>
      {open && (
        <InfoWindowF onCloseClick={onCloseClick} {...rest}>
          <>{children}</>
        </InfoWindowF>
      )}
    </>
  );
};

export default SmartInfoWindow;

SmartInfoWindow.defaultProps = {
  open: false,
  onCloseClick: () => {},
  children: null,
};

SmartInfoWindow.propTypes = {
  open: PropTypes.bool,
  onCloseClick: PropTypes.func,
  children: PropTypes.node,
};
