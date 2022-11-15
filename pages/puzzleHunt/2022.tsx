import styled, { css } from 'styled-components';

import Layout from '../../components/layout';
import {
  LinkComponent,
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

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: Mukta, sans-serif;
  width: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

const hideSmallCss = css`
  @media (max-width: 960px) {
    display: none;
  }
`;

const TableHeaderCell = styled.th<{ hideSmall?: boolean }>`
  padding: 12px 15px;
  :first-of-type {
    border-top-left-radius: 20px;
  }
  :last-of-type {
    border-top-right-radius: 20px;
  }
  ${(props) => props.hideSmall && hideSmallCss}
`;

const TableCell = styled.td<{ hideSmall?: boolean }>`
  padding: 12px 15px;
  border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
  :last-of-type {
    border-right: none;
  }
  ${(props) => props.hideSmall && hideSmallCss}
`;

const TableHeaderRow = styled.tr`
  background-color: ${({ theme }) => theme.colors.red};
  color: #ffffff;
  text-align: center;
  font-size: 1.5em;
`;

const TableRow = styled.tr`
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
  font-size: 1.25em;
  :last-of-type {
    border-bottom: none;
  }
`;

const Credits = styled.div`
  column-count: 3;
  @media (max-width: 1240px) {
    column-count: 2;
  }
  @media (max-width: 960px) {
    column-count: 1;
  }
`;

interface Puzzle {
  name: string;
  credits: string;
  puzzleLink: string;
  solutionLink: string;
}

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

function PuzzlesTable() {
  return (
    <Table>
      <thead>
        <TableHeaderRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell hideSmall>Credits</TableHeaderCell>
          <TableHeaderCell>Puzzle</TableHeaderCell>
          <TableHeaderCell>Solution</TableHeaderCell>
        </TableHeaderRow>
      </thead>
      <tbody>
        {puzzles.map((puzzle, index) => (
          <TableRow key={index}>
            <TableCell>{puzzle.name}</TableCell>
            <TableCell hideSmall>{puzzle.credits}</TableCell>
            <TableCell>
              <LinkComponent href={puzzle.puzzleLink} target="_blank">
                Puzzle
              </LinkComponent>
            </TableCell>
            <TableCell>
              <LinkComponent href={puzzle.solutionLink} target="_blank">
                Solution
              </LinkComponent>
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

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
        <PuzzlesTable />
      </Section>
      <Section title="Credits">
        <Title>Credits</Title>
        <Credits>
          <h2>Co-Chairs</h2>
          <Paragraph>
            Sydney Yan
            <br />
            Sonny Young
          </Paragraph>
          <h2>Editor-in-Chief</h2>
          <Paragraph>Ethan Chi</Paragraph>
          <h2>Writing Team</h2>
          <Paragraph>
            Ethan Chi
            <br />
            Nathan Chi
            <br />
            Ryan Chi
            <br />
            Kaylee Doty
            <br />
            Jennifer Ho
            <br />
            Bradley Moon
            <br />
            Ian Ng
            <br />
            Kristie Park
            <br />
            Daniel Sun
            <br />
            Sydney Yan
            <br />
            Sonny Young
            <br />
            Isaac Zhao
          </Paragraph>
          <h2>Volunteers</h2>
          <Paragraph>
            Gordon Chi
            <br />
            Jeremy Kim
          </Paragraph>
          <h2>Test-Solvers</h2>
          <Paragraph>
            Cardinality members
            <br />
            Jeopardy Test Server members
            <br />
            Guan Family
            <br />
            Mirchandani Family
            <br />
            Eden Ng
            <br />
            Chris Dinh
            <br />
            William Wu
          </Paragraph>
          <h2>Website</h2>
          <Paragraph>
            Ethan Chi
            <br />
            Ryan Chi
            <br />
            Scott Hickmann
          </Paragraph>
          <h2>Jigsaw Team</h2>
          <Paragraph>
            Kristie Park
            <br />
            Daniel Sun
            <br />
            Sonny Young
            <br />
            Erik Roise
          </Paragraph>
          <h2>Skit</h2>
          <Paragraph>
            Ian Ng
            <br />
            Nathan Chi
            <br />
            Ryan Chi
            <br />
            Jennifer Ho
            <br />
            Bradley Moon
            <br />
            Kristie Park
            <br />
            Daniel Sun
            <br />
            Sydney Yan
            <br />
            Sonny Young
          </Paragraph>
          <h2>Sponsors</h2>
          <Paragraph>
            MosaicML
            <br />
            Citadel
          </Paragraph>
          <h2>Special Thanks</h2>
          <Paragraph>
            Kung Fu Tea Palo Alto
            <br />
            Custom Ink
          </Paragraph>
        </Credits>
      </Section>
    </Layout>
  );
}
