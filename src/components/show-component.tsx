import { type ReactNode } from "react";

interface ShowComponentProps {
  condition: boolean;
  children: ReactNode;
}
const ShowComponent = ({ condition, children }: ShowComponentProps) => {
  return <>{condition && children}</>;
};

export default ShowComponent;
