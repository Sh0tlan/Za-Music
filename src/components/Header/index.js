import { Logo, Search } from "components/ui/Icons";
import { SectionSubtitle } from "components/ui/Typography";
import { LogoWrapper, Wrapper } from "./styled";
import IconButton from "components/ui/IconButton";

function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
        <SectionSubtitle>Za-Music</SectionSubtitle>
      </LogoWrapper>
      <IconButton width={58} height={58} withBackground>
        <Search />
      </IconButton>
    </Wrapper>
  );
}

export default Header;
