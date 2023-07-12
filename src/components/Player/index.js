import Slider from "rc-slider";

import {
  ArtistName,
  TrackImage,
  TrackInfoWrapper,
  Wrapper,
  TrackInfoTextWrapper,
  ControleWrapper,
  ProgressWrapper,
  TrackTime,
  VolumeWrapper,
} from "./styled";
import { ContentWrapper } from "components/Layout";
import { Text } from "components/ui/Typography";
import IconButton from "components/ui/IconButton";
import { Play, SkipLeft, SkipRight, Volume } from "components/ui/Icons";
import { theme } from "styles/Theme";

const track = {
  id: 109176426,
  title: "Makeba",
  title_short: "Makeba",
  title_version: "",
  link: "https://www.deezer.com/track/109176426",
  duration: 249,
  rank: 967020,
  explicit_lyrics: false,
  explicit_content_lyrics: 0,
  explicit_content_cover: 0,
  preview:
    "https://cdns-preview-f.dzcdn.net/stream/c-f718fd17f614f0834214e6bb728833de-7.mp3",
  md5_image: "cc09c2457ce3e1adc3a7a23f93440e59",
  position: 1,
  artist: {
    id: 5951582,
    name: "Jain",
    link: "https://www.deezer.com/artist/5951582",
    picture: "https://api.deezer.com/artist/5951582/image",
    picture_small:
      "https://e-cdns-images.dzcdn.net/images/artist/d76deb5715e5a9ea8054bfd56ec1e398/56x56-000000-80-0-0.jpg",
    picture_medium:
      "https://e-cdns-images.dzcdn.net/images/artist/d76deb5715e5a9ea8054bfd56ec1e398/250x250-000000-80-0-0.jpg",
    picture_big:
      "https://e-cdns-images.dzcdn.net/images/artist/d76deb5715e5a9ea8054bfd56ec1e398/500x500-000000-80-0-0.jpg",
    picture_xl:
      "https://e-cdns-images.dzcdn.net/images/artist/d76deb5715e5a9ea8054bfd56ec1e398/1000x1000-000000-80-0-0.jpg",
    radio: true,
    tracklist: "https://api.deezer.com/artist/5951582/top?limit=50",
    type: "artist",
  },
  album: {
    id: 11375984,
    title: "Zanaka",
    cover: "https://api.deezer.com/album/11375984/image",
    cover_small:
      "https://e-cdns-images.dzcdn.net/images/cover/cc09c2457ce3e1adc3a7a23f93440e59/56x56-000000-80-0-0.jpg",
    cover_medium:
      "https://e-cdns-images.dzcdn.net/images/cover/cc09c2457ce3e1adc3a7a23f93440e59/250x250-000000-80-0-0.jpg",
    cover_big:
      "https://e-cdns-images.dzcdn.net/images/cover/cc09c2457ce3e1adc3a7a23f93440e59/500x500-000000-80-0-0.jpg",
    cover_xl:
      "https://e-cdns-images.dzcdn.net/images/cover/cc09c2457ce3e1adc3a7a23f93440e59/1000x1000-000000-80-0-0.jpg",
    md5_image: "cc09c2457ce3e1adc3a7a23f93440e59",
    tracklist: "https://api.deezer.com/album/11375984/tracks",
    type: "album",
  },
  type: "track",
};

function Player(props) {
  return (
    <Wrapper>
      <ContentWrapper display="flex">
        <TrackInfoWrapper>
          <TrackImage
            src={track?.album.cover}
            alt={`${track?.album.title}'s cover`}
          />
          <TrackInfoTextWrapper>
            <Text>{track.title}</Text>
            <ArtistName>{track.title}</ArtistName>
          </TrackInfoTextWrapper>
        </TrackInfoWrapper>

        <ControleWrapper>
          <IconButton>
            <SkipLeft />
          </IconButton>
          <IconButton width={55} height={55} withBackground>
            <Play></Play>
          </IconButton>
          <IconButton>
            <SkipRight></SkipRight>
          </IconButton>
        </ControleWrapper>

        <ProgressWrapper>
          <TrackTime>0:00</TrackTime>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, background: theme.colors.white }}
            railStyle={{ height: 8, background: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              background: theme.colors.white,
              marginTop: -3,
            }}
          />
          <TrackTime grey>2:30</TrackTime>
        </ProgressWrapper>

        <VolumeWrapper>
          <IconButton height={24} width={24}>
            <Volume />
          </IconButton>
          <Slider
            style={{ padding: "3px 0" }}
            trackStyle={{ height: 8, background: theme.colors.white }}
            railStyle={{ height: 8, background: theme.colors.darkGrey }}
            handleStyle={{
              border: "none",
              background: theme.colors.white,
              marginTop: -3,
            }}
          />
        </VolumeWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

Player.propTypes = {};

export default Player;
