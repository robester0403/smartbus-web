import React, { useEffect } from "react";
import SmartMap from "../../components/SmartMap/SmartMap";
import { apiRequest } from "../../utils/axios";
import { currentPositionData } from "../../utils/currentPositionData";

const HEARTBEAT_ENDPOINT = "/heartbeat";
const HEARTBEAT_SPEED = 2000;

const RouteDetails = () => {
  const pingHeartBeat = async () => {
    try {
      const position = await currentPositionData();
      const userRole = "driver";
      const userId = 1;

      const heartBeatData = {
        userId: userId,
        userRole: userRole,
        timestamp: Math.floor(Date.now() / 1000),
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: position.coords.speed,
      };

      apiRequest.post(HEARTBEAT_ENDPOINT, heartBeatData);
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
