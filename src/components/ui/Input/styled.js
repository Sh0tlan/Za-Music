import { styled } from "styled-components";

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.colors.lightWhite};
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.white};
  font-size: 22px;
  width: 100%;
  line-height: 27px;
  border-radius: 25px;
  padding: 17px 54px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-image: ${(props) => `url(${props.icon})`};
  background-repeat: no-repeat;
  background-position: 17px 21px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.white};
    outline: none;
  }
`;
