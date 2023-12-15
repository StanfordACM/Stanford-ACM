import styled from 'styled-components';

import Layout from '../../components/layout';
import { LinkComponent, Section } from '../../components/section';
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

export default function PuzzleHunt2023() {
  return (
    <Layout title="Puzzle Hunt 2023" pageName="puzzleHunt" paddingH={40}>
      <link
        href="http://fonts.googleapis.com/css?family=Oswald:300"
        rel="stylesheet"
        type="text/css"
      ></link>
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
          {/* <IntroText>Signups are now open!</IntroText>
          <SignUpButton
            href="https://forms.gle/eqca6sPu56yc6RB96"
            target="_blank"
          >
            Sign up
          </SignUpButton> */}
          <IntroText>
            For hunt details, click{' '}
            <LinkComponent
              href="https://docs.google.com/document/d/1NDAmQZblLul5ztnWuZy14vqyYn7dwCJW/edit?usp=sharing&ouid=116577593488707626970&rtpof=true&sd=true"
              target="_blank"
            >
              here
            </LinkComponent>
            .
          </IntroText>
        </Center>
        <CenterSection>
          <IntroHeader>MISSION BRIEFING</IntroHeader>
          <IntroText>
            Hello, puzzlers, and welcome. You’ve been called here today to solve
            a centuries-old murder and stop the time-jumping culprit from
            unraveling the timeline. We’ll be sending you back in time, to some
            of the most pivotal and mysterious moments in human history. Your
            job is to find the clues, solve the puzzles, and catch the killer.
            Time is running out.
          </IntroText>
          <IntroText>Good luck.</IntroText>
        </CenterSection>
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
        </SponsorsRow>
      </Section>
    </Layout>
  );
}
