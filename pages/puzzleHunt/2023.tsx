import styled, { css } from 'styled-components';
import Layout from '../../components/layout';
import { SponsorRow,
  SponsorRowImage,
  SponsorsRow } from '../../components/sponsors';

import {
  LinkComponent,
  Paragraph as DefaultParagraph,
  Section
} from '../../components/section';

const Image = styled.img`
  max-height: 700px;
  height: 100%;
  object-fit: contain;
`;

const Title = styled.h1`
  font-size: 36px;
  font-family: 'Special Elite', sans-serif;
  max-height: 700px;
  weight: bold;
  font-style: italic;
  text-align: center;
  height: 100%;
  object-fit: contain;
  margin-bottom: 30px;
`;

const Paragraph = styled(DefaultParagraph)`
  line-height: 1.5;
`;

export const SignUpButton = styled.a`
  text-align: center;
  display: inline-block;
  margin: 0 auto 30px auto;
  border-radius: 8px;
  text-align: center;
  padding: 0.5em 1em;
  font-family: 'Special Elite';
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
  background-color: #EDCDA6;
  border-radius: 18px;
  padding: 70px 70px 50px 70px;
`;

export const Center = styled.div`
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

const IntroHeader = styled.h1`
  text-align: left;
  font: 36px/1 ${({ theme }) => theme.fonts.mono};
  line-height: 36px;
  font-weight: bold;
  margin-bottom: 24px;
  font-family: 'Special Elite', sans-serif;
  color: red;
`;

const IntroText = styled.p`
  text-align: center;
  font: 22px/1 ${({ theme }) => theme.fonts.mono};
  line-height: 28px;
  font-weight: bold;
  margin-bottom: 28px;
  font-family: 'Special Elite', sans-serif;
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

export default function PuzzleHunt2023() {
  return (
    <Layout title="Puzzle Hunt 2023" pageName="puzzleHunt" paddingH={40}>
      <link href='http://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'></link>
      <Section>
        <Center>
          <div>
            <Image
              src="/puzzleHunt/2023.jpg"
              alt="Puzzle Hunt 2023"
              width={1890}
              height={3800}
            />
          </div>
        </Center>
      </Section>
      <Section>
        <Title>Puzzle Hunt Fall 2023: Mystery in History</Title>
      <Center>
        <IntroText>
            Signups are now open!
        </IntroText>
        <SignUpButton href="https://forms.gle/eqca6sPu56yc6RB96" target="_blank">
           Sign up
        </SignUpButton>
        <IntroText>
          For hunt details, click{' '} 
          <LinkComponent href="https://docs.google.com/document/d/1NDAmQZblLul5ztnWuZy14vqyYn7dwCJW/edit?usp=sharing&ouid=116577593488707626970&rtpof=true&sd=true" target="_blank">
          here
          </LinkComponent>.
        </IntroText>
      </Center>
        <CenterSection>
          <IntroHeader>
            MISSION BRIEFING
          </IntroHeader>
          <IntroText>
          Hello, puzzlers, and welcome. You’ve been called here today to solve a centuries-old murder and stop the time-jumping culprit from unraveling the timeline. We’ll be sending you back in time, to some of the most pivotal and mysterious moments in human history. Your job is to find the clues, solve the puzzles, and catch the killer. Time is running out.
          </IntroText>
          <IntroText>
            Good luck.
          </IntroText>
        </CenterSection>
      </Section>

      <Section>
      <Title>Sponsors</Title>
      <SponsorsRow>
          <SponsorRow>
            <SponsorRowImage src="/puzzleHunt/hrt.png" alt="Hudston River Trading" />
          </SponsorRow>
          <SponsorRow>
            <SponsorRowImage src="/puzzleHunt/JaneStreet.png" alt="Hudston River Trading" />
          </SponsorRow>
          </SponsorsRow>
      </Section>
    </Layout>
  );
}
