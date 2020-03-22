import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import  { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';

// Export GraphQL Query to load particluar post data
// Able to define a variable name of $slug and set the type to a string. The ! means it's required
// slug: { eq: $slug } means that the slug variable equals to...
export const query = graphql`
    query ($slug: String!) {
        mdx(frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                title
                author
            }
            body
        }
    }
`;

// Object Destructuring to change mdx to post
const PostTemplate = ({ data: { mdx : post } }) => (
    <Layout>
        <h1>{post.frontmatter.title}</h1>
        <p css={css`font-size: 0.75rem;`}>Posted by {post.frontmatter.author}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <ReadLink to="/">&larr; back to all posts</ReadLink>
    </Layout>
);

export default PostTemplate;