import Image from 'next/image';
import styled from 'styled-components';

import Layout from '../components/layout';
import {
  LinkComponent,
  Paragraph,
  Section,
  Title
} from '../components/section';

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 400px;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
`;

export default function EscapeRoom() {
  return (
    <Layout title="Escape Room" pageName="escapeRoom">
      <Section id="escape-room">
        <Title>Stanford Escape</Title>
        <Paragraph>
          <strong>Stanford Excape</strong> is Stanford's first in-house escape
          room and is a collaboration between Stanford Student Robotics and the
          Stanford Association of Computing Machinery. If you don't have time to
          do the room but would still love to hear about the student
          projects/the engineering behind the scenes of our room, we invite you
          to come to one of our drop in tour sessions!
        </Paragraph>
        <Paragraph>
          <strong>Dates:</strong> May 1st - 12th.
        </Paragraph>
        <Paragraph>
          <strong>Location:</strong> Packard
        </Paragraph>
        <Paragraph>
          <strong>Schedule your session:</strong>{' '}
          <LinkComponent
            href="https://www.calendar.com/stanfordescape/roombooking/"
            target="_blank"
          >
            Booking
          </LinkComponent>
        </Paragraph>
        <Paragraph>
          <strong>Wait List:</strong>{' '}
          <LinkComponent
            href="https://docs.google.com/forms/d/163upfeiWiRj9IdMMweFtgP9V2ypFC7BQytuTTYS0XKQ/edit#responses"
            target="_blank"
          >
            Link
          </LinkComponent>
        </Paragraph>
        <Paragraph>
          <strong>Schedule a drop in session:</strong>{' '}
          <LinkComponent
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-IdoLKvrILgTfqOfU-AagwKLnmKCv05Q3U3J0Nfrn0OXB8Q/viewform"
            target="_blank"
          >
            RSVP
          </LinkComponent>
        </Paragraph>
        <ImageContainer>
          <Image
            src="/escapeRoom/escapeGraphic.png"
            alt="Stanford Escape Room"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      </Section>
    </Layout>
  );
}
