import { LoadingWrapper } from "./styles";

type Props = {
  position?: "default" | "absolute" | undefined;
  color?: "secondary" | "primary" | "blue" | undefined;
};

export function Loading({ position, color }: Props) {
  return (
    <LoadingWrapper position={position} color={color}>
      <div />
      <div />
      <div />
    </LoadingWrapper>
  );
}
