import styled from 'styled-components';

import Layout from '../../components/layout';
import { Credits, Puzzle, PuzzlesTable } from '../../components/puzzlehunt';
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
              src="/puzzleHunt/2024.jpg"
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
        <Credits>
          <h2>Co-Chairs</h2>
          <Paragraph>
            Kristie Park
            <br />
            Daniel Sun
          </Paragraph>
          {/* <h2>Writing Team</h2>
          <Paragraph>
            Nathan Chi
            <br />
            Ryan Chi
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
          </Paragraph> */}
          <h2>Volunteers</h2>
          <Paragraph>
            Matt Hsu
            <br />
            Ryan Rong
          </Paragraph>
          {/* <h2>Test-Solvers</h2>
          <Paragraph></Paragraph> */}
          <h2>Website</h2>
          <Paragraph>
            Ian Ng
            <br />
            Chandra Suda
            <br />
            Sabrina Yen-Ko
          </Paragraph>
          <h2>Jigsaw Team</h2>
          <Paragraph>
            Mira Kim
            <br />
            Kristie Park
            <br />
            Ellen Xu
          </Paragraph>
          <h2>Skit Authors</h2>
          <Paragraph>
            Nathan Chi
            <br />
            Ryan Chi
            <br />
            Kristie Park
          </Paragraph>
          <h2>Skit</h2>
          <Paragraph>
            Nathan Chi
            <br />
            Ryan Chi
            <br />
            Mira Kim
            <br />
            Katherine Lee
            <br />
            Ian Ng
            <br />
            Kristie Park
            <br />
            Chandra Suda
            <br />
            Daniel Sun
            <br />
            Sydney Yan
            <br />
            Sabrina Yen-Ko
          </Paragraph>
          <h2>Special Thanks</h2>
          <Paragraph>
            Ume Tea Palo Alto
            <br />
            UberPrints
          </Paragraph>
        </Credits>
      </Section>
    </Layout>
  );
}
