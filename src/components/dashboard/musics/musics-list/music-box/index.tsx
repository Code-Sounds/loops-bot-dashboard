import toast from "react-hot-toast";
import { FiClock, FiPlay, FiTrash } from "react-icons/fi";
import { useMutation } from "react-query";
import { API } from "../../../../../services/fetch-api";
import { MusicAPIData } from "../../../../../types";
import { ActionButton } from "../../../../generics/buttons";
import { Loading } from "../../../../generics/loadings";
import { TextHideTooltip } from "../../../../generics/text-tooltip";
import {
  MusicBoxLeft,
  MusicBoxLeftInfos,
  MusicBoxLeftPosition,
  MusicBoxRight,
  MusicBoxWrapper,
} from "./styles";

type Props = {
  music: MusicAPIData;
  refetch: () => void | Promise<void>;
  index: number;
  isPlaying: boolean;
};

export function MusicBox({ music, refetch, index, isPlaying }: Props) {
  const deleteMusicMutation = useMutation(
    () => {
      return API.delete(`/musics/drop/${music.id}`);
    },
    {
      onSuccess: () => {
        toast.success("Música deletada com sucesso!");
        refetch();
      },
      onError: () => {
        toast.error("Erro ao deletar música!");
      },
    }
  );

  function handlePlayMusic() {
    window.open(music.url, "_blank");
  }

  function handleOpenConfirm() {
    const confirm = window.confirm("Deseja realmente deletar esta música?");

    if (confirm) {
      deleteMusicMutation.mutate();
      return;
    }
  }

  return (
    <MusicBoxWrapper>
      <MusicBoxLeft>
        <MusicBoxLeftPosition>
          <strong>{index < 10 ? `0${index}` : index}</strong>
        </MusicBoxLeftPosition>
        <MusicBoxLeftInfos>
          <span>{music.artist} - </span>
          <strong>
            <TextHideTooltip
              displayText={`${music.name.substring(0, 40)}...`}
              fullText={music.name}
              tooltipKey={music.name}
              className="music-name"
            />
          </strong>
        </MusicBoxLeftInfos>
      </MusicBoxLeft>
      <MusicBoxRight>
        {isPlaying && <Loading position="default" color="secondary" />}

        <span className="duration">
          <FiClock />
          {(music.duration / 60).toFixed(2).replace(".", ":")} min
        </span>

        <ActionButton colors="blue" type="button" onClick={handlePlayMusic}>
          <FiPlay />
        </ActionButton>

        <ActionButton
          disabled={isPlaying}
          type="button"
          onClick={handleOpenConfirm}
        >
          <FiTrash />
        </ActionButton>
      </MusicBoxRight>
    </MusicBoxWrapper>
  );
}
