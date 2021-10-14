import { CONSTANTS } from "../constants";
import { UserData } from "../types";

const { USER_TOKEN_STORE_KEY, USER_STORE_KEY } = CONSTANTS;

export function getStoragedToken(
  tokenKey = USER_TOKEN_STORE_KEY
): string | null {
  return localStorage.getItem(tokenKey);
}

export function removeStoredToken(tokenKey = USER_TOKEN_STORE_KEY): void {
  localStorage.removeItem(tokenKey);
}

export function setStoredToken(
  token: string,
  tokenKey = USER_TOKEN_STORE_KEY
): void {
  localStorage.setItem(tokenKey, token);
}

export function setStoredUser(user: UserData): void {
  localStorage.setItem(USER_STORE_KEY, JSON.stringify(user));
}

export function getStoredUser(): UserData | null {
  const user = localStorage.getItem(USER_STORE_KEY);
  return user ? JSON.parse(user) : null;
}
