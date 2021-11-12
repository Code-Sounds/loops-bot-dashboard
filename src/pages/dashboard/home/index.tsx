import { useEffect, useState } from "react";
import { FiClock, FiMusic, FiUsers } from "react-icons/fi";
import { useQuery } from "react-query";

import { InfosBox } from "../../../components/dashboard/infos-box";
import { ServerConnectedBox } from "../../../components/dashboard/server-connected-box";
import { Template } from "../../../components/dashboard/template";
import { SOCKET_EVENTS } from "../../../constants";
import { API } from "../../../services/fetch-api";
import { socket } from "../../../services/socket";
import { MusicAPIData, ServerConnectedType } from "../../../types";
import { getMusicsDurationFormatted } from "../../../utils/generic";
import {
  getStoredServersConnected,
  storeServersConnected,
} from "../../../utils/local-storage-utils";
import { HomePageContent, HomePageServers, HomePageWrapper } from "./styles";

type MusicsListResponse = {
  musics: MusicAPIData[];
};

export function HomePage() {
  const [serversConnected, setServersConnected] = useState<
    ServerConnectedType[]
  >(getStoredServersConnected());
  const [musics, setMusics] = useState<MusicAPIData[]>([]);

  useQuery<MusicsListResponse>(
    "home-musics",
    async () => {
      const { data } = await API.get<MusicsListResponse>("/musics/list");
      return data;
    },
    {
      onSuccess: (data) => setMusics(data.musics),
      retry: 2,
      refetchOnWindowFocus: true,
    }
  );

  useEffect(() => {
    socket.on(SOCKET_EVENTS.serversConnected, (data: ServerConnectedType[]) => {
      setServersConnected(data);
      storeServersConnected(data);
    });
    socket.on(SOCKET_EVENTS.addedNewMusic, (music: MusicAPIData) => {
      setMusics((prevMusics) => [...prevMusics, music]);
    });
    socket.on(SOCKET_EVENTS.droppedMusic, (music: MusicAPIData) => {
      setMusics((prevMusics) => prevMusics.filter((m) => m.id !== music.id));
    });

    socket.emit(SOCKET_EVENTS.getServersConnected, {});
  }, []);

  return (
    <Template>
      <HomePageWrapper>
        <HomePageContent>
          <InfosBox
            Icon={<FiUsers />}
            title="Servidores conectados"
            value={serversConnected.length}
            theme="orange"
          />
          <InfosBox
            Icon={<FiMusic />}
            title="Quantidade de músicas"
            value={musics.length}
            theme="green"
          />
          <InfosBox
            Icon={<FiClock />}
            title="Tempo de música"
            value={
              musics.length > 0 ? getMusicsDurationFormatted(musics) : "00:00"
            }
            theme="purple"
          />
        </HomePageContent>

        <HomePageServers>
          {serversConnected.length === 0 && (
            <div className="alert">
              <strong>Não há servidores conectados</strong>
            </div>
          )}

          {serversConnected.map((server) => (
            <ServerConnectedBox
              key={server.id}
              id={server.id}
              name={server.name}
            />
          ))}
        </HomePageServers>
      </HomePageWrapper>
    </Template>
  );
}
