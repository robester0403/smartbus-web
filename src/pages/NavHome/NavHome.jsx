import React, { useState, useEffect } from "react";
import axios from "axios";
import { authRequest } from "../../utils/axios";
const data = {
  username: "username",
  userIsDriver: false,
};
const HEARTBEAT_ENDPOINT = "/heartbeat";
const HEARTBEAT_SPEED = 2000;
const USER_DETAIL_ENDPOINT = "/userDetails";

const NavHome = () => {
  const [user, setUser] = useState({});

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

      const heartBeatData = {
        userId: 1,
        userRole: "Driver", //To be replace with userRole variable
        timestamp: Date.now(),
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        speed: 30,
      };

      // authRequest.post(HEARTBEAT_ENDPOINT, heartBeatData);
      console.log(heartBeatData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setUser(data);

    const heartBeatID = setInterval(() => {
      pingHeartBeat();
    }, HEARTBEAT_SPEED);
    return () => {
      clearInterval(heartBeatID);
    };
  }, []);

  return (
    <div>
      {user?.userIsDriver && (
        <div>
          <div>Hi driver</div>
        </div>
      )}

      {!user?.userIsDriver && <div>Hi Rider</div>}
    </div>
  );
};
export default NavHome;
