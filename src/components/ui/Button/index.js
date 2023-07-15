import React from "react";
import { StyledButton } from "./styled";
import PropsType from "prop-types";

function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

Button.propsType = {
  children: PropsType.node,
};

export default Button;
