export const CONSTANTS = {
  USER_TOKEN_STORE_KEY: "@loopsbot_usertoken",
  USER_STORE_KEY: "@loopsbot_user",
  BASE_API: "https://loops-bot-api.herokuapp.com/api",
  BASE_SOCKET_URL: "https://loops-bot-api.herokuapp.com/",
  // BASE_API: "http://localhost:8080/api",
  // BASE_SOCKET_URL: "http://localhost:8080/",
};

export const SOCKET_EVENTS = {
  droppedMusic: "droppedMusic",
  addedNewMusic: "addedNewMusic",
  musicIsPlaying: "music_is_playing",
  onMusicIsPlaying: "on_music_is_playing",
  getActualMusicPlaying: "get_actual_music_playing",
  getServersConnected: "get_servers_connected",
  serversConnected: "servers_connected",
};
