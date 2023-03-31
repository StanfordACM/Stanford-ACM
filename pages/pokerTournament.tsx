import Layout from '../components/layout';
import { PokerTitle } from '../components/poker';
import { LinkComponent, Paragraph, Section } from '../components/section';

export default function PokerTournament() {
  return (
    <Layout title="Poker Tournament" pageName="pokerTournament">
      <Section>
        <PokerTitle />
        <Paragraph>
          On May 13, 2023, Stanford ACM is hosting Stanford&apos;s inaugural{' '}
          <b>Poker Tournament</b>, sponsored by the premier trading firms in the
          nation (HRT, Jane Street, etc.)
        </Paragraph>
        <Paragraph>
          Think you might be the best poker player on campus? Or just looking
          for a good time? What are you waiting for?
          <br />
          <LinkComponent href="https://forms.gle/wFPCRSfEW8hHj339A">
            Sign up now.
          </LinkComponent>
          <br />
          All skill levels are welcome. There will be food, swag, and prizes.
        </Paragraph>
        <Paragraph>
          <b>Schedule</b>: May 13, 2023
          <br />
          (We expect the preliminary rounds will last several hours, with one
          final table to conclude the event. We will also have tables /
          slideshows from our sponsors.)
        </Paragraph>
        <Paragraph>
          <b>Sponsors</b>: Two Sigma, Hudson River Trading
          <br />
          (If you are interested in partnering with us, please email{' '}
          <LinkComponent href="mailto:stanfordpokertournament@gmail.com">
            stanfordpokertournament@gmail.com
          </LinkComponent>{' '}
          to discuss details.)
        </Paragraph>
      </Section>
    </Layout>
  );
}
