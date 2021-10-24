import { FiClock, FiPlay, FiTrash } from "react-icons/fi";
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
  function handlePlayMusic() {
    window.open(music.url, "_blank");
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

        <ActionButton colors="blue" onClick={handlePlayMusic}>
          <FiPlay />
        </ActionButton>

        <ActionButton disabled={isPlaying}>
          <FiTrash />
        </ActionButton>
      </MusicBoxRight>
    </MusicBoxWrapper>
  );
}
