import React, { useEffect } from "react";
import SmartMap from "../../components/SmartMap/SmartMap";
import { authRequest } from "../../utils/axios";

const HEARTBEAT_ENDPOINT = "/heartbeat";
const HEARTBEAT_SPEED = 2000;
// const USER_DETAIL_ENDPOINT = "/userDetails";

const RouteDetails = () => {
  const currentPosition = () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  };

  const pingHeartBeat = async () => {
    try {
      const position = await currentPosition();

      // const response = await authRequest.get(USER_DETAIL_ENDPOINT);
      // const userRole = response.data.user_role;
      // const userId = userRole === "driver" ? response.data.driver_id : response.data.rider_id

      const heartBeatData = {
        userId: 1, //To be replaced with userId
        userRole: "driver", //To be replaced with userRole variable
        timestamp: Date.now(),
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: position.coords.speed,
      };

      authRequest.post(HEARTBEAT_ENDPOINT, heartBeatData);
    } catch (err) {
      console.log(err);
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
