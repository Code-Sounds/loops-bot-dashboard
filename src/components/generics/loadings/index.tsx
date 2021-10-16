import { LoadingWrapper } from "./styles";

type Props = {
  position?: "default" | "absolute" | undefined;
};

export function Loading({ position }: Props) {
  return (
    <LoadingWrapper position={position}>
      <div />
      <div />
      <div />
    </LoadingWrapper>
  );
}
