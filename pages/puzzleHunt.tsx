import Image from 'next/image';
import styled from 'styled-components';

import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph as DefaultParagraph,
  Section
} from '../components/section';

const Paragraph = styled(DefaultParagraph)`
  line-height: 1.5;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.div`
  font-size: 24px;
  font-family: Mukta, sans-serif;
  text-align: left;
  margin-top: 24px;
  margin-bottom: 16px;
`;

const RegisterButton = styled.a`
  border-radius: 5px;
  text-align: center;
  padding: 0.3em;
  font-weight: 400;
  font-size: 32px;
  background-color: #4b65d4;
  cursor: pointer;
  color: white;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    text-align: left;
  }
`;

const Line = styled.div`
  width: 2px;
  height: auto;
  background: #e71b5e;
  vertical-align: middle;
  margin: 0 30px;

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.screen.mobile}) {
    margin-top: 40px;
  }
`;

const SectionTitle = styled.h3`
  color: #376caa;
  font-size: 1.75em;
  font-weight: 500;
  font-family: 'Mukta', sans-serif;
  margin-bottom: 0.2em;
`;

export default function PuzzleHunt() {
  return (
    <Layout title="Puzzle Hunt" pageName="puzzleHunt" paddingH={40}>
      <Section>
        <Center>
          <div>
            <Image
              src="/logos/puzzlehuntTitle.svg"
              alt="Puzzle Hunt"
              width={500}
              height={336}
            />
          </div>
          <Info>
            📅 Saturday, October 29th
            <br />
            🕐 1-5pm
            <br />
            🧋 boba provided
          </Info>
          <Paragraph>
            Puzzle Hunt for fall 2022 just ended! Check back next year for more,
            and feel free to check out{' '}
            <LinkComponent
              href="https://drive.google.com/drive/u/4/folders/1EP_CsFfqGoU0MZWGGJA9a18HpU4wkkiX"
              target="_blank"
            >
              problems
            </LinkComponent>{' '}
            and{' '}
            <LinkComponent
              href="https://drive.google.com/drive/u/4/folders/1-tNqwzDAG7k6YfQJFumqZziCXOS3dqkN"
              target="_blank"
            >
              solutions
            </LinkComponent>{' '}
            from the event.
          </Paragraph>
        </Center>
        <Row>
          <Left>
            <SectionTitle>What is this?</SectionTitle>
            <Paragraph>
              Like a cross between an escape room and MITMH-style puzzle hunts.
              In last year&apos;s Stanford Puzzle Hunt, teams raced across
              campus solving creative puzzles, gradually piecing together the
              answer to a murder mystery.
              <br />
              <b>No prior experience is needed.</b>
              <br />
              See previous puzzle hunts (hosted by{' '}
              <LinkComponent href="https://sumo.stanford.edu">
                SUMO
              </LinkComponent>
              ){' '}
              <LinkComponent href="https://sumo.stanford.edu/puzzlehunt/index.html">
                here
              </LinkComponent>
              .
            </Paragraph>
          </Left>
          <Line />
          <Right>
            <SectionTitle>Who can participate?</SectionTitle>
            <Paragraph>
              <b>Teams of up to 4 people!</b> Anyone from the Stanford community
              is eligible to participate, but only Stanford students can receive
              prizes.
              <br />
              Note that due to limited capacity, registration is first-come
              first-served.
              <br />
            </Paragraph>
          </Right>
        </Row>
        <Row>
          <Left>
            <SectionTitle>
              I don&apos;t have a team! Can I still participate?
            </SectionTitle>
            <Paragraph>
              <b>Don&apos;t worry!</b> You can be matched to other people to
              form a team or participate on your own.
            </Paragraph>
          </Left>
          <Line />
          <Right>
            <SectionTitle>Questions?</SectionTitle>
            <Paragraph>
              Reach out to us at{' '}
              <LinkComponent href="mailto:syyan@stanford.edu">
                syyan@stanford.edu
              </LinkComponent>{' '}
              and{' '}
              <LinkComponent href="mailto:ssyoung@stanford.edu">
                ssyoung@stanford.edu
              </LinkComponent>{' '}
              if you have any further questions! Puzzle hunt is run by{' '}
              <LinkComponent href="/">Stanford ACM</LinkComponent>&apos;s Puzzle
              Hunt Committee!
            </Paragraph>
          </Right>
        </Row>
      </Section>
    </Layout>
  );
}
