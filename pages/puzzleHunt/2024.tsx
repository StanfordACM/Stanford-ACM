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
              src="/puzzleHunt/2024.jpg"
              alt="Puzzle Hunt 2024"
              width={1890}
              height={3800}
            />
          </div>
        </Center>
      </Section>
      <Section>
        <Title>Puzzle Hunt Fall 2024</Title>
        <Center>
          <IntroText>Signups are now open!</IntroText>
          <SignUpButton
            href="https://forms.gle/au4BBPKUdXrcMncF6"
            target="_blank"
          >
            Sign up
          </SignUpButton>
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
        </Center>
        <CenterSection>
          <IntroHeader>MISSION BRIEFING</IntroHeader>
          <IntroText>
            Hello, puzzlers, and welcome. Our scouts in the field have gotten
            advance intel of some suspicious activities in the kingdom. Your
            mission for this hunt will be announced as soon as we decode their
            transmission. Stay alert and be ready to jump on the case as soon as
            it drops.
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
    </Layout>
  );
}
