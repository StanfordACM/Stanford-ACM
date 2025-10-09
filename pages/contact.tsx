import React from 'react';
import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

export default function Contact() {
  return (
    <Layout title="Contact" pageName="contact">
      <Section>
        <Title>Get in Touch!</Title>
        <Paragraph>
          The Stanford chapter of the ACM currently has 1000+ members. We serve
          the Stanford community by organizing numerous industry, academic, and
          social events each quarter.
        </Paragraph>
        <Paragraph>
          To get in touch, send us an email at{' '}
          <LinkComponent href="mailto:suzeva@stanford.edu">
            suzeva@stanford.edu
          </LinkComponent>, at{' '}
          <LinkComponent href="mailto:annieee@stanford.edu">
          annieee@stanford.edu
          </LinkComponent>, or at{' '}
          <LinkComponent href="mailto:wangtony@stanford.edu">
            wangtony@stanford.edu
          </LinkComponent>{' '}
          and we&apos;ll follow up! Or simply join our{' '}
          <LinkComponent href="https://mailman.stanford.edu/mailman/listinfo/acm-members">
            mailing list
          </LinkComponent>
          .
        </Paragraph>
      </Section>
      <Section>
          <Title>Officers Contact Information</Title>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px' }}>Name</th>
                <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Annie Lee</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>annieee@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Suze van Adrichem</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>suzeva@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Tony Wang</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>wangtony@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Elana Chen</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>elanac25@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Nattaput (Gorn) Namchittai</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>gorn@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Jadelyn Tran</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>jadelyn@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Eric Cui</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>ericcui@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Mao Yu Cheng</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>chengmao@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Alexandra Kim</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>alexskim@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Sheryl Chen</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>sherylch@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Juli Huang</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>julih@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Karolyn Cheng</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>karolync@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Ryan Rong</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>ryanrong@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Jamin Xie</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>jmx@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Kristie Park</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>kristie.park@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Sandra Yang</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>aleyang@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Sabrina Yen-Ko</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>syenko@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Justin Gu</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>justingu@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Stanley Yan</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>syyan@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Nathan Chi</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>nchi1@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Isaac Lee</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>leeij@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Alex Bloom</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>apbloom@stanford.edu</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>Hinson</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>hinson@stanford.edu</td>
              </tr>
            </tbody>
          </table>
        </Section>
    </Layout>
  );
}
