import React from "react";

type Props = {};
interface ButtonProps {
  onClick: () => void;
  name: string;
}
const ButtonBack: React.FC<ButtonProps> = ({ onClick, name }) => {
  return (
    <button type="button" className="btn btn-primary mr-2" onClick={onClick}>
      {name}
    </button>
  );
};

export default ButtonBack;
