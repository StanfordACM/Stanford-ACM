import Head from 'next/head';
import styled from 'styled-components';

import Navigation from './navigation';

const Main = styled.main`
  margin: 0 0 0 360px;
  padding: 60px 180px 60px 120px;

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
  pageName
}: React.PropsWithChildren<{ title: string; pageName: string }>) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navigation pageName={pageName} />
      <Main>{children}</Main>
    </>
  );
}
