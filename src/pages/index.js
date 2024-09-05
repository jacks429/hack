// src/pages/my-responsive-component.jsx
import React from 'react';
import { graphql } from 'gatsby';
import MobileComponent from './MobileComponent';
import DesktopComponent from '../components/DesktopComponent';

// GraphQL query to fetch all images needed
export const query = graphql`
  query {
    passportImage: file(relativePath: { eq: "document-slov-passport.png" }) {
      childImageSharp {
        gatsbyImageData(width: 80, height: 80, layout: FIXED)
      }
    }
    runImage: file(relativePath: { eq: "homage-page-run.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400, quality: 90, layout: CONSTRAINED)
      }
    }
  }
`;

const MyResponsiveComponent = ({ data }) => {
  // Combine all image data into a single object
  const imageData = {
    passport: data?.passportImage?.childImageSharp?.gatsbyImageData,
    run: data?.runImage?.childImageSharp?.gatsbyImageData,
  };

  return (
    <>
      {/* Pass the combined imageData object as a prop */}
      <MobileComponent imageData={imageData} />
      <DesktopComponent />
    </>
  );
};

export default MyResponsiveComponent;
