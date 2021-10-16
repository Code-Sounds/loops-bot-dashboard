import { useState } from "react";
import { useQuery } from "react-query";
import { API } from "../../../../services/fetch-api";
import { MusicAPIData } from "../../../../types";
import { Loading } from "../../../generics/loadings";
import { MusicsListWrapper } from "./styles";

type MusicsListResponse = {
  musics: MusicAPIData[];
};

export function MusicsList() {
  const [musics, setMusics] = useState<MusicAPIData[]>([]);

  const {} = useQuery<MusicsListResponse>(
    "musics",
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

  return (
    <MusicsListWrapper>
      <h1>Musics List</h1>
      <Loading />
    </MusicsListWrapper>
  );
}
