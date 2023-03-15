import styled, { useTheme } from 'styled-components';

import { Red, Title } from '../components/section';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const Left = styled.div`
  margin-right: 16px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.screen.desktop}) {
    display: none;
  }
`;

const Right = styled(Title)`
  margin-bottom: 0;
`;

const MainTitle = styled.span`
  font-size: 52px;
`;

const LeftSymbol = styled.span`
  margin-right: 4px;
`;

export function PokerTitle() {
  const theme = useTheme();

  return (
    <Container>
      <Left>
        <svg width="75" height="75" viewBox="0 0 180 180">
          <path
            id="logo"
            fill={theme.colors.red}
            d="m2.66667,4.08333l0,27.22017l116.4,57.7307l-116.4,58.92719l0,27.22018l171.00002,-86.44649l-171.00002,-84.65176z"
          />
        </svg>
      </Left>
      <Right>
        <MainTitle>
          Stanford <Red>ACM</Red>
        </MainTitle>
        <br />
        <LeftSymbol>♣</LeftSymbol>♠ <Red>poker</Red> tournament{' '}
        <Red>
          <LeftSymbol>♥</LeftSymbol>♦
        </Red>
      </Right>
    </Container>
  );
}
