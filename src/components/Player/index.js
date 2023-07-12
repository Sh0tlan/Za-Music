import Slider from "rc-slider";

import {
  ArtistName,
  TrackImage,
  TrackInfoWrapper,
  Wrapper,
  TrackInfoTextWrapper,
  ControleWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
  TrackTitle,
} from "./styled";
import { ContentWrapper } from "components/Layout";
import IconButton from "components/ui/IconButton";
import { Pause, Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import { theme } from "styles/Theme";
import { useContext, useEffect, useRef, useState } from "react";
import { formatSecondsToMSS } from "utils/time";
import {
  PlayerContext,
  PlayerDispatchContext,
} from "components/context/playerContext";
import { actions } from "components/context/actions";

function Player() {
  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);

  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.1,
  });

  const audioRef = useRef();

  const togglePlay = () =>
    dispatch({
      type: actions.TOGGLE_PLAY,
    });

  const toggleVolume = () => {
    const newVolume = playerState.volume > 0 ? 0 : 1;

    onVolumeChange(newVolume);
  };

  const onTimeUpdate = () => {
    if (!audioRef?.current) return;
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    setPlayerState((prev) => ({ ...prev, currentTime, duration }));
  };

  const onTrackTimeDrag = (newTime) => {
    if (!audioRef?.current) return;
    audioRef.current.currentTime = newTime;

    setPlayerState((prev) => ({ ...prev, currentTime: newTime }));
  };
  const onVolumeChange = (newVolume) => {
    if (!audioRef?.current) return;
    audioRef.current.volume = newVolume;

    setPlayerState((prev) => ({ ...prev, volume: newVolume }));
  };

  const handleNextSong = () => {
    dispatch({
      type: actions.NEXT_SONG,
    });
  };
  const handlePrevSong = () => {
    dispatch({
      type: actions.PREV_SONG,
    });
  };

  useEffect(() => {
    if (!audioRef?.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((err) => console.log(err));
    } else {
      audioRef.current.pause();
    }
  });

  if (!track) {
    return null;
  }

  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center">
        <audio
          ref={audioRef}
          src={track.preview}
          controls
          hidden
          onTimeUpdate={onTimeUpdate}
          onLoadedMetadata={onTimeUpdate}
          onEnded={handleNextSong}
        />

        <TrackInfoWrapper>
          <TrackImage
            src={track?.album.cover}
            alt={`${track?.album.title}'s cover`}
          />
          <TrackInfoTextWrapper>
            <TrackTitle>{track.title}</TrackTitle>
            <ArtistName>{track.title}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>
        <ControleWrapper>
          <IconButton onClick={handlePrevSong}>
            <SkipLeft />
          </IconButton>
          <IconButton
            onClick={togglePlay}
            width={55}
            height={55}
            withBackground
          >
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
          <IconButton onClick={handleNextSong}>
            <SkipRight></SkipRight>
          </IconButton>
        </ControleWrapper>
        <ProgressWrapper>
          <TrackTime>{formatSecondsToMSS(playerState.currentTime)}</TrackTime>
          <Slider
            onChange={onTrackTimeDrag}
            step={0.2}
            min={0}
            max={playerState.duration}
            value={playerState.currentTime}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, background: theme.colors.white }}
            railStyle={{ height: 8, background: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              background: theme.colors.white,
              marginTop: -3,
            }}
          />
          <TrackTime gray>{formatSecondsToMSS(playerState.duration)}</TrackTime>
        </ProgressWrapper>
        <VolumeWrapper>
          <IconButton onClick={toggleVolume} height={24} width={24}>
            <Volume />
          </IconButton>
          <Slider
            step={0.01}
            min={0}
            max={1}
            value={playerState.volume}
            onChange={onVolumeChange}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, background: theme.colors.white }}
            railStyle={{ height: 8, background: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              background: theme.colors.white,
              marginTop: -3,
            }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

Player.propTypes = {};

export default Player;
