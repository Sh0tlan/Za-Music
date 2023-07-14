import { PLAYER_HEIGHT } from "common/constants";
import { SectionSubtitle } from "components/ui/Typography";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);
`;
export const InputWrapper = styled.div`
  margin: 0px auto;
  width: 70%;
`;

export const TableTitle = styled(SectionSubtitle)`
  margin-bottom: 30px;
`;
export const NotFoundText = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
