import styled from 'styled-components';

import Layout from '../components/layout';
import { People, Person } from '../components/people';
import { Paragraph, Section, Title } from '../components/section';
import {
  SponsorRow,
  SponsorRowImage,
  SponsorsRow
} from '../components/sponsors';

export default function GeoGuessr() {
  return (
    <Layout title="GeoGuessr" pageName="geoguessr">
      <Section id="geoguessr">
        <Title> GeoGuessr </Title>
        <Paragraph>
          We'll play GeoGuessr once a week. No experience required: we'll teach you from the ground up. 
          A mix of learning, (low-pressure) tournaments, prizes, and friends!
        </Paragraph>
      </Section>
      <Section id="board">
        <People title="Organizers" startShown={true} bigTitle>
          <Person name="Nathan Chi" year={2026} position="Co-Director" />
          <Person name="Ryan Chi" year={2025} position="Co-Director" />
          <Person name="Daniel Zamoshchin" year={2024} position="Co-Director" />
        </People>
      </Section>
      <Section id="meetings">
        <Title>Meeting Information</Title>
        <Paragraph>
          Meeting Time: 8:15 - 9:15 p.m. Thursdays
        </Paragraph>
        <Paragraph>
          First meeting this Thursday, Oct 10th! Location: Hammarskjöld
        </Paragraph>
      </Section>
      <Section id="sponsors">
        <Title>Sponsors</Title>
        <Paragraph>
          Sponsored by TBD
        </Paragraph>
        {/* 
        <SponsorsRow>
          <SponsorRow>
            <SponsorRowImage src="/logos/sponsor.png" alt="Sponsor" />
          </SponsorRow>
        </SponsorsRow>
        */}
      </Section>
    </Layout>
  );
}