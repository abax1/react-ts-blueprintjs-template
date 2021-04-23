import { FunctionComponent } from "react";
import { Button, Intent } from "@blueprintjs/core";

interface CustomButtonProps {
  id?: string;
  intent?: Intent;
  fill?: boolean;
  onClick: (e: any) => void;
};

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  id,
  intent = Intent.NONE,
  fill = false,
  onClick,
}) => {
  return (
    <Button
      id={id}
      style={{
        borderRadius: "50px",
        boxShadow: "2px 2px 5px 1px rgba(0, 0, 0, .2)",
      }}
      intent={intent}
      fill={fill}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
