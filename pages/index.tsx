import Link from 'next/link';
import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

import { SignUpButton, Center } from './puzzleHunt/2023';
import styled from 'styled-components';

function SectionTitle({
  href,
  children
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <h2>
      <LinkComponent href={href}>{children}</LinkComponent>
    </h2>
  );
}

const Announcement = styled.div`
  text-align: center;
  border-radius: 8px;
  margin: 0 auto;
  text-align: center;
  padding: 0.8em 1em 0.1em 1em;
  font-family: 'Special Elite';
  font-weight: 400;
  font-size: 28px;
  background-color: #ff7377;
  cursor: pointer;
  color: white;
`;

const AnnounceLinkComponent = styled.a`
  color: black;

  &:hover {
    color: ${({ theme }) => theme.colors.grayLight};
  }
`;

export const IndexImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0 auto;
`;

export default function About() {
  return (
    <Layout title="About" pageName="about">
      <Section id="about">
        <Title>About</Title>
        <Paragraph>
          ACM is Stanford&apos;s premier computer science organization. Our
          mission is to build exciting projects to learn about and solve
          challenging technical and social problems.
        </Paragraph>
        <Paragraph>
          We'd love for you to join ACM! Signup form link:{' '}
          <LinkComponent href="https://tinyurl.com/stanfordacm2025">
            https://tinyurl.com/stanfordacm2025
          </LinkComponent>
        </Paragraph>
        <IndexImage
          src="/index/Stanford_ACM_Poster_2025.png"
          alt="Stanford ACM 2025 Poster"
        />
      </Section>

      <Section id="activities">
        <Title>Activities</Title>

        <SectionTitle href="/mlab">MLab</SectionTitle>
        <Paragraph>
          ACMLab is Stanford&apos;s premier machine learning club. Its goal is
          to teach anyone with basic CS experience machine learning. After an
          intensive ramp-up workshop in the fall, members work on publishing
          papers at top ML conferences and workshops. We have published 6
          workshop papers so far at top conferences and workshops such as ACL
          and ICLR. Alumni have gone on to Google AI, Stanford ML Group,
          Stanford NLP Group, and VMWare.
        </Paragraph>
        <Paragraph>
          <i>Weekly meetings: Thursdays 7:30PM - 9:00PM at CoDA B90</i>
        </Paragraph>

        <SectionTitle href="/devlab">DevLab</SectionTitle>
        <Paragraph>
          DevLab is Stanford&apos;s premier web development club. Its goal is to
          teach students skills for full-stack development. You'll get to work
          on real projects to add to your portfolio!
        </Paragraph>
        <Paragraph>
          <i>Weekly meetings: Mondays 7PM - 8PM. Location: TBD</i>
        </Paragraph>

        <SectionTitle href="/proco">ProCo</SectionTitle>
        <Paragraph>
          ProCo is a computer programming contest for high school students in
          the style of the college-level ACM-ICPC. ProCo aims to provide a fun
          and engaging opportunity for high school students in the Bay Area to
          explore their passion in computer science. The contest will be held on
          Saturday, March 1st.
        </Paragraph>
        <Paragraph>
          <i>Weekly meetings: TBD</i>
        </Paragraph>

        <SectionTitle href="/puzzleHunt">Puzzle Hunt</SectionTitle>
        <Paragraph>
          ACM hosts a puzzle hunt open to all Stanford students. We invite you
          to solve puzzles as quickly as possible for prizes while having fun!
        </Paragraph>

        <SectionTitle href="/quantGym">Quant Gym</SectionTitle>
        <Paragraph>
          Quant Gym is Stanford ACMs premier quantitative trading training
          program. Get ready to flex those mind muscles, and let&apos;s work
          together to practice our skills and ACE the interviews 😤.
        </Paragraph>
        <Paragraph>
          <i>Weekly meetings: Fridays 5PM - 6PM. Location: TBD</i>
        </Paragraph>

        <SectionTitle href="/geoguessr">GeoGuessr</SectionTitle>
        <Paragraph>
          Join us for weekly GeoGuessr sessions — no experience necessary!
        </Paragraph>
        <Paragraph>
          <i>
            Weekly meetings: Wednesdays 8PM at Hammarskjöld (592 Alvarado Row)
          </i>
        </Paragraph>

        <SectionTitle href="/escapeRoom">Escape Room</SectionTitle>
        <Paragraph>
          We&apos;re building an exciting escape room experience for Stanford
          students to be held in Spring quarter.
        </Paragraph>
        <Paragraph>
          <i>Weekly meetings: TBD</i>
        </Paragraph>
      </Section>
    </Layout>
  );
}
