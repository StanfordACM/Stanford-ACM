import Head from 'next/head';
import styled from 'styled-components';

import Navigation from './navigation';

const Main = styled.main<{ paddingH: number }>`
  margin: 0 0 0 360px;
  padding: ${(props) => props.paddingH}px; 180px ${(props) =>
    props.paddingH}px 120px;

  @media (max-width: ${({ theme }) => theme.screen.desktop}) {
    padding: 40px 80px 40px 80px;
    max-width: none;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    padding: 40px 20px 40px 20px;
    max-width: none;
    margin: 0;
  }
`;

export default function Layout({
  children,
  title,
  pageName,
  paddingH = 60
}: React.PropsWithChildren<{
  title: string;
  pageName: string;
  paddingH?: number;
}>) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation pageName={pageName} />
      <Main paddingH={paddingH}>{children}</Main>
    </>
  );
}
