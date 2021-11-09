import { useState } from "react";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import { useMutation, useQuery } from "react-query";
import { API } from "../../../../services/fetch-api";
import { MusicAPIData } from "../../../../types";
import { ActionButton, DefaultButton } from "../../../generics/buttons";
import { FieldWrapper } from "../../../generics/forms";
import { Loading } from "../../../generics/loadings";
import { ModalDefaultWrapper } from "../../../generics/modal-wrapper";
import { MusicBox } from "./music-box";
import { MusicsListWrapper } from "./styles";

type MusicsListResponse = {
  musics: MusicAPIData[];
};

type Props = {
  musicPlaying: MusicAPIData | null;
};

export function MusicsList({ musicPlaying }: Props) {
  const [musics, setMusics] = useState<MusicAPIData[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [musicArtist, setMusicArtist] = useState("");
  const [musicUrl, setMusicUrl] = useState("");

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  const { isLoading, refetch } = useQuery<MusicsListResponse>(
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

  const addMusicMutation = useMutation(
    () => {
      return API.post("/musics/add", {
        artist: musicArtist,
        url: musicUrl,
      });
    },
    {
      onSuccess: () => {
        toast.success("Música adicionada com sucesso!");
      },
      onError: () => {
        toast.error("Não foi possível adicionar a música!");
      },
      onSettled: async () => {
        await refetch();
        setTimeout(() => {
          handleCloseModal();
        }, 800);
      },
    }
  );

  const handleRefetch = async () => {
    await refetch();
  };

  return (
    <MusicsListWrapper>
      {isLoading && <Loading />}

      {!isLoading && (
        <ActionButton colors="primary" size="large" onClick={handleOpenModal}>
          <FiPlus />
        </ActionButton>
      )}

      {!isLoading && musics.length > 0 && (
        <div className="musics-list">
          {musics.map((music, index) => (
            <MusicBox
              key={music.id}
              music={music}
              refetch={handleRefetch}
              index={index + 1}
              isPlaying={musicPlaying?.id === music.id}
            />
          ))}
        </div>
      )}

      {!isLoading && musics.length === 0 && (
        <div className="alert">
          <strong>Não há músicas adicionadas ao bot.</strong>
        </div>
      )}

      <ModalDefaultWrapper
        ModalIcon={<FiPlus />}
        isOpenModal={isOpenModal}
        closeModal={handleCloseModal}
        modalTitle="Adicionar música"
      >
        <>
          <FieldWrapper label="Artista">
            <input
              type="artist"
              value={musicArtist}
              onChange={(e) => setMusicArtist(e.target.value)}
              required
            />
          </FieldWrapper>
          <FieldWrapper label="URL da música">
            <input
              type="url"
              value={musicUrl}
              onChange={(e) => setMusicUrl(e.target.value)}
              required
            />
          </FieldWrapper>

          <DefaultButton
            color="primary"
            size="medium"
            type="button"
            css={{ marginTop: "$3" }}
            onClick={() => {
              addMusicMutation.mutate();
            }}
          >
            {addMusicMutation.isLoading ? "Carregando..." : "Adicionar"}
          </DefaultButton>
        </>
      </ModalDefaultWrapper>
    </MusicsListWrapper>
  );
}
