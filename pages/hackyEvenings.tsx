import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

export default function HackyEvenings() {
  return (
    <Layout title="Hacky Evenings" pageName="hackyEvenings">
      <Section>
        <Title>Hacky Evenings</Title>
        <Paragraph>
          Hacky Evenings is a weekly programming meetup where students can
          collaborate on computer science projects. Hacky Evenings has
          previously hosted workshops on topics such as building web servers.
        </Paragraph>
        <Paragraph>
          We started compiling meeting notes in Winter 2022.{' '}
          <LinkComponent href="https://drive.google.com/drive/folders/19ZgFFbw_SDtNFV-ZkPsNLzRfp0Lxe1dg?usp=sharing">
            Check them out!
          </LinkComponent>
        </Paragraph>
      </Section>
    </Layout>
  );
}
