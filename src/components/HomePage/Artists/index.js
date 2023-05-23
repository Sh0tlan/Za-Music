import Skeleton from "react-loading-skeleton";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import {
  ArtistLoaderWrapper,
  ArtistsSkeletonWrapper,
  ArtistsWrapper,
  Wrapper,
} from "./styled";
import ArtistsCard from "./ArtistsCard";

function Artists({ isLoading, artists }) {
  return (
    <Wrapper>
      <ArtistsWrapper>
        {isLoading &&
          [...Array(8).keys()].map((num) => (
            <ArtistLoaderWrapper key={num}>
              <Skeleton
                wrapper={ArtistsSkeletonWrapper}
                height={95}
                width={95}
                circle
              />
              <Skeleton height={27} width={100} />
            </ArtistLoaderWrapper>
          ))}

        <Swiper slidesPerView="auto" spaceBetween={20} modules={[Pagination]}>
          {!isLoading &&
            artists?.map((genre) => (
              <SwiperSlide key={genre.id} style={{ width: "auto" }}>
                <ArtistsCard name={genre.name} image={genre.picture_medium} />
              </SwiperSlide>
            ))}
        </Swiper>
      </ArtistsWrapper>
    </Wrapper>
  );
}

Artists.propTypes = {
  isLoading: PropTypes.bool,
  artists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      picture_medium: PropTypes.string,
    })
  ),
};

export default Artists;
