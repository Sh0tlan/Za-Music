import { TextWrapper } from "components/HomePage/Hero/styled";
import TracksTable from "components/TracksTable";
import { Music } from "components/ui/Icons";
import { MainTitle, SmallText } from "components/ui/Typography";
import { useParams } from "react-router-dom";

import { loadGenre } from "services/api";
import { SongsCountWrapper, Wrapper } from "./styled";
import Skeleton from "react-loading-skeleton";
import { theme } from "styles/Theme";
import useLoadData from "hooks/useLoadData";

function Genre() {
  const { genreId } = useParams();

  const [genre, isLoading] = useLoadData(() => loadGenre(genreId));

  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>{genre?.genre.name || <Skeleton width={100} />}</MainTitle>
        <SongsCountWrapper>
          <Music color={theme.colors.secondaryGrey} />
          <SmallText>
            {isLoading ? (
              <Skeleton width={40} />
            ) : (
              ` ${genre?.tracks.length} songs`
            )}
          </SmallText>
        </SongsCountWrapper>
      </TextWrapper>
      <TracksTable isLoading={isLoading} tracks={genre?.tracks}></TracksTable>
    </Wrapper>
  );
}

export default Genre;
