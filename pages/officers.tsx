import styled from 'styled-components';

import Layout from '../components/layout';
import { People, Person } from '../components/people';
import { Title } from '../components/section';

const Container = styled.div`
  margin-bottom: 60px;
`;

export default function Contact() {
  return (
    <Layout title="Officers" pageName="officers">
      <Container>
        <Title>Meet the ACM Officers!</Title>

        {/* Active officers */}
        <People title="2025-2026" startShown={true}>
          <Person name="Annie Lee" year={2027} position="Co-President" />
          <Person name="Suze van Adrichem" year={2027} position="Co-President" />
          <Person name="Tony Wang" year={2027} position="Co-President" />
          <Person name="Sandra Yang" year={2028} position="Co-President" />
          <Person name="Elana Chen" year={2028} position="Financial Officer" />
          <Person name="Jamin Xie" year={2028} position="Financial Officer" />
          <Person name="Ryan Rong" year={2028} position="MLab Director" />
          <Person name="Sabrina Yen-Ko" year={2028} position="MLab Director" />
          <Person name="Eric Cui" year={2027} position="DevLab Director" />
          <Person name="Mao Yu Cheng" year={2028} position="DevLab Director" />
          <Person name="Sheryl Chen" year={2028} position="ProCo Director" />
          <Person name="Jadelyn Tran" year={2028} position="Social Chair" />
          <Person name="Alexandra Kim" year={2028} position="Social Chair" />
          <Person name="Karolyn Cheng" year={2028} position="Puzzle Hunt Director" />
          <Person name="Kristie Park" year={2026} position="Puzzle Hunt Director" />
          <Person name="Juli Huang" year={2028} position="Webmaster" />
          <Person name="Gorn Namchittai" year={2028} position="Webmaster" />
        </People>

        <Title>Previous Officers</Title>

        {/* Previous officers */}
        <People title="2024-2025" startShown={false}>
          <Person name="Justin Gu" year={2027} position="Co-President" />
          <Person name="Sydney Yan" year={2025} position="Co-President" />
          <Person
            name="Suze van Adrichem"
            year={2027}
            position="Financial Officer"
          />
          <Person name="Elijah Song" year={2026} position="Financial Officer" />
          <Person name="Alden Eberts" year={2027} position="MLab Co-Director" />
          <Person
            name="Christopher Sun"
            year={2027}
            position="MLab Co-Director"
          />
          <Person
            name="Ethan Boneh"
            year={2027}
            position="DevLab Co-Director"
          />
          <Person name="Emily Han" year={2027} position="DevLab Co-Director" />
          <Person
            name="Nathan Chi"
            year={2026}
            position={
              <>
                Advisor <br />
                Quant Gym/GeoGuessr Co-Director
              </>
            }
          />
          <Person
            name="Ryan Chi"
            year={2025}
            position={
              <>
                Advisor <br />
                Quant Gym/GeoGuessr Co-Director
              </>
            }
          />
          <Person
            name="Brian Xu"
            year={2026}
            position="Quant Gym Co-Director"
          />
          <Person name="Tony Wang" year={2027} position="ProCo Co-Director" />
          <Person name="Sandra Yang" year={2028} position="ProCo Co-Director" />
          <Person
            name="Kristie Park"
            year={2026}
            position="PuzzleHunt Co-Director"
          />
          <Person
            name="Daniel Sun"
            year={2025}
            position="PuzzleHunt Co-Director"
          />
          <Person name="Tesvara Jiang" year={2027} position="Social Co-Chair" />
          <Person name="Annie Lee" year={2027} position="Social Co-Chair" />
          <Person
            name="Daniel Zamoshchin"
            year={2024}
            position="GeoGuessr Co-Director"
          />
          <Person name="Eric Cui" year={2027} position="Webmaster" />
          <Person name="Sabrina Yen-Ko" year={2028} position="Webmaster" />
          <Person name="Scott Hickman" year={2025} position="Advisor" />
        </People>

        {/* Alumni */}
        <People title="Alumni" startShown={false}>
          <Person name="Jeremy Kim" year={2024} position="Co-President" />
          <Person name="Ian Ng" year={2024} position="Co-President" />
          <Person name="Patrick Liu" year={2024} position="MLab Co-Director" />
          <Person
            name="Niveditha Iyer"
            year={2024}
            position="MLab Co-Director"
          />
          <Person name="Bradley Moon" year={2025} position="Vice-President" />
          <Person name="Isaac Dan Zhao" year={2025} position="Vice-President" />
          <Person name="Sonny Young" year={2025} position="Puzzle Hunt Chair" />
          <Person name="Sydney Yan" year={2025} position="Puzzle Hunt Chair" />
          <Person name="Ishan Khare" year={2025} position="Reading Group" />
          <Person
            name="Siddharth Sharma"
            year={2025}
            position="Reading Group"
          />
          <Person name="Rohan Sikand" year={2023} position="Social Chair" />
          <Person name="Rishi Verma" year={2025} position="ProCo Chair" />
          <Person name="Hannah Kim" year={2024} position="Financial Officer" />
          <Person
            name="Scott Hickmann"
            year={2025}
            position="W3Lab Director Webmaster"
          />
          <Person name="Ryan Chi" year={2024} />
          <Person name="Erik Rozi" year={2024} />
          <Person name="William Zhang" year={2024} />
          <Person name="Nathan Kim" year={2024} />

          <Person name="James Zheng" year={2024} />
          <Person name="Rhythm Garg" year={2024} />
          <Person name="Gordon Chi" year={2023} />
          <Person name="Yasmine Mitchell" year={2023} />

          <Person name="Enok Choe" year={2023} />
          <Person name="Mihir Patel" year={2022} />
          <Person name="Vinjai Vale" year={2022} />
          <Person name="Ethan Chi" year={2022} />

          <Person name="Jillian Tang" year={2022} />
          <Person name="Divyahans Gupta" year={2018} />
          <Person name="Allan Jiang" year={2018} />
          <Person name="Addison Leong" year={2018} />

          <Person name="Brandon Yang" year={2018} />
          <Person name="Brendon Go" year={2017} />
          <Person name="Sydney Li" year={2017} />
          <Person name="Nathaniel Okun" year={2017} />

          <Person name="Aaron Brown" year={2016} />
          <Person name="David Eng" year={2016} />
          <Person name="Andrew Luo" year={2016} />
          <Person name="Ray Zhou" year={2016} />

          <Person name="Jenny Hong" year={2015} />
          <Person name="Howon Lee" year={2015} />
          <Person name="Derrick Liu" year={2015} />
          <Person name="Karanveer Mohan" year={2015} />

          <Person name="Vivek Nair" year={2015} />
          <Person name="Karthik Viswanathan" year={2015} />
          <Person name="Yushi Wang" year={2015} />
          <Person name="Alex Atallah" year={2014} />

          <Person name="Catherine Lu" year={2014} />
          <Person name="Evan Shieh" year={2014} />
          <Person name="Ayush Sood" year={2014} />
          <Person name="John Yang-Sammataro" year={2014} />

          <Person name="Daniel Robbins" year={2013} />
          <Person name="Kingston Tam" year={2013} />
          <Person name="Kapil Yedidi" year={2013} />
          <Person name="Feross Aboukhadijeh" year={2012} />

          <Person name="Jake Becker" year={2012} />
          <Person name="Xuwen Cao" year={2012} />
          <Person name="Michael Duong" year={2011} />
          <Person name="Beyang Liu" year={2011} />

          <Person name="David Gobaud" year={2010} />
          <Person name="Greg Goldgof" year={2009} />
          <Person name="Gunjit Singh" year={2008} />
          <Person name="Tongke Xue" year={2007} />
        </People>
      </Container>
    </Layout>
  );
}
