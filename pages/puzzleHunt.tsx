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
  text-align: center;
  display: inline-block;
  margin: 0 auto 20px auto;
  border-radius: 8px;
  text-align: center;
  padding: 0.5em 1em;
  font-weight: 400;
  font-size: 28px;
  background-color: #4b65d4;
  cursor: pointer;
  color: white;
  font-family: Mukta;
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

const Header = styled.h2`
  font: mukta;
  font-size: 1.3em;
  font-weight: 600;
  margin: 0.6em 0;
`;

const SectionTitle = styled.h3`
  color: #376caa;
  font-size: 1.75em;
  font-weight: 500;
  font-family: Mukta, sans-serif;
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
          <Header>
            Sign up for our fall 2025 Puzzle Hunt <LinkComponent href="https://docs.google.com/forms/d/e/1FAIpQLSfcOPNIxgZCOr2jR07b2UWvj4lOUs_aQ8oKKtU1XuAvAa7TnQ/viewform">here</LinkComponent> and read the fall 2025 Introduction Document <LinkComponent href="https://docs.google.com/document/d/13hYbkdLzrnTYu1iAT-Av50fLd4c2WH5o/edit">here</LinkComponent>.
          </Header>
          <Header>
            Read more about our 2024 Puzzle Hunt{' '}
            <LinkComponent href="https://news.stanford.edu/stories/2024/11/annual-puzzle-hunt-brings-together-hundreds-of-student-solvers">
              (featured in the Stanford Report)
            </LinkComponent>
            !
          </Header>
          <div>
            <Image
              src="/puzzleHunt/2025/2025.jpg"
              alt="Puzzle Hunt 2025"
              width={500}
              height={336}
            />
          </div>
          <Paragraph>
            Check out{' '}
            <LinkComponent href="/puzzleHunt/2024">
              puzzles and solutions
            </LinkComponent>{' '}
            from 2024!
          </Paragraph>
          <Paragraph>
            Check out{' '}
            <LinkComponent href="/puzzleHunt/2023">
              puzzles and solutions
            </LinkComponent>{' '}
            from 2023!
          </Paragraph>
          <Paragraph>
            Check out{' '}
            <LinkComponent href="/puzzleHunt/2022">
              puzzles and solutions
            </LinkComponent>{' '}
            from 2022!
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
              See Puzzle Hunt Fall 2024: Piech in Peril{' '}
              <LinkComponent href="/puzzleHunt/2024">here</LinkComponent>.
              <br />
              See Puzzle Hunt Fall 2023: Mystery in History{' '}
              <LinkComponent href="/puzzleHunt/2023">here</LinkComponent>.
              <br />
              See Puzzle Hunt Fall 2022: Mission to Mars{' '}
              <LinkComponent href="/puzzleHunt/2022">here</LinkComponent>.
              <br />
              See pre-2020 puzzle hunts (hosted by{' '}
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
              <LinkComponent href="mailto:kristiep@stanford.edu">
                kristiep@stanford.edu
              </LinkComponent>{' '}
              and{' '}
              <LinkComponent href="mailto:dansun@stanford.edu">
                dansun@stanford.edu
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
