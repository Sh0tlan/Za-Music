import { MOBILE_PLAYER_HEIGHT, PLAYER_HEIGHT } from "common/constants";
import { SectionSubtitle } from "components/ui/Typography";
import { styled } from "styled-components";
import { device } from "styles/BreakPoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  padding-top: 52px;
  padding-bottom: calc(${PLAYER_HEIGHT}px + 50px);

  ${device.lg} {
    padding-bottom: ${MOBILE_PLAYER_HEIGHT}px;
  }
  ${device.md} {
    padding-top: 28px;
    gap: 25px;
  }
`;
export const InputWrapper = styled.div`
  margin: 0px auto;
  width: 70%;

  ${device.lg} {
    width: 100%;
  }
`;

export const TableTitle = styled(SectionSubtitle)`
  margin-bottom: 30px;
  ${device.lg} {
    margin-bottom: 15px;
  }
`;
export const NotFoundText = styled(SectionSubtitle)`
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
