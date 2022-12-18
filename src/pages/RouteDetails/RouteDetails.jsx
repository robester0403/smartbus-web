import React, { useEffect } from "react";
import SmartMap from "../../components/SmartMap/SmartMap";
import { authRequest } from "../../utils/axios";

const HEARTBEAT_ENDPOINT = "/heartbeat";
const HEARTBEAT_SPEED = 2000;
// TODO: const USER_DETAIL_ENDPOINT = "/userDetails";

const RouteDetails = () => {
  const currentPosition = () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  };

  const pingHeartBeat = async () => {
    try {
      const position = await currentPosition();

      // TODO: const response = await authRequest.get(USER_DETAIL_ENDPOINT);
      const userRole = "driver"; // TODO: replace this with userRole = response.data.user_role;
      const userId = 1; //TODO: replace this with userRole === "driver" ? response.data.driver_id : response.data.rider_id

      const heartBeatData = {
        userId: userId,
        userRole: userRole,
        timestamp: Math.floor(Date.now() / 1000),
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: position.coords.speed,
      };

      // authRequest.post(HEARTBEAT_ENDPOINT, heartBeatData);
      console.log(heartBeatData);
    } catch (err) {
      alert("Please give permission to access your current location");
    }
  };

  useEffect(() => {
    const heartBeatID = setInterval(() => {
      pingHeartBeat();
    }, HEARTBEAT_SPEED);
    return () => {
      clearInterval(heartBeatID);
    };
  }, []);

  return (
    <div>
      <SmartMap />
    </div>
  );
};

export default RouteDetails;
