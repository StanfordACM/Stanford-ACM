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
        <Title>🌍 GeoGuessr Club 🗺️</Title>
        <Title>What's GeoGuessr Club?</Title>
        <Paragraph>
          We're a fun club that primarily plays GeoGuessr, a game where you figure out where you are in the world from just a single image! We'll teach you all the tips and tricks that anyone from beginners to pros use to master the game. Additionally, inspired by our recent fizz fame (reference the screenshot in 25-26-officers), we're planning on teaching the basics of geolocation and OSINT techniques.
        </Paragraph>
        <Paragraph>
          Starting this year, ACM GeoGuessr Club is participating as Stanford University at the official Collegiate GeoGuessr League! We'll be participating in both solo and doubles in weekly tournaments.
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
          Time & Date: Hammarskjöld, Fridays 8PM
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