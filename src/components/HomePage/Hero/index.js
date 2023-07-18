import PropTypes from "prop-types";
import { ButtonText } from "components/ui/Typography";
import {
  HeroImage,
  HeroText,
  HeroTitleText,
  PlayButton,
  TextWrapper,
  Wrapper,
} from "./styled";

import TabletRadioImage from "assets/img/radio-tablet.png";
import DesktopRadioImage from "assets/img/radio-desktop.png";
import { Play } from "components/ui/Icons";
import { useContext } from "react";
import { PlayerDispatchContext } from "components/context/playerContext";
import { actions } from "components/context/actions";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";

function Hero({ tracks }) {
  const { width } = useWindowSize();

  const dispatch = useContext(PlayerDispatchContext);

  const handlePlayClick = () => {
    dispatch({
      type: actions.SET_TRACKS_DATA,
      track: tracks[0],
      tracks,
      isPlaying: true,
    });
  };

  return (
    <Wrapper>
      <TextWrapper>
        <HeroTitleText>Radio</HeroTitleText>
        <HeroText>Pick your todays mood. We will play a perfect mix!</HeroText>
        <PlayButton
          disabled={!tracks || tracks?.length <= 0}
          onClick={handlePlayClick}
        >
          <Play />
          <ButtonText>Play</ButtonText>
        </PlayButton>
      </TextWrapper>
      <div>
        <HeroImage
          src={width < breakpoints.xl ? TabletRadioImage : DesktopRadioImage}
          alt="Hands holding radio"
        />
      </div>
    </Wrapper>
  );
}

Hero.propTypes = {
  onClick: PropTypes.func,
  track: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    duration: PropTypes.number,
    preview: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
    }),
    album: PropTypes.shape({
      title: PropTypes.string,
      cover: PropTypes.string,
    }),
  }),
};
export default Hero;
