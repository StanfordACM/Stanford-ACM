import { math } from 'polished';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

import { LinkComponent, Title } from '../components/section';

const PeopleSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SectionContent = styled.div<{ shown: boolean }>`
  text-align: center;
  display: ${({ shown }) => (shown ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const SectionTitleContainer = styled.h2`
  margin-top: ${({ theme }) => math(`${theme.spacing.base} / 2`)};
  order: 0;
  width: 100%;
`;

const BigSectionTitleContainer = styled(Title)`
  order: 0;
  width: 100%;
`;

const PersonContainer = styled.div`
  width: 155px;
  text-align: center;
  padding: 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  margin-bottom: 5px;
  font-size: 16px;
`;

const PersonName = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 17px;
  line-height: 1.5em;
`;

const PersonYear = styled.p`
  margin: 0;
  line-height: 1.5em;
`;

const PersonTitle = styled.p`
  margin: 0;
  line-height: 1.5em;
`;

function SectionTitle({
  children,
  bigTitle,
  onClick
}: React.PropsWithChildren<{
  bigTitle?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}>) {
  if (bigTitle)
    return (
      <BigSectionTitleContainer>
        <LinkComponent onClick={onClick}>{children}</LinkComponent>
      </BigSectionTitleContainer>
    );

  return (
    <SectionTitleContainer>
      <LinkComponent onClick={onClick}>{children}</LinkComponent>
    </SectionTitleContainer>
  );
}

export function Person({
  name,
  year,
  position
}: {
  name: string;
  year?: number;
  position?: ReactNode;
}) {
  return (
    <PersonContainer>
      <PersonName>{name}</PersonName>
      {year && <PersonYear>{year}</PersonYear>}
      {position && <PersonTitle>{position}</PersonTitle>}
    </PersonContainer>
  );
}

export function People({
  title,
  startShown,
  bigTitle,
  children
}: React.PropsWithChildren<{
  title: string;
  startShown: boolean;
  bigTitle?: boolean;
}>) {
  const [shown, setShown] = useState(startShown);

  return (
    <PeopleSection>
      <SectionTitle
        bigTitle={bigTitle}
        onClick={() => setShown((shown) => !shown)}
      >
        {shown ? title : `${title} (Click to Expand)`}
      </SectionTitle>
      <SectionContent shown={shown}>{children}</SectionContent>
    </PeopleSection>
  );
}
