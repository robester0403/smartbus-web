import {
  GoogleMap,
  LoadScript,
  InfoWindow,
  MarkerF,
} from "@react-google-maps/api";
import React, { useEffect, useState } from "react";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const YOUR_API_KEY = "";
// Enter your api key here, or ask for our api keys

export default function Map() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [toggleOpen, setToggleOpen] = useState(false);

  const success = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    setCurrentLocation({ lat, lng });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  const error = () => {
    console.log("error");
  };

  return (
    <LoadScript googleMapsApiKey={YOUR_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentLocation}
        zoom={10}
      >
        <>
          <MarkerF
            key='marker'
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
            label='You are here!'
            position={currentLocation}
            visible={true}
            clickable
            onClick={() => setToggleOpen(true)}
          >
            {toggleOpen && (
              <InfoWindow
                toggleOpen={toggleOpen}
                center={currentLocation}
                onCloseClick={() => setToggleOpen(false)}
              >
                <div key='marker'>
                  Your coordinates are
                  {`latitude: ${currentLocation.lat}, longitude: ${currentLocation.lng}`}
                </div>
              </InfoWindow>
            )}
          </MarkerF>
        </>
      </GoogleMap>
    </LoadScript>
  );
}
