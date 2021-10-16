import { useState } from "react";
import { useQuery } from "react-query";
import { API } from "../../../../services/fetch-api";
import { MusicAPIData } from "../../../../types";
import { Loading } from "../../../generics/loadings";
import { MusicBox } from "./music-box";
import { MusicsListWrapper } from "./styles";

type MusicsListResponse = {
  musics: MusicAPIData[];
};

export function MusicsList() {
  const [musics, setMusics] = useState<MusicAPIData[]>([]);

  const { isFetching, refetch } = useQuery<MusicsListResponse>(
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

  const handleRefetch = async () => {
    await refetch();
  };

  return (
    <MusicsListWrapper>
      {isFetching && <Loading />}

      {!isFetching && musics.length > 0 && (
        <>
          {musics.map((music) => (
            <MusicBox key={music.id} music={music} refetch={handleRefetch} />
          ))}
        </>
      )}

      {!isFetching && musics.length === 0 && (
        <div className="alert">
          <strong>Não há músicas adicionadas ao bot.</strong>
        </div>
      )}
    </MusicsListWrapper>
  );
}
