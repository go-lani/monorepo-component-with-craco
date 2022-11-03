import React from "react";

interface Props {
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  return <button {...props}>Click me ^_^</button>;
};

export default Button;
