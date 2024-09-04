// src/pages/my-responsive-component.jsx
import React from 'react';
import { graphql } from 'gatsby';
import MobileComponent from './MobileComponent';
import DesktopComponent from '../components/DesktopComponent';

// GraphQL query to fetch the image data
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
      {/* Pass the imageData as a prop to MobileComponent */}
      <MobileComponent imageData={imageData} />
      <DesktopComponent />
    </>
  );
};

export default MyResponsiveComponent;
