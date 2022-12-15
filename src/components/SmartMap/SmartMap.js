import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const YOUR_API_KEY = process.env.REACT_APP_YOUR_API_KEY;

export default function SmartMap(props) {
  const {
    googleMapsApiKey,
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
      <MapContainer
        containerHeight={containerHeight}
        containerWidth={containerWidth}
      >
        {isOpen && (
          <LoadScript googleMapsApiKey={YOUR_API_KEY}>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "100%",
              }}
              {...rest}
              center={center}
              zoom={zoom}
            >
              {children}
            </GoogleMap>
          </LoadScript>
        )}
      </MapContainer>
    </>
  );
}

export const MapContainer = styled.div`
  width: ${(props) => props.containerWidth};
  height: ${(props) => props.containerHeight};
`;
SmartMap.defaultProps = {
  googleMapsApiKey: "process.env.REACT_APP_YOUR_API_KEY",
  zoom: 10,
  center: {
    lat: 42.0898,
    lng: -76.8077,
  },
  isOpen: true,
  children: null,
  containerWidth: "100vw",
  containerHeight: "100vh",
};

SmartMap.propTypes = {
  googleMapsApiKey: PropTypes.string.isRequired,
  zoom: PropTypes.number,
  center: PropTypes.object,
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.string,
};
