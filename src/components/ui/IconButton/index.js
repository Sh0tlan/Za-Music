import { StyledButton } from "./styled";
import PropTypes from "prop-types";

function IconButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

IconButton.propTypes = {
  children: PropTypes.element,
  withBackground: PropTypes.bool,
  backgroundColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default IconButton;
