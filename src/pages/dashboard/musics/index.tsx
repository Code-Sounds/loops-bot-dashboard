import { MusicsList } from "../../../components/dashboard/musics/musics-list";
import { Template } from "../../../components/dashboard/template";
import { MusicsPageWrapper } from "./styles";

export function MusicsPage() {
  return (
    <Template>
      <MusicsPageWrapper>
        <MusicsList />
      </MusicsPageWrapper>
    </Template>
  );
}
