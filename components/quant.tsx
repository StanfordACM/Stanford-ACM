import styled from 'styled-components';

import { Title } from './section';

const MainTitle = styled(Title)`
  font: 36px/1 ${({ theme }) => theme.fonts.mono};
  font-weight: bold;
`;

export function QuantTitle() {
  return <MainTitle>🏋️ Quant Gym 🏋️</MainTitle>;
}
