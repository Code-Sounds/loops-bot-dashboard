import { FiUsers, FiX } from "react-icons/fi";
import { ActionButton } from "../../generics/buttons";
import { ServerConnectedBoxWrapper } from "./styles";

type ServerConnectedBoxProps = {
  name: string;
  id: string;
};

export function ServerConnectedBox({ id, name }: ServerConnectedBoxProps) {
  return (
    <ServerConnectedBoxWrapper>
      <h3>
        <FiUsers />
        {name}
      </h3>

      <ActionButton colors="red" type="button" size="small">
        <FiX />
      </ActionButton>
    </ServerConnectedBoxWrapper>
  );
}
