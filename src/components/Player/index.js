/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "rc-slider";
import PropTypes from "prop-types";
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
  MobileTrackRow,
  BackButton,
  BigTrackImage,
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
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import { useLocation } from "react-router-dom";

function Player() {
  const { width } = useWindowSize();
  const {
    togglePlay,
    toggleOpen,
    toggleVolume,
    onTimeUpdate,
    onTrackTimeDrag,
    onVolumeChange,
    handleNextSong,
    handlePrevSong,
    playerState,
    audioRef,
    track,
    isPlaying,
  } = usePlayer({ width });

  if (!track) {
    return null;
  }

  return (
    <Wrapper
      onClick={playerState.isOpened ? null : toggleOpen}
      open={playerState.isOpened}
    >
      <audio
        ref={audioRef}
        src={track.preview}
        controls
        hidden
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onTimeUpdate}
        onEnded={handleNextSong}
      />
      <PlayerLayout
        track={track}
        handlePrevSong={handlePrevSong}
        togglePlay={togglePlay}
        isPlaying={isPlaying}
        handleNextSong={handleNextSong}
        playerState={playerState}
        onVolumeChange={onVolumeChange}
        onTrackTimeDrag={onTrackTimeDrag}
        toggleVolume={toggleVolume}
        toggleOpen={toggleOpen}
        width={width}
        open={playerState.isOpened}
      ></PlayerLayout>
    </Wrapper>
  );
}

function PlayerLayout({
  track,
  handlePrevSong,
  togglePlay,
  isPlaying,
  handleNextSong,
  playerState,
  onTrackTimeDrag,
  toggleVolume,
  onVolumeChange,
  toggleOpen,
  open,
  width,
}) {
  if (open) {
    return (
      <ContentWrapper display="flex" direction="column" gap={14}>
        <BackButton onClick={toggleOpen}>Back</BackButton>
        <BigTrackImage
          src={track.album.cover_big}
          alt={`${track?.album.title}'s cover`}
        />

        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackInfoTextWrapper>
              <TrackTitle>{track.title}</TrackTitle>
              <ArtistName>{track.title}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfoWrapper>
        </MobileTrackRow>

        <ProgressWrapper open={1}>
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
          <TrackTime last={1} grey={1}>
            {formatSecondsToMSS(playerState?.duration)}
          </TrackTime>
        </ProgressWrapper>
        <ControleWrapper open={1}>
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
        <VolumeWrapper open={1}>
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
    );
  }

  if (width < breakpoints.lg) {
    return (
      <ContentWrapper display="flex" items="center" direction="column" gap={14}>
        <MobileTrackRow>
          <TrackInfoWrapper>
            <TrackImage
              src={track.album.cover}
              alt={`${track?.album.title}'s cover`}
            />
            <TrackInfoTextWrapper>
              <TrackTitle>{track.title}</TrackTitle>
              <ArtistName>{track.title}</ArtistName>
            </TrackInfoTextWrapper>
          </TrackInfoWrapper>

          <IconButton
            onClick={(event) => {
              event.stopPropagation();
              togglePlay();
            }}
            width={55}
            height={55}
            withBackground
          >
            {isPlaying ? <Pause /> : <Play />}
          </IconButton>
        </MobileTrackRow>
        <ProgressWrapper onClick={(event) => event.stopPropagation()}>
          <TrackTime>{formatSecondsToMSS(playerState?.currentTime)}</TrackTime>
          <Slider
            onChange={onTrackTimeDrag}
            step={0.2}
            min={0}
            max={playerState?.duration}
            value={playerState?.currentTime}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, background: theme.colors.white }}
            railStyle={{ height: 8, background: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              background: theme.colors.white,
              marginTop: -3,
            }}
          />
          <TrackTime last={1} grey={1}>
            {formatSecondsToMSS(playerState?.duration)}
          </TrackTime>
        </ProgressWrapper>
      </ContentWrapper>
    );
  }

  return (
    <Wrapper>
      <ContentWrapper display="flex" items="center">
        <TrackInfoWrapper>
          <TrackImage
            src={track.album.cover}
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
          <TrackTime>{formatSecondsToMSS(playerState?.currentTime)}</TrackTime>
          <Slider
            onChange={onTrackTimeDrag}
            step={0.2}
            min={0}
            max={playerState?.duration}
            value={playerState?.currentTime}
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, background: theme.colors.white }}
            railStyle={{ height: 8, background: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              background: theme.colors.white,
              marginTop: -3,
            }}
          />
          <TrackTime grey={1}>
            {formatSecondsToMSS(playerState.duration)}
          </TrackTime>
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

function usePlayer({ width }) {
  const location = useLocation();

  const dispatch = useContext(PlayerDispatchContext);
  const { track, isPlaying } = useContext(PlayerContext);

  const [playerState, setPlayerState] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.1,
    isOpened: false,
  });

  const audioRef = useRef();

  const toggleOpen = () => {
    if (width > breakpoints.lg && !playerState.isOpened) return;
    setPlayerState((prev) => ({ ...prev, isOpened: !prev.isOpened }));
  };

  const togglePlay = () => {
    dispatch({
      type: actions.TOGGLE_PLAY,
    });
  };

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
  }, [audioRef, isPlaying, track]);

  useEffect(() => {
    if (playerState.isOpened) toggleOpen();
  }, [location]);

  useEffect(() => {
    if (playerState.isOpened) {
      document.body.style.overflow = "hidden";
      window.scroll(0, 0);
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [playerState.isOpened]);

  if (width > breakpoints.lg && playerState.isOpened) toggleOpen();

  return {
    togglePlay,
    toggleOpen,
    toggleVolume,
    onTimeUpdate,
    onTrackTimeDrag,
    onVolumeChange,
    handleNextSong,
    handlePrevSong,
    audioRef,
    track,
    playerState,
    isPlaying,
  };
}

PlayerLayout.propTypes = {
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
      cover_big: PropTypes.string,
    }),
  }),
  handlePrevSong: PropTypes.func,
  handleNextSong: PropTypes.func,
  togglePlay: PropTypes.func,
  isPlaying: PropTypes.bool,
  playerState: PropTypes.shape({
    currentTime: PropTypes.number,
    duration: PropTypes.number,
    volume: PropTypes.number,
  }),
  onTrackTimeDrag: PropTypes.func,
  toggleVolume: PropTypes.func,
  onVolumeChange: PropTypes.func,
  toggleOpen: PropTypes.func,
  width: PropTypes.number,
  open: PropTypes.bool,
};

export default Player;
