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

  const { isFetching } = useQuery<MusicsListResponse>(
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
      {isFetching && <Loading />}

      {!isFetching && musics.length > 0 && (
        <>
          {musics.map((music) => (
            <div key={music.id}>
              <h3>{music.name}</h3>
            </div>
          ))}
        </>
      )}

      {!isFetching && musics.length === 0 && (
        <div>
          <strong>Não há músicas adicionadas ao bot.</strong>
        </div>
      )}
    </MusicsListWrapper>
  );
}
