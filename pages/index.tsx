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
          We'd love for you to join ACM! Fill out our{' '}
          <LinkComponent href="https://docs.google.com/forms/d/e/1FAIpQLSd9ZxXx6L5gAJarGDa_UjbfHVtZjhaKKgCPJfQLbsuprcGDSA/viewform">
            Stanford ACM 2026 Interest Form
          </LinkComponent>
          .
        </Paragraph>
        <IndexImage
          src="/index/Stanford_ACM_poster_2026.png"
          alt="Stanford ACM 2026 Poster"
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
          <i>
            Weekly meetings: Thursdays 7:30PM - 9:00PM at CoDA B90. First
            meeting: Thursday, Oct 15!
          </i>
        </Paragraph>

        <SectionTitle href="/devlab">DevLab</SectionTitle>
        <Paragraph>
          DevLab is Stanford&apos;s premier web development club. Its goal is to
          teach students skills for full-stack development. You'll get to work
          on real projects to add to your portfolio!
        </Paragraph>
        <Paragraph>
          <i>Weekly meetings: TBD</i>
        </Paragraph>

        <SectionTitle href="/proco">ProCo</SectionTitle>
        <Paragraph>
          ProCo is a computer programming contest for high school students in
          the style of the college-level ACM-ICPC. ProCo aims to provide a fun
          and engaging opportunity for high school students in the Bay Area to
          explore their passion in computer science.
        </Paragraph>
        <Paragraph>
          <i>Held in Winter for high school students, in-person at STLC.</i>
        </Paragraph>

        <SectionTitle href="/puzzleHunt">Puzzle Hunt</SectionTitle>
        <Paragraph>
          ACM hosts a puzzle hunt open to all Stanford students. We invite you
          to solve puzzles as quickly as possible for prizes while having fun!
        </Paragraph>
        <Paragraph>
          <i>
            Sunday, Nov 15. Teams of up to 4, no CS experience needed, free
            boba!
          </i>
        </Paragraph>

        <SectionTitle href="/quantGym">Quant Gym</SectionTitle>
        <Paragraph>
          Quant Gym is Stanford ACMs premier quantitative trading training
          program. Get ready to flex those mind muscles, and let&apos;s work
          together to practice our skills and ACE the interviews 😤.
        </Paragraph>
        <Paragraph>
          <i>Weekly meetings: Fridays 5PM - 6PM. Location: CoDA B90</i>
        </Paragraph>

        <SectionTitle href="/geoguessr">GeoGuessr</SectionTitle>
        <Paragraph>
          Join us for weekly GeoGuessr sessions — no experience necessary!
        </Paragraph>
        <Paragraph>
          <i>First meeting: Monday, Oct 12. Location: Adams Tower</i>
        </Paragraph>

        <SectionTitle href="/escapeRoom">Escape Room</SectionTitle>
        <Paragraph>
          We&apos;re building an exciting escape room experience for Stanford
          students to be held in Spring quarter.
        </Paragraph>
        <Paragraph>
          <i>Operations start in Spring.</i>
        </Paragraph>

        <h2>Social Events</h2>
        <Paragraph>
          Fun social events throughout the year: board games, poker nights,
          snacks + boba, and much more!
        </Paragraph>
        <Paragraph>
          <i>
            First social: Estimathon Kickoff, Wednesday 10/21 at 7:30PM.
            Location: TBD.{' '}
            <LinkComponent href="https://forms.gle/Pa23oJUbV8Yjr2XR9">
              RSVP here
            </LinkComponent>
            . Contacts: Victor Chen (victor36@stanford.edu), Dylan Khangsar
            (dylankh@stanford.edu)
          </i>
        </Paragraph>

        <SectionTitle href="/pokerTournament">
          Social Game Day (Poker Tournament)
        </SectionTitle>
        <Paragraph>
          A No-Limit Texas Hold&apos;em multi-table tournament with no entrance
          fee, open to all skill levels. No experience required!
        </Paragraph>
        <Paragraph>
          <i>Mid-Spring Quarter.</i>
        </Paragraph>
      </Section>
    </Layout>
  );
}
