import { isExpired } from "react-jwt";
import { CONSTANTS } from "../constants";

const { USER_TOKEN_STORE_KEY } = CONSTANTS;

export function getStoragedToken(
  tokenKey = USER_TOKEN_STORE_KEY
): string | null {
  return localStorage.getItem(tokenKey);
}

export function removeStoredToken(tokenKey = USER_TOKEN_STORE_KEY): void {
  localStorage.removeItem(tokenKey);
}

export function isExpiredToken(tokenKey = USER_TOKEN_STORE_KEY): boolean {
  const userToken = getStoragedToken(tokenKey);

  if (!userToken) return true;

  const isExpiredStoragedToken = isExpired(userToken);
  return isExpiredStoragedToken;
}
