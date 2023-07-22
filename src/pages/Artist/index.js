import TracksTable from "components/TracksTable";
import { Music } from "components/ui/Icons";
import { MainTitle, SmallText } from "components/ui/Typography";

import { useParams } from "react-router-dom";

import { loadArtist } from "services/api";
import {
  ArtistImage,
  ArtistImageLoaderWrapper,
  ArtistInfoWrapper,
  SongsCountWrapper,
  TextWrapper,
  Wrapper,
} from "./styled";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";
import { useWindowSize } from "hooks/useWindowSize";
import { breakpoints } from "styles/BreakPoints";
import useLoadData from "hooks/useLoadData";

function Artist() {
  const { artistId } = useParams();
  const { width } = useWindowSize();
  const [artist, isLoading] = useLoadData(() => loadArtist(artistId));

  return (
    <Wrapper>
      <ArtistInfoWrapper>
        {artist ? (
          <ArtistImage
            src={artist?.artist.picture_big}
            alt={`${artist?.artist?.name}'s photo`}
          ></ArtistImage>
        ) : (
          <Skeleton
            width={width < breakpoints.md ? "100%" : 350}
            height={width < breakpoints.md ? 176 : 350}
            borderRadius={25}
            wrapper={ArtistImageLoaderWrapper}
          ></Skeleton>
        )}
        <TextWrapper>
          <MainTitle>
            {artist?.artist.name || <Skeleton width={100} />}
          </MainTitle>
          <SongsCountWrapper>
            <Music color={theme.colors.secondaryGrey} />
            <SmallText>
              {isLoading ? (
                <Skeleton width={40} />
              ) : (
                ` ${artist?.artist?.nb_fan} songs`
              )}
            </SmallText>
          </SongsCountWrapper>
        </TextWrapper>
      </ArtistInfoWrapper>
      <div>
        <TracksTable
          isLoading={isLoading}
          tracks={artist?.tracks}
        ></TracksTable>
      </div>
    </Wrapper>
  );
}

export default Artist;
