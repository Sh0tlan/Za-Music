import { TextWrapper } from "components/HomePage/Hero/styled";
import TracksTable from "components/TracksTable";
import { Music } from "components/ui/Icons";
import { MainTitle, SmallText } from "components/ui/Typography";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { loadGenre } from "services/api";
import { SongsCountWrapper, Wrapper } from "./styled";
import Skeleton from "react-loading-skeleton";

function Genre() {
  const { genreId } = useParams();

  const [genre, setGenre] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const genre = await loadGenre(genreId);
        console.log(genre);
        setGenre(genre);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [genreId]);

  return (
    <Wrapper>
      <TextWrapper>
        <MainTitle>{genre?.genre.name || <Skeleton width={100} />}</MainTitle>
        <SongsCountWrapper>
          <Music />
          <SmallText>
            {isLoading ? (
              <Skeleton width={40} />
            ) : (
              ` ${genre?.tracks.length} songs`
            )}
          </SmallText>
        </SongsCountWrapper>
        <TracksTable isLoading={isLoading} tracks={genre?.tracks}></TracksTable>
      </TextWrapper>
    </Wrapper>
  );
}

export default Genre;
