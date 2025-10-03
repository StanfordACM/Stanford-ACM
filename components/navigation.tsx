import Link from 'next/link';
import styled, { useTheme } from 'styled-components';

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.black};
  width: 360px;
  height: 100%;
  padding: 80px 0;
  font-family: ${({ theme }) => theme.fonts.mono};

  @media (max-width: ${({ theme }) => theme.screen.desktop}) {
    width: auto;
    height: auto;
    position: inherit;
    padding: 40px 0;
  }
`;

const LogoContainer = styled.div`
  text-align: center;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin: 15px auto 30px;
  color: ${({ theme }) => theme.colors.gray};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grayLight};
  margin: 0 0 5px;
  font-size: 32px;
`;

const Subtitle = styled.h4`
  font-size: 14.5px;
`;

const Links = styled.nav`
  @media (max-width: ${({ theme }) => theme.screen.desktop}) {
    text-align: center;
  }
`;

const NavigationLinkContent = styled.a<{ selected: boolean }>`
  display: block;
  text-align: center;
  margin: 10px 0;
  font-size: 20px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.grayLight : theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.grayLight};
  }

  @media (max-width: ${({ theme }) => theme.screen.desktop}) {
    display: inline-block;
    margin: 0 15px;
  }
`;

const Divider = styled.hr`
  height: 0px;
  border: 0px;
  border-bottom: 1px solid #aaa;
`;

function NavigationLink({
  children,
  href,
  selected
}: React.PropsWithChildren<{ href: string; selected: boolean }>) {
  return (
    <Link href={href} passHref>
      <NavigationLinkContent selected={selected}>
        {children}
      </NavigationLinkContent>
    </Link>
  );
}

export default function Navigation({ pageName }: { pageName: string }) {
  const theme = useTheme();

  return (
    <Sidebar>
      <LogoContainer>
        <svg width="75" height="75" viewBox="0 0 180 180">
          <path
            id="logo"
            fill={theme.colors.red}
            d="m2.66667,4.08333l0,27.22017l116.4,57.7307l-116.4,58.92719l0,27.22018l171.00002,-86.44649l-171.00002,-84.65176z"
          />
        </svg>
      </LogoContainer>
      <TitleContainer>
        <Title>Stanford ACM</Title>
        <Subtitle>Association for Computing Machinery</Subtitle>
      </TitleContainer>
      <Links>
        <NavigationLink selected={pageName === 'about'} href="/">
          about
        </NavigationLink>
        {/* <NavigationLink selected={pageName === 'events'} href="/events">
          events
        </NavigationLink> */}
        <NavigationLink selected={pageName === 'contact'} href="/contact">
          contact
        </NavigationLink>
        <NavigationLink selected={pageName === 'officers'} href="/officers">
          officers
        </NavigationLink>
        <NavigationLink selected={pageName === 'sponsors'} href="/sponsors">
          sponsors
        </NavigationLink>
        <Divider />
        <NavigationLink selected={pageName === 'puzzleHunt'} href="/puzzleHunt">
          puzzle hunt
        </NavigationLink>
        <NavigationLink selected={pageName === 'mlab'} href="/mlab">
          mlab
        </NavigationLink>
        <NavigationLink selected={pageName === 'devlab'} href="/devlab">
          devlab
        </NavigationLink>
        <NavigationLink selected={pageName === 'proco'} href="/proco">
          proco
        </NavigationLink>
        <NavigationLink
          selected={pageName === 'pokerTournament'}
          href="/pokerTournament"
        >
          poker tournament
        </NavigationLink>
        <NavigationLink selected={pageName === 'quantGym'} href="/quantGym">
          quant gym
        </NavigationLink>
        <NavigationLink selected={pageName === 'geoguessr'} href="/geoguessr">
          geoguessr
        </NavigationLink>
        <NavigationLink selected={pageName === 'aiClinic'} href="/aiClinic">
          ai clinic
        </NavigationLink>
        <NavigationLink selected={pageName === 'escapeRoom'} href="/escapeRoom">
          escape room
        </NavigationLink>
      </Links>
    </Sidebar>
  );
}
