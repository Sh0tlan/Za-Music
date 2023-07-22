import { Hero, Genres, Artists } from "components/HomePage";
import { GreyTitle, StyledAside, TrendsAndArtistsSection } from "./styled";

import { SectionTitle } from "components/ui/Typography";
import { loadCharts, loadTopRadioTracks } from "services/api";
import TracksTable from "components/TracksTable";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useLoadData from "hooks/useLoadData";

function Home() {
  const [data, isLoading] = useLoadData(() =>
    Promise.all([loadCharts(), loadTopRadioTracks()])
  );

  const [chart, radio] = data || [];
  console.log(chart);
  console.log(radio);

  return (
    <main>
      <Hero tracks={radio} />
      <Genres />
      <TrendsAndArtistsSection>
        <div>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Tranding right now</SectionTitle>
          <TracksTable isLoading={isLoading} tracks={chart?.tracks.data} />
        </div>
        <StyledAside>
          <GreyTitle>Global</GreyTitle>
          <SectionTitle>Top Artists</SectionTitle>
          <Artists isLoading={isLoading} artists={chart?.artists?.data} />
        </StyledAside>
      </TrendsAndArtistsSection>
    </main>
  );
}

export default Home;
