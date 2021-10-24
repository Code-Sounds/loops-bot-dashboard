import { useEffect, useState } from "react";
import { MusicsList } from "../../../components/dashboard/musics/musics-list";
import { Template } from "../../../components/dashboard/template";
import { SOCKET_EVENTS } from "../../../constants";
import { socket } from "../../../services/socket";
import { MusicAPIData } from "../../../types";
import { MusicsPageWrapper } from "./styles";

export function MusicsPage() {
  const [actualMusicPlaying, setActualMusicPlaying] =
    useState<MusicAPIData | null>(null);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.onMusicIsPlaying, (data: MusicAPIData) => {
      setActualMusicPlaying(data || null);
    });

    socket.emit(SOCKET_EVENTS.getActualMusicPlaying, {});
  }, []);

  return (
    <Template>
      <MusicsPageWrapper>
        <MusicsList musicPlaying={actualMusicPlaying} />
      </MusicsPageWrapper>
    </Template>
  );
}
