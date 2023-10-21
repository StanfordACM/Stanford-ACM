import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

import {SignUpButton, Center} from './puzzleHunt/2023';
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


export default function About() {
  return (
    <Layout title="About" pageName="about">
      <Section>
        <Center>
        <Title>
          Puzzle Hunt 2023: Mystery in History
        </Title>
        <Paragraph>
          Puzzle Hunt is on October XX
        </Paragraph>
        <SignUpButton>
          Sign Up
        </SignUpButton>
        </Center>
      </Section>
      <Section id="about">
        <Title>About</Title>
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
          <strong>
            The contest happened in-person on April 15, 2023. More info about
            ProCo 2024 will be released as we get closer to the spring.
          </strong>
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
