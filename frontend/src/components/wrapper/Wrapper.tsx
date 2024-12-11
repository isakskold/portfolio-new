import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="mx-auto max-w-5xl min-h-screen px-12">{children}</div>;
};
export default Wrapper;
