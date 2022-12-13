import React, { useState, useEffect } from "react";
import axios from "axios";
const data = {
  username: "username",
  userIsDriver: false,
};
const HEARTBEAT_ENDPOINT = "";

const NavHome = () => {
  const [user, setUser] = useState({});

  const currentPosition = () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej);
    });
  };

  const pingHeartBeat = async () => {
    const position = await currentPosition();

    const heartBeatData = {
      userId: 1, // Should be included in the Token
      userRole: "Driver", // Should be included in the Token
      timestamp: Date.now(),
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      speed: 30,
    };

    axios.post(HEARTBEAT_ENDPOINT, heartBeatData);
    // console.log(heartBeatData);
  };

  useEffect(() => {
    setUser(data);

    const heartBeatID = setInterval(() => {
      pingHeartBeat();
    }, 2000);
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
