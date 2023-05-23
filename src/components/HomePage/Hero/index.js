import { ButtonText, MainTitle } from "components/ui/Typography";
import { HeroText, PlayButton, TextWrapper, Wrapper } from "./styled";

import DesktopRadioImage from "assets/img/radio-desktop.png";
import { Play } from "components/ui/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <HeroText>Pick your todays mood. We will play a perfect mix!</HeroText>
        <PlayButton>
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <div>
        <img src={DesktopRadioImage} alt="Hands holding radio" />
      </div>
    </Wrapper>
  );
}

export default Hero;
