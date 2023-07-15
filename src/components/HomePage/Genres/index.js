import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SectionSubtitle } from "components/ui/Typography";
import {
  Button,
  ButtonsWrapper,
  GenresWrapper,
  TitleRow,
  GenreSkeletonWrapper,
  Wrapper,
} from "./styled";
import { ArrowLeft, ArrowRight } from "components/ui/Icons";
import GenreCard from "./GenreCard";
import { loadGenres } from "services/api";
import { Link } from "react-router-dom";

function Genres() {
  const [genres, setGenres] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadGenres();
        setGenres(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <Wrapper>
      <TitleRow>
        <SectionSubtitle>Geners</SectionSubtitle>
        <ButtonsWrapper>
          <Button withBackground with={36} height={36} onClick={handlePrev}>
            <ArrowLeft />
          </Button>
          <Button withBackground with={36} height={36} onClick={handleNext}>
            <ArrowRight />
          </Button>
        </ButtonsWrapper>
      </TitleRow>
      <GenresWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <Skeleton
              wrapper={GenreSkeletonWrapper}
              key={num}
              width={220}
              height={116}
              borderRadius={25}
            />
          ))}
        <Swiper
          ref={sliderRef}
          slidesPerView="auto"
          spaceBetween={20}
          modules={[Pagination]}
        >
          {!isLoading &&
            genres?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <Link to={`/genre/${genre.id}`}>
                  <GenreCard
                    name={genre.name}
                    backgroundImage={genre.picture_medium}
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </GenresWrapper>
    </Wrapper>
  );
}

export default Genres;
