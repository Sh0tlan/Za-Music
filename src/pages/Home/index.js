import { Hero, Genres, Artists } from "components/HomePage";
import {
  ContentWrapper,
  GreyTitle,
  StyledAside,
  TrendsAndArtistsSection,
} from "./styled";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SectionTitle } from "components/ui/Typography";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadCharts } from "services/api";
import TracksTable from "components/TracksTable";

function Home() {
  const [chart, setChart] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const data = await loadCharts();
        setChart(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);
  console.log(chart);
  return (
    <ContentWrapper>
      <Hero />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <TracksTable tracks={chart?.tracks.data} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </ContentWrapper>
  );
}

export default Home;
