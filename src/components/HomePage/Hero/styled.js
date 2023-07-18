import { styled } from "styled-components";
import { device } from "styles/BreakPoints";
import { MainTitle, Text } from "components/ui/Typography";
import Button from "components/ui/Button";

const HERO_IMAGE_HIDDEN_BREAKPOINT = 1050;

export const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0 35px;
  border-radius: 25px;
  width: 100%;
  height: 382px;
  background-color: ${({ theme }) => theme.colors.purple};

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    align-items: center;
    height: 385px;
    text-align: center;
    padding: 41px 32px;
    margin: 30px 0 35px;
  }
`;
export const TextWrapper = styled.div`
  padding-left: 123px;

  ${device.xl} {
    padding: 70px;
  }

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    width: 100%;
    padding: 0;
    ${HERO_IMAGE_HIDDEN_BREAKPOINT}
  }
`;

export const HeroText = styled(Text)`
  max-width: 274px;
`;
export const HeroTitleText = styled(MainTitle)`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    font-size: 45px;
    line-height: 68px;
  }
`;

export const HeroImage = styled.img`
  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    display: none;
  }
`;

export const PlayButton = styled(Button)`
  display: flex;
  gap: 14px;
  align-items: center;

  @media (max-width: ${HERO_IMAGE_HIDDEN_BREAKPOINT}px) {
    margin: 30px auto;
    width: 100%;
    justify-content: center;
  }
`;
