import styled from 'styled-components';

import Layout from '../../components/layout';
import { Puzzle, PuzzlesTable } from '../../components/puzzlehunt';
import { Credits } from '../../components/credits';
import { LinkComponent, Paragraph, Section } from '../../components/section';
import {
  SponsorRow,
  SponsorRowImage,
  SponsorsRow
} from '../../components/sponsors';

const Image = styled.img`
  max-height: 700px;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 24px;
  font-family: 'Press Start 2P', sans-serif;
  max-height: 700px;
  weight: bold;
  text-align: center;
  height: 100%;
  object-fit: contain;
  margin-bottom: 30px;
`;

export const SignUpButton = styled.a`
  text-align: center;
  display: inline-block;
  margin: 0 auto 30px auto;
  border-radius: 8px;
  text-align: center;
  padding: 0.5em 1em;
  font-family: 'Press Start 2P';
  font-weight: 400;
  font-size: 28px;
  background-color: #4b65d4;
  cursor: pointer;
  color: white;
`;

const CenterSection = styled.div`
  margin: 50px auto 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #edcda6;
  border-radius: 18px;
  padding: 70px 70px 50px 70px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IntroHeader = styled.h1`
  text-align: left;
  font: 36px/1 ${({ theme }) => theme.fonts.mono};
  line-height: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  font-family: 'Press Start 2P', sans-serif;
  color: red;
`;

const IntroText = styled.p`
  text-align: center;
  font: 14px/1 ${({ theme }) => theme.fonts.mono};
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 28px;
  font-family: 'Press Start 2P', sans-serif;
`;

const puzzles: Puzzle[] = [
  {
    name: '[1-1] The Amazeing Griddler',
    credits: 'Daniel Sun, Karolyn Cheng',
    puzzleLink: '/puzzleHunt/2024/1-1.pdf',
    solutionLink: ''
  },
  {
    name: '[1-2] Sable, a chevron couched, gules',
    credits: 'Daniel Sun, Bradley Moon',
    puzzleLink: '/puzzleHunt/2024/1-2.pdf',
    solutionLink: ''
  },
  {
    name: '[1-3] To the Moon!',
    credits: 'Daniel Sun',
    puzzleLink: '/puzzleHunt/2024/1-3.pdf',
    solutionLink: ''
  },
  {
    name: "[1-4] Shifty Caesar's Silent Soirée",
    credits: 'Kristie Park, Bradley Moon',
    puzzleLink: '/puzzleHunt/2024/1-4.pdf',
    solutionLink: '/puzzleHunt/2024/sol/1-4sol.pdf'
  },
  {
    name: '[1-5] Should I Touch Grass?',
    credits: 'Karolyn Cheng, Daniel Sun',
    puzzleLink: '/puzzleHunt/2024/1-5.pdf',
    solutionLink: ''
  },
  {
    name: '[1-6] mirror | rorrim',
    credits: 'Daniel Sun, Karolyn Cheng, Sydney Yan',
    puzzleLink: '/puzzleHunt/2024/1-6.pdf',
    solutionLink: ''
  },
  {
    name: "[1-M] Bluebeard's Castle",
    credits: 'Daniel Sun',
    puzzleLink: '/puzzleHunt/2024/1-M.pdf',
    solutionLink: ''
  },
  {
    name: '[2-R] Super Meyer Odyssey',
    credits: 'Daniel Sun, Kristie Park, Bradley Moon',
    puzzleLink: '/puzzleHunt/2024/Runaround.pdf',
    solutionLink: ''
  },
  {
    name: '[3-1] Jigsaw',
    credits: 'Kristie Park',
    puzzleLink: '/puzzleHunt/2024/3-1.pdf',
    solutionLink: '/puzzleHunt/2024/sol/3-1sol.pdf'
  },
  {
    name: '[Beginner 3-2] Add Dresses',
    credits: 'Bradley Moon',
    puzzleLink: '/puzzleHunt/2024/beg3-2.pdf',
    solutionLink: ''
  },
  {
    name: '[Beginner 3-3] Double Trouble Double Trouble',
    credits: 'Bradley Moon',
    puzzleLink: '/puzzleHunt/2024/beg3-3.pdf',
    solutionLink: ''
  },
  {
    name: '[Experienced 3-1b] ? Flower',
    credits: 'Kristie Park, Bradley Moon, Daniel Sun ',
    puzzleLink: '/puzzleHunt/2024/exp3-1b.pdf',
    solutionLink: '/puzzleHunt/2024/sol/exp3-1bsol.pdf'
  },
  {
    name: '[Experienced 3-2] Insert Coin to Play',
    credits: 'Ian Ng',
    puzzleLink: '/puzzleHunt/2024/exp3-2.pdf',
    solutionLink: ''
  },
  {
    name: '[Experienced 3-3] Squaring the Circle',
    credits: 'Bradley Moon',
    puzzleLink: '/puzzleHunt/2024/exp3-3.pdf',
    solutionLink: ''
  },
  {
    name: '[Beginner 4-M] Concluding Coupa Castle',
    credits: 'Bradley Moon, Karolyn Cheng, Kristie Park, Daniel Sun, Ian Ng',
    puzzleLink: '/puzzleHunt/2024/begmeta.pdf',
    solutionLink: ''
  },
  {
    name: '[Experienced 4-M] Concluding Coupa Castle',
    credits: 'Bradley Moon, Karolyn Cheng, Kristie Park, Daniel Sun, Ian Ng',
    puzzleLink: '/puzzleHunt/2024/expmeta.pdf',
    solutionLink: ''
  }
];

const credits: { [id: string]: string[] } = {
  'Co-Chairs': ['Kristie Park', 'Daniel Sun'],
  'Writing Team': [
    'Karolyn Cheng',
    'Katherine Li',
    'Bradley Moon',
    'Ian Ng',
    'Kristie Park',
    'Daniel Sun',
    'Sydney Yan'
  ],
  'Test Solvers': [
    'Nathan Chi',
    'Ryan Chi',
    'Mira Kim',
    'Katherine Li',
    'Ellen Xu',
    'Sydney Yan'
  ],
  Website: ['Ian Ng', 'Chandra Suda', 'Sabrina Yen-Ko'],
  Volunteers: ['Matt Hsu', 'Ryan Rong'],
  'Graphic Design': ['Kristie Park'],
  'Laser Cutting': ['Mira Kim', 'Kristie Park', 'Ellen Xu'],
  'Skit Authors': ['Nathan Chi', 'Ryan Chi', 'Kristie Park'],
  Skit: [
    'Nathan Chi',
    'Ryan Chi',
    'Mira Kim',
    'Katherine Lee',
    'Ian Ng',
    'Kristie Park',
    'Chandra Suda',
    'Daniel Sun',
    'Sydney Yan',
    'Sabrina Yen-Ko'
  ],
  'Special Thanks': ['Jack Tse', 'OSE', 'Uber Prints', 'Ume Tea']
};

export default function PuzzleHunt2024() {
  return (
    <Layout title="Puzzle Hunt 2024" pageName="puzzleHunt" paddingH={40}>
      <link
        href="http://fonts.googleapis.com/css?family=Oswald:300"
        rel="stylesheet"
        type="text/css"
      ></link>
      <Section>
        <Center>
          <div>
            <Image
              src="/puzzleHunt/2024/2024.jpg"
              alt="Puzzle Hunt 2024"
              width={1890}
              height={3800}
            />
          </div>
        </Center>
      </Section>
      <Section>
        <Title>Puzzle Hunt Fall 2024: Piech in Peril</Title>
        <Center>
          <IntroText>
            For hunt details, click{' '}
            <LinkComponent
              href="https://docs.google.com/document/d/1xSNXh2tGo8EqbY8jbficMfTU4MCYZ3fc/edit?usp=sharing&ouid=109195318303251738108&rtpof=true&sd=true"
              target="_blank"
            >
              here
            </LinkComponent>
            .
          </IntroText>
          <IntroText>
            <LinkComponent href="https://news.stanford.edu/stories/2024/11/annual-puzzle-hunt-brings-together-hundreds-of-student-solvers">
              Read the feature
            </LinkComponent>{' '}
            on our event from the OSE team.
          </IntroText>
          <PuzzlesTable puzzles={puzzles}></PuzzlesTable>
        </Center>
      </Section>

      <Section>
        <Title>Sponsors</Title>
        <SponsorsRow>
          <SponsorRow>
            <SponsorRowImage
              src="/puzzleHunt/hrt.png"
              alt="Hudston River Trading"
            />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage
              src="/puzzleHunt/JaneStreet.png"
              alt="Hudston River Trading"
            />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage
              src="/puzzleHunt/databricks.webp"
              alt="Databricks"
            />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/puzzleHunt/watershed.png" alt="Watershed" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/puzzleHunt/bloomberg.png" alt="Bloomberg" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/puzzleHunt/codegen.png" alt="Codegen" />
          </SponsorRow>
        </SponsorsRow>
      </Section>

      <Section title="Credits">
        <Title>Credits</Title>
        <Credits credits={credits}></Credits>
      </Section>
    </Layout>
  );
}
