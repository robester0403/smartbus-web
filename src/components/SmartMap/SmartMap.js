import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import PropTypes from "prop-types";

const YOUR_API_KEY = process.env.REACT_APP_YOUR_API_KEY;

export default function SmartMap(props) {
  const {
    zoom,
    center,
    isOpen,
    children,
    containerWidth,
    containerHeight,
    ...rest
  } = props;

  return (
    <>
      {isOpen && (
        <LoadScript googleMapsApiKey={YOUR_API_KEY}>
          <GoogleMap
            mapContainerStyle={{
              width: `${containerWidth}px`,
              height: `${containerHeight}px`,
            }}
            {...rest}
            center={center}
            zoom={zoom}
          >
            {children}
          </GoogleMap>
        </LoadScript>
      )}
    </>
  );
}

SmartMap.defaultProps = {
  zoom: 10,
  center: {
    lat: 42.0898,
    lng: -76.8077,
  },
  isOpen: true,
  children: null,
  containerWidth: "400",
  containerHeight: "400",
};

SmartMap.propTypes = {
  zoom: PropTypes.number,
  center: PropTypes.object,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.string,
};
