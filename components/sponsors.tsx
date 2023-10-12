import styled from 'styled-components';

export const Sponsors = styled.div`
  text-align: center;
`;

export const Sponsor = styled.div<{ width?: number }>`
  display: inline-block;
  width: ${(props) => props.width || 250}px;
  text-align: center;
  padding: 10px;
  margin: 0 2px;
`;

export const SponsorsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const SponsorRow = styled.a`
  height: 100px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

export const SponsorRowImage = styled.img`
  width: auto;
  max-height: 100px;
`;
