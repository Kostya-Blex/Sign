import React, { useContext } from "react";

import { TokenContext } from "../context/context";

export const Profile = () => {
  const token = useContext(TokenContext);
  console.log(token.token.getItem("token"));
  return (
    <div>
      You are logined right now
      <button
        onClick={() => {
          token.token.removeItem("token");
          token.setIsAuth(false);
        }}
      >
        Log out
      </button>
    </div>
  );
};
