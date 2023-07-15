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
import { Heart, Pause, Play } from "components/ui/Icons";
import { SubText } from "components/ui/Typography";
import { formatSecondsToMSS } from "utils/time";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";

function TrackRow({
  track,
  index,
  onClick,
  isPlaying,
  handleSaveTrackClick,
  isSaved,
}) {
  return (
    <StyledTrackRow key={track?.id} onClick={() => onClick(track)}>
      <TableData>
        <SongNumberText className="text">
          {track ? (
            String(index + 1).padStart(2, "0")
          ) : (
            <Skeleton width={27} height={27} />
          )}
        </SongNumberText>
        <IconWrapper className="icon">
          {isPlaying ? <Pause /> : <Play />}
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
          {track?.duration ? (
            formatSecondsToMSS(track?.duration)
          ) : (
            <Skeleton width={48} />
          )}
        </SubText>
      </TableData>
      <TableData>
        <TrackSubText>
          {track?.album.title || <Skeleton width={350} />}
        </TrackSubText>
      </TableData>
      <TableData>
        {track ? (
          <StyledIconButton
            width={25}
            height={25}
            onClick={(event) => {
              event.stopPropagation();
              handleSaveTrackClick(track.id);
            }}
          >
            <Heart fill={isSaved ? theme.colors.white : "none"} />
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
  onClick: PropTypes.func,
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
  index: PropTypes.number,
  isPlaying: PropTypes.bool,
  handleSaveTrackClick: PropTypes.func,
  isSaved: PropTypes.bool,
};

export default TrackRow;
