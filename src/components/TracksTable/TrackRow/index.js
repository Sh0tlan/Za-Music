import React from "react";
import {
  IconWrapper,
  SongNumberText,
  StyledIconButton,
  StyledTrackRow,
  TableData,
  TrackInfo,
  TrackInfoImage,
  TrackInfoTextWrapper,
  TrackSubText,
  TrackTitle,
} from "./styled";
import { Heart, Play } from "components/ui/Icons";
import { SubText } from "components/ui/Typography";
import { formatSecondsToMSS } from "utils/time";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";

function TrackRow({ track, index }) {
  return (
    <StyledTrackRow key={track?.id}>
      <TableData>
        <SongNumberText className="text">
          {track ? (
            String(index + 1).padStart(2, "0")
          ) : (
            <Skeleton width={27} height={27} />
          )}
        </SongNumberText>
        <IconWrapper className="icon">
          <Play />
        </IconWrapper>
      </TableData>
      <TrackInfo>
        {track ? (
          <TrackInfoImage
            src={track?.album.cover}
            alt={`${track?.album.title}'s cover`}
          />
        ) : (
          <Skeleton width={65} height={65} borderRadius={15} />
        )}
        <TrackInfoTextWrapper>
          <TrackTitle>{track?.title || <Skeleton width={320} />}</TrackTitle>
          <TrackSubText>
            {track?.artist.name || <Skeleton width={250} />}
          </TrackSubText>
        </TrackInfoTextWrapper>
      </TrackInfo>
      <TableData>
        <SubText>
          {formatSecondsToMSS(track?.duration) || <Skeleton width={48} />}
        </SubText>
      </TableData>
      <TableData>
        <TrackSubText>
          {track?.album.title || <Skeleton width={350} />}
        </TrackSubText>
      </TableData>
      <TableData>
        {track ? (
          <StyledIconButton width={25} height={25}>
            <Heart />
          </StyledIconButton>
        ) : (
          <StyledIconButton width={25} height={25}>
            <Skeleton width={25} height={25}></Skeleton>
          </StyledIconButton>
        )}
      </TableData>
    </StyledTrackRow>
  );
}

TrackRow.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ),
  isLoading: PropTypes.bool,
};

export default TrackRow;
