// src/pages/my-responsive-component.jsx
import React from 'react';
import { graphql } from 'gatsby';
import MobileComponent from './MobileComponent';
import DesktopComponent from '../components/DesktopComponent';

export const query = graphql`
  query {
    file(relativePath: { eq: "document-slov-passport.png" }) {
      childImageSharp {
        gatsbyImageData(width: 80, height: 80, layout: FIXED)
      }
    }
  }
`;

const MyResponsiveComponent = ({ data }) => {
  const imageData = data?.file?.childImageSharp?.gatsbyImageData;

  return (
    <>
      <MobileComponent imageData={imageData} />
      <DesktopComponent />
    </>
  );
};

export default MyResponsiveComponent;
