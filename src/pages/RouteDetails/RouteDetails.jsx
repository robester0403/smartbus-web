import React, { useEffect, useRef, useState } from "react";
import SmartMap from "../../components/SmartMap/SmartMap";
import { apiRequest } from "../../utils/axios";
import { currentPositionData } from "../../utils/currentPositionData";

const HEARTBEAT_ENDPOINT = "/heartbeat";
const HEARTBEAT_SPEED = 2000;

const RouteDetails = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(400);
  const [height, setHeight] = useState(400);

  const pingHeartBeat = async () => {
    try {
      const position = await currentPositionData();
      const userRole = "driver";
      const userId = 1;
      const currentTime = Math.floor(Date.now() / 1000);

      const heartBeatData = {
        userId: userId,
        userRole: userRole,
        timestamp: currentTime,
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

  useEffect(() => {
    const handleResize = () => {
      setWidth(ref.current.offsetWidth);
      setHeight(ref.current.offsetHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }} ref={ref}>
      <SmartMap containerHeight={height} containerWidth={width} />
    </div>
  );
};

export default RouteDetails;
