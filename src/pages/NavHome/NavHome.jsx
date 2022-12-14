import React, { useState, useEffect } from "react";
const data = {
  username: "username",
  userIsDriver: false,
};

const NavHome = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(data);
  }, []);
  return <div></div>;
};
export default NavHome;
