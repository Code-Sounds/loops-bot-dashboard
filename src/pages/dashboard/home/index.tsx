import { useEffect } from "react";
import { Template } from "../../../components/dashboard/template";
import { SOCKET_EVENTS } from "../../../constants";
import { socket } from "../../../services/socket";
import { ServerConnectedType } from "../../../types";

export function HomePage() {
  useEffect(() => {
    socket.on(SOCKET_EVENTS.serversConnected, (data: ServerConnectedType[]) => {
      console.log(data);
    });
  }, []);

  return (
    <Template>
      <h1>Home page</h1>
    </Template>
  );
}
