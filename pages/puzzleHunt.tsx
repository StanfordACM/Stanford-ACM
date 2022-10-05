import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

export default function PuzzleHunt() {
  return (
    <Layout title="Puzzle Hunt" pageName="puzzleHunt">
      <Section>
        <Title>Puzzle Hunt</Title>
        <h2>Registration Form</h2>
        <Paragraph>
          You can now register for Puzzle Hunt 2022-2023! Please fill out this
          form{' '}
          <LinkComponent
            href="https://forms.gle/krX3Fn93YPKgSKyC8"
            target="_blank"
          >
            https://forms.gle/krX3Fn93YPKgSKyC8
          </LinkComponent>
        </Paragraph>
        <h2>What is this?</h2>
        <Paragraph>
          Like a cross between an escape room and MITMH-style puzzle hunts. In
          last year&apos;s Stanford Puzzle Hunt, teams raced across campus
          solving creative puzzles, gradually piecing together the answer to a
          murder mystery.
          <br />
          <b>No prior experience is needed.</b>
          <br />
          See previous puzzle hunts (hosted by{' '}
          <LinkComponent href="https://sumo.stanford.edu">
            SUMO
          </LinkComponent>){' '}
          <LinkComponent href="https://sumo.stanford.edu/puzzlehunt/index.html">
            here
          </LinkComponent>
          .
        </Paragraph>
        <h2>Who can participate?</h2>
        <Paragraph>
          <b>Teams of up to 4 people!</b> Anyone from the Stanford community is
          eligible to participate, but only Stanford students can receive
          prizes.
          <br />
          Note that due to limited capacity, registration is first-come
          first-served.
          <br />
        </Paragraph>
        <h2>I don&apos;t have a team! Can I still participate?</h2>
        <Paragraph>
          <b>Don&apos;t worry!</b> You can be matched to other people to form a
          team or participate on your own.
        </Paragraph>
        <h2>Questions?</h2>
        <Paragraph>
          Reach out to us at{' '}
          <LinkComponent href="mailto:syyan@stanford.edu">
            syyan@stanford.edu
          </LinkComponent>{' '}
          and{' '}
          <LinkComponent href="mailto:ssyoung@stanford.edu">
            ssyoung@stanford.edu
          </LinkComponent>{' '}
          if you have any further questions! Puzzle hunt is run by{' '}
          <LinkComponent href="/">Stanford ACM</LinkComponent>&apos;s Puzzle
          Hunt Committee!
        </Paragraph>
      </Section>
    </Layout>
  );
}
