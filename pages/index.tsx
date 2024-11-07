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

export default function About() {
  return (
    <Layout title="About" pageName="about">
      <Section id="about">
        <Title>Aboot</Title>
        <Paragraph>
          ACM is Stanford&apos;s premier computer science organization. Our
          mission is to build exciting projects to learn about and solve
          challenging technical and social problems.
        </Paragraph>
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

        <SectionTitle href="/proco">ProCo</SectionTitle>
        <Paragraph>
          ProCo is a computer programming contest for high school students in
          the style of the college-level ACM-ICPC. ProCo aims to provide a fun
          and engaging opportunity for high school students in the Bay Area to
          explore their passion in computer science.
        </Paragraph>
        <Paragraph>
          <b>Date:</b> May 4, 2024
          <br />
          <b>Time:</b> 9 AM
          <br />
          <b>Location:</b> Sapp Center for Science Teaching and Learning
          <br />
          <b>Deadline to sign up:</b> Wednesday, May 1<br />
        </Paragraph>

        <SectionTitle href="/puzzleHunt">Puzzlehunt</SectionTitle>
        <Paragraph>
          ACM hosts a puzzle hunt open to all Stanford students. We invite you
          to solve puzzles as quickly as possible for prizes while having fun!
        </Paragraph>
      </Section>
    </Layout>
  );
}
