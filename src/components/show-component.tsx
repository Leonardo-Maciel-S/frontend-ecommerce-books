import { type ReactNode } from "react";

interface ShowComponentProps {
  when: boolean;
  children: ReactNode;
}
const ShowComponent = ({ when, children }: ShowComponentProps) => {
  return <>{when && children}</>;
};

export default ShowComponent;
