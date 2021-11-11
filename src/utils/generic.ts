import { getStoragedToken } from "./local-storage-utils";
import { CONSTANTS } from "../constants";
import { isExpired } from "react-jwt";
import { MusicAPIData } from "../types";

const { USER_TOKEN_STORE_KEY } = CONSTANTS;

export function isExpiredToken(tokenKey = USER_TOKEN_STORE_KEY): boolean {
  const userToken = getStoragedToken(tokenKey);

  if (!userToken) return true;

  const isExpiredStoragedToken = isExpired(userToken);
  return isExpiredStoragedToken;
}

export function formatAudioDurationToString(duration: number): string {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  const defaultValues = [
    {
      unit: "m",
      value: minutes,
    },
    {
      unit: "s",
      value: seconds,
    },
  ];

  const data =
    hours > 0 ? [{ unit: "h", value: hours }, ...defaultValues] : defaultValues;

  const formattedDuration = data
    .map((unit) => {
      const { value, unit: unitName } = unit;
      const time = String(value).padStart(2, "0");
      return `${time}${unitName}`;
    })
    .join(":");

  return formattedDuration;
}

export function getMusicsDurationFormatted(musics: MusicAPIData[]): string {
  const total = musics.reduce((acc, music) => acc + music.duration, 0);
  const time = formatAudioDurationToString(total);
  return time;
}
