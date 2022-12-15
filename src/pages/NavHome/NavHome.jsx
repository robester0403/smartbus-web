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
  return (
    <div>
      {user?.userIsDriver && (
        <div>
          <div>Hi driver</div>
        </div>
      )}

      {!user?.userIsDriver && (
        <>
          <div>Hi Rider</div>
        </>
      )}
    </div>
  );
};
export default NavHome;
