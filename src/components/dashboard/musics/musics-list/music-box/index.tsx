import { FiClock, FiPlay, FiTrash } from "react-icons/fi";
import { MusicAPIData } from "../../../../../types";
import { ActionButton } from "../../../../generics/buttons";
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
};

export function MusicBox({ music, refetch }: Props) {
  return (
    <MusicBoxWrapper>
      <MusicBoxLeft>
        <MusicBoxLeftPosition>
          <strong>
            {music.position < 10 ? `0${music.position}` : music.position}
          </strong>
        </MusicBoxLeftPosition>
        <MusicBoxLeftInfos>
          <span>{music.artist} - </span>
          <strong>
            <TextHideTooltip
              displayText={`${music.name.substring(0, 40)}...`}
              fullText={music.name}
              tooltipKey="music-name"
              className="music-name"
            />
          </strong>
        </MusicBoxLeftInfos>
      </MusicBoxLeft>
      <MusicBoxRight>
        <span className="duration">
          <FiClock />
          {(music.duration / 60).toFixed(2).replace(".", ":")} min
        </span>

        <ActionButton colors="blue">
          <FiPlay />
        </ActionButton>

        <ActionButton>
          <FiTrash />
        </ActionButton>
      </MusicBoxRight>
    </MusicBoxWrapper>
  );
}
