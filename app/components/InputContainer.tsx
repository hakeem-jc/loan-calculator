import React, { ReactNode } from "react";

interface InputContainerProps {
  children: ReactNode;
}

const InputContainer: React.FC<InputContainerProps> = ({ children }) => {
  return (
    <div className="w-full sm:flex sm:flex-row sm:gap-8">
      {children}
    </div>
  );
};

export default InputContainer;