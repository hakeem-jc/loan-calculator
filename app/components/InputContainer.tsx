import React, { ReactNode } from "react";

interface InputContainerProps {
  children: ReactNode;
}

const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-0 items-center sm:flex-row sm:gap-8">
      {children}
    </div>
  );
};

export default InputContainer;