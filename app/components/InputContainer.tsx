import React, { ReactNode } from "react";

interface InputContainerProps {
  children: ReactNode;
}

const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
  return (
    <div className="flex gap-8 items-center">
      {children}
    </div>
  );
};

export default InputContainer;