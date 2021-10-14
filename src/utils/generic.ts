import { getStoragedToken } from "./local-storage-utils";
import { CONSTANTS } from "../constants";
import { isExpired } from "react-jwt";

const { USER_TOKEN_STORE_KEY } = CONSTANTS;

export function isExpiredToken(tokenKey = USER_TOKEN_STORE_KEY): boolean {
  const userToken = getStoragedToken(tokenKey);

  if (!userToken) return true;

  const isExpiredStoragedToken = isExpired(userToken);
  return isExpiredStoragedToken;
}
