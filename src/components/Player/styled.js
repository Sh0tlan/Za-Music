import { SubText, Text } from "components/ui/Typography";
import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  height: 105px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.secondaryBlack};
  z-index: ${({ theme }) => theme.zIndex["30"]};
`;
export const TrackInfoWrapper = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  min-width: 400px;
`;

export const TrackInfoTextWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  padding-right: 15px;
`;
export const TrackImage = styled.img`
  height: 65px;
  width: 65px;
  border-radius: 15px;
`;
export const ArtistName = styled(SubText)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;
export const TrackTitle = styled(Text)`
  display: -webkit-box;
  overflow: hidden;
  line-clamp: 1;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.colors.secondaryGrey};
`;

export const ControleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 34px;
`;

export const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 100%;
`;

export const TrackTime = styled(SubText)`
  margin: 0 20px;
  width: 80px;
  color: ${(props) =>
    props.grey ? props.theme.colors.secondaryGrey : "inherit"};
`;
export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  margin-left: 130px;
  min-width: 180px;
`;
