import { Hero, Genres, Artists } from "components/HomePage";
import { GreyTitle, StyledAside, TrendsAndArtistsSection } from "./styled";

import { SectionTitle } from "components/ui/Typography";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loadCharts, loadTopRadioTracks } from "services/api";
import TracksTable from "components/TracksTable";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const [chart, setChart] = useState();
  const [radio, setRadio] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);

        const [chart, radio] = await Promise.all([
          loadCharts(),
          loadTopRadioTracks(),
        ]);

        setChart(chart);
        setRadio(radio);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

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
