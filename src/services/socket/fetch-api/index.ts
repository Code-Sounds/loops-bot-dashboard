import axios from "axios";

import { CONSTANTS } from "../../../constants";

const { USER_TOKEN_STORE_KEY, BASE_API } = CONSTANTS;

const USER_TOKEN = localStorage.getItem(USER_TOKEN_STORE_KEY);
const AuthStr = USER_TOKEN
  ? { Authorization: "Bearer ".concat(USER_TOKEN) }
  : undefined;

export const API = axios.create({
  baseURL: BASE_API,
  headers: AuthStr,
  validateStatus: (status) => {
    if (status === 403) {
      localStorage.clear();
      window.location.href = "/login";
      return false;
    }

    return true;
  },
});
