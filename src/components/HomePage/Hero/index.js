import { ButtonText, MainTitle, Text } from "components/ui/Typography";
import { PlayButton, TextWrapper, Wrapper } from "./styled";

import DesktopRadioImage from "assets/img/radio-desktop.png";
import { Play } from "components/ui/Icons";

function Hero() {
  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>Radio</MainTitle>
        <Text>Pick your todays mood. We will play a perfect mix!</Text>
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
