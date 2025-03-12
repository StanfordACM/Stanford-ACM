import styled, { css } from 'styled-components';

import Layout from '../../components/layout';
import { Credits } from '../../components/credits';
import { Puzzle, PuzzlesTable } from '../../components/puzzlehunt';
import {
  Paragraph as DefaultParagraph,
  Section,
  Title
} from '../../components/section';

const Image = styled.img`
  max-height: 562px;
  height: 100%;
  object-fit: contain;
`;

const Paragraph = styled(DefaultParagraph)`
  line-height: 1.5;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const puzzles: Puzzle[] = [
  {
    name: 'Onboarding',
    credits: 'Sydney Yan and Kristie Park',
    puzzleLink:
      'https://docs.google.com/document/d/1Q-6O2qEcqLSQLLzljvdcbrbbqRG1X9Ol4IF-t9kL0Pc/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/197-BFFw74zBj7KcOwDM9XyjCLv_zqfWUDX2C5m8rXfg/edit?usp=share_link'
  },
  {
    name: 'ProMosaic',
    credits: 'Nathan Chi, Ryan Chi, and Sydney Yan',
    puzzleLink:
      'https://docs.google.com/document/d/1Q8VG8ONnH0noHUR_mF51yxrMq3vaWDwUzcfc-8hpniA/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/16Q3afLLBQkAVBxagO-5UvBY8QK6G54cnTGWxgQwb5tY/edit?usp=share_link'
  },
  {
    name: 'Quick Response Replication',
    credits: 'Daniel Sun, Kristie Park, and Sonny Young',
    puzzleLink:
      'https://docs.google.com/spreadsheets/d/1bWpf4vqXZp-OZed3eSsNrGgLYKM0NKumbFmhuEIT_Ms/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/spreadsheets/d/1RykPL8cm_SA4TL97AcfaMXh7N7FU7XvkTmYZ94GXY9k/edit?usp=share_link'
  },
  {
    name: 'Italian Food Tips',
    credits: 'Ethan Chi and Ryan Chi',
    puzzleLink:
      'https://docs.google.com/document/d/1bajxhoP-dgOr7G7tz4tIvETHorx9uVnP2TFdv1MLn2g/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1BhFmQf4M6KfJG7lRzILLdT3ICdpP9SlcXgY3AfSZ3nQ/edit?usp=share_link'
  },
  {
    name: 'Space Race',
    credits: 'Sydney Yan',
    puzzleLink:
      'https://docs.google.com/document/d/1pe0tMnYhiyIAwGZpgP0vowObJez47dPvRAhMiXziAFU/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1-kfVt_epmjl3tzYLh-NKROTPWD7ZkfYtbCcTqNca7Mo/edit?usp=share_link'
  },
  {
    name: 'Spaceship Maintenance',
    credits: 'Sydney Yan, Ryan Chi, Nathan Chi and Isaac Zhao',
    puzzleLink:
      'https://docs.google.com/document/d/1EY_V1ZxFNuOqpw-mHaSDxZhglypqJDmjztPQyk4tp-s/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1y7PaOa3Iz0XaNwPt8GulZE0KTQvlo9VQ5WPV_lE0eEc/edit?usp=share_link'
  },
  {
    name: 'Museo Artistico',
    credits: 'Ethan Chi, Nathan Chi, and Daniel Sun',
    puzzleLink:
      'https://docs.google.com/document/d/1bRimIJ0gDRiIb8RPk9ACadQMlMkL7zyoYrUQcaRRSM4/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1UwQY8XfNujVRsLjz3Hj7g2zKCuzI-Hcho9SDnz4FbR4/edit?usp=share_link'
  },
  {
    name: "Aren't Animals Amazing?",
    credits: 'Bradley Moon, Nathan Chi, and Ian Ng',
    puzzleLink:
      'https://docs.google.com/document/d/1GSZqBiy45uLf-5_8-VaWy7HJ1JLeXV7tc1qsbGCtiy0/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1XM3WBLbCKDUnaoKwR2OXmGMgn5oK1OX_sS4lNXFjme0/edit?usp=share_link'
  },
  {
    name: 'A Story is Brewing',
    credits: 'Bradley Moon',
    puzzleLink:
      'https://docs.google.com/document/d/1BeFdZNOx1xR0kZhmyz4jYvrKKFTLsUu4wGIgcBuCHf8/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1aIANDlqwJABAc327ThJZPk7IFm4u4ujwSqTVp1Sm9T0/edit?usp=share_link'
  },
  {
    name: 'Shoot for the Stars',
    credits: 'Kristie Park, Daniel Sun, and Sydney Yan',
    puzzleLink:
      'https://docs.google.com/document/d/1kVFA3f7uLIi4w-1zerBIIxB-ZJM6mRrRAWyX-LBxmWg/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1XOwVyzrwI5c8dwHUBzSWhlHPi2k11IsbX-Ag_plYfdE/edit?usp=share_link'
  },
  {
    name: 'Mindsweeper',
    credits: 'Kaylee Doty',
    puzzleLink:
      'https://docs.google.com/document/d/1ufH9JUmgFPxgTm2owGtPh-OWcBe5KUgV-U0kz7C8snY/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1aVmeK6n3cnA7XN9RXn2elrUxTEnvHmJ65bGWdwKuEgc/edit?usp=share_link'
  },
  {
    name: 'Element Elements',
    credits: 'Sydney Yan, Ryan Chi, Nathan Chi, and Kristie Park',
    puzzleLink:
      'https://docs.google.com/document/d/1NSlklTxy_T6quOXujsn_FCN0yU9L51J3CdAEG4z4xoI/edit?usp=share_link',
    solutionLink:
      'https://docs.google.com/document/d/1YJSDSFB2LEqlk7CgrTA5CKMeFcKJeDfAVhac1YPCNYU/edit?usp=share_link'
  },
  {
    name: 'The Final Countdown',
    credits: 'Kristie Park and Sonny Young',
    puzzleLink:
      'https://drive.google.com/file/d/1PDpxgzrXAJB-80y_ORL5uJq88vcIBI7E/view?usp=share_link',
    solutionLink:
      'https://drive.google.com/file/d/16rPAVH9rVe-sw8nXmZ8uQG7iPJXAQoTx/view?usp=share_link'
  }
];

const credits: { [id: string]: string[] } = {
  'Co-Chairs': ['Sydney Yan', 'Sonny Young'],
  'Editor-in-Chief': ['Ethan Chi'],
  'Writing Team': [
    'Ethan Chi',
    'Nathan Chi',
    'Ryan Chi',
    'Kaylee Doty',
    'Jennifer Ho',
    'Bradley Moon',
    'Ian Ng',
    'Kristie Park',
    'Daniel Sun',
    'Sydney Yan',
    'Sonny Young',
    'Isaac Zhao'
  ],
  Volunteers: ['Gordon Chi', 'Jeremy Kim'],
  'Test-Solvers': [
    'Cardinality members',
    'Jeopardy Test Server members',
    'Guan Family',
    'Mirchandani Family',
    'Eden Ng',
    'Chris Dinh',
    'William Wu'
  ],
  Website: ['Ethan Chi', 'Ryan Chi', 'Scott Hickmann'],
  'Jigsaw Team': ['Kristie Park', 'Daniel Sun', 'Sonny Young', 'Erik Roise'],
  Skit: [
    'Ian Ng',
    'Nathan Chi',
    'Ryan Chi',
    'Jennifer Ho',
    'Bradley Moon',
    'Kristie Park',
    'Daniel Sun',
    'Sydney Yan',
    'Sonny Young'
  ],
  Sponsors: ['MosaicML', 'Citadel'],
  'Special Thanks': ['Kung Fu Tea Palo Alto', 'Custom Ink']
};

export default function PuzzleHunt2022() {
  return (
    <Layout title="Puzzle Hunt 2022" pageName="puzzleHunt" paddingH={40}>
      <Section>
        <Center>
          <div>
            <Image
              src="/puzzleHunt/2022.jpg"
              alt="Puzzle Hunt 2022"
              width={1390}
              height={1800}
            />
          </div>
        </Center>
      </Section>
      <Section>
        <Title>Fall 2022: Mission to Mars</Title>
        <PuzzlesTable puzzles={puzzles} />
      </Section>
      <Section title="Credits">
        <Title>Credits</Title>
        <Credits credits={credits}></Credits>
      </Section>
    </Layout>
  );
}
