import { useContext } from "react";
import { TokenContext } from "../providers/TokenProvider";

export const useTokenContext = () => {
  const token = useContext(TokenContext);

  return token;
};
