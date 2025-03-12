import styled, { css } from 'styled-components';
import { LinkComponent, Paragraph } from './section';

const CreditsWrapper = styled.div`
  column-count: 3;
  @media (max-width: 1240px) {
    column-count: 2;
  }
  @media (max-width: 960px) {
    column-count: 1;
  }
`;

export function Credits({ credits }: { credits: { [id: string]: string[] } }) {
  return (
    <CreditsWrapper>
      {Object.entries(credits).map(([key, value]) => (
        <div style={{ display: 'inline-block', width: '100%' }} key={key}>
          <h2>{key}</h2>
          <Paragraph>
            {value.map((person, index) => (
              <span key={index}>
                {person}
                <br />
              </span>
            ))}
          </Paragraph>
        </div>
      ))}
    </CreditsWrapper>
  );
}
