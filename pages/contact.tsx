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
          <LinkComponent href="mailto:apbloom@stanford.edu">
            apbloom@stanford.edu
          </LinkComponent>
          ,{' '}
          <LinkComponent href="mailto:sherylch@stanford.edu">
            sherylch@stanford.edu
          </LinkComponent>
          ,{' '}
          <LinkComponent href="mailto:ksvedula@stanford.edu">
            ksvedula@stanford.edu
          </LinkComponent>
          , or{' '}
          <LinkComponent href="mailto:gorn@stanford.edu">
            gorn@stanford.edu
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
        <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              backgroundColor: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              marginTop: '20px'
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#f5f5f5' }}>
                <th
                  style={{
                    border: '2px solid #333',
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}
                >
                  Name
                </th>
                <th
                  style={{
                    border: '2px solid #333',
                    padding: '12px',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: '16px'
                  }}
                >
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Alex Bloom
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  apbloom@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Sheryl Chen
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  sherylch@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Karthik Vedula
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  ksvedula@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Nattaput (Gorn) Namchittai
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  gorn@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Cheney Sang
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  cheneys@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Kaitlyn Wang
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  kaitwang@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  James Liu
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  jihaoliu@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Maleeka Raddygala
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  maleeka@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Ria Garg
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  riagarg@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Mao Yu Cheng
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  chengmao@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Victor Chen
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  victor36@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Dylan Khangsar
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  dylankh@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Ritwin Narra
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  ritwin@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Juli Huang
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  julih@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Nanxi Jiang
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  nanxi@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Justin Ji-Ming Lee
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  leejj@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  KuoKuo Li
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  kuokuoli@stanford.edu
                </td>
              </tr>
              <tr>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  Zara Zong
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  zaraz@stanford.edu
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </Layout>
  );
}
