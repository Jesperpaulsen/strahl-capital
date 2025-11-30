import React from "react";

interface ContainerProps {
  bleedMobile?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  bleedMobile = false,
  className = "",
}) => {
  return (
    <div
      className={`
        max-w-7xl w-full mx-auto
        ${bleedMobile ? "md:px-8 lg:px-12" : "px-5 md:px-8 lg:px-12"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;
