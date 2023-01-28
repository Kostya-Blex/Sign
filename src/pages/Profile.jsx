import React from "react";

import { useTokenContext } from "../hooks/useTokenContext";

export const Profile = () => {
  const { setIsAuth } = useTokenContext();
  return (
    <div>
      You are logined right now
      <button
        onClick={() => {
          window.localStorage.removeItem("token");
          setIsAuth(false);
        }}
      >
        Log out
      </button>
    </div>
  );
};
