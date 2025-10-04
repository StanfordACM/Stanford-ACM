import styled from 'styled-components';

import Layout from '../components/layout';
import { People, Person } from '../components/people';
import { LinkComponent, Paragraph, Section, Title } from '../components/section';
import {
  SponsorRow,
  SponsorRowImage,
  SponsorsRow
} from '../components/sponsors';

export const GeoguessrImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 600px;
  display: block;
  margin: 0 auto;
`;

export default function GeoGuessr() {
  return (
    <Layout title="GeoGuessr" pageName="geoguessr">
      <Section id="geoguessr">
        <Title> GeoGuessr  </Title>
        <Title>What's GeoGuessr Club?</Title>
        <Paragraph>
          We're a fun club that primarily plays GeoGuessr, a game where you figure out where you are in the world from just a single image! We'll teach you all the tips and tricks that anyone from beginners to pros use to master the game. Additionally, inspired by our recent fizz fame, we're planning on teaching the basics of geolocation and OSINT techniques.
        </Paragraph>
        <Paragraph>
          Starting this year, ACM GeoGuessr Club is participating as Stanford University at the official Collegiate GeoGuessr League! We'll be participating in both solo and doubles in weekly tournaments.
        </Paragraph>
        <GeoguessrImage src="/geoguessr/fizz_post.png" alt="GeoGuessr Fizz Post" />
        <Paragraph>
          Join our discord server: <LinkComponent href="https://discord.gg/PG5RYScS">Stanford Geoguessr Discord</LinkComponent>. If you have any questions, feel free to contact us at <LinkComponent href="mailto:hinson@stanford.edu">hinson@stanford.edu</LinkComponent>.
        </Paragraph>
      </Section>
      <Section id="board">
        <People title="Organizers" startShown={true} bigTitle>
          <Person name="Hinson Chan" year={2028} position="Director" />
        </People>
      </Section>
      <Section id="meetings">
        <Title>Meeting Information</Title>
        <Paragraph>
          Time & Date: Hammarskjöld, Wednesdays 8PM (first meeting Wednesday, Oct 15th)
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