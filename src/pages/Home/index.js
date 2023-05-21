import { styled } from "styled-components";

const ContentWrapper = styled.main`
  padding: 0, 120px;
`;

function HomePage() {
  return (
    <ContentWrapper>
      <div>Header</div>
      <div>Hero</div>
      <div>Genres</div>
      <div>Songs Table</div>
      <div>Artists</div>
    </ContentWrapper>
  );
}

export default HomePage;
