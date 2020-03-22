import React from 'react';
import styled from '@emotion/styled';
import  { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
    background-position: top 20%; center;
    background-size: cover;
    height: 50vh;

    + * {
        margin-top: 0;
    }
`;

const TextBox = styled('div')`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 0;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    height: 100%;
    width: 100%;

    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
        font-size: 2.25rem;
    }

    p, 
    a {
        color: #222;
        margin-top: 0;
    }

    a {
        margin-top: 0.5rem;
    }
`;

const Hero = () => {
    // Use GraphQL to make a query to pull in the specific image we need
    // We then use a new GraphQL concept called GraphQL Fragment
    // We then use a built in Gatsby Feature
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "liverpool.jpg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp,
                    }
                }
            }
        }
    `);
    return (
        <ImageBackground Tag="section" fluid={image.sharp.fluid} fadein="soft">
            <TextBox>
                <h1>Front End Masters &amp; Gatsby &hearts;</h1>
                <p>Hello Liverpool <Link to="/about/">Learn about me &rarr;</Link></p>
            </TextBox>
        </ImageBackground>
    )
};

export default Hero;
