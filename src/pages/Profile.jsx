import React, { useContext } from "react";

import { TokenContext } from "../context/TokenProvider";

export const Profile = () => {
  const token = useContext(TokenContext);
  return (
    <div>
      You are logined right now
      <button
        onClick={() => {
          window.localStorage.removeItem("token");
          token.setIsAuth(false);
        }}
      >
        Log out
      </button>
    </div>
  );
};
