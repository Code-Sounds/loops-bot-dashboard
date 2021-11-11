import { useEffect } from "react";
import { FiClock, FiMusic, FiUsers } from "react-icons/fi";
import { InfosBox } from "../../../components/dashboard/infos-box";
import { Template } from "../../../components/dashboard/template";
import { SOCKET_EVENTS } from "../../../constants";
import { socket } from "../../../services/socket";
import { ServerConnectedType } from "../../../types";
import { HomePageContent } from "./styles";

export function HomePage() {
  useEffect(() => {
    socket.on(SOCKET_EVENTS.serversConnected, (data: ServerConnectedType[]) => {
      console.log(data);
    });
  }, []);

  return (
    <Template>
      <HomePageContent>
        <InfosBox
          Icon={<FiUsers />}
          title="Servidores conectados"
          value={20}
          theme="orange"
        />
        <InfosBox
          Icon={<FiMusic />}
          title="Músicas disponíveis"
          value={3}
          theme="green"
        />
        <InfosBox
          Icon={<FiClock />}
          title="Tempo de música"
          value="3h"
          theme="purple"
        />
      </HomePageContent>
    </Template>
  );
}
