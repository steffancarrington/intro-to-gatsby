import { graphql, useStaticQuery } from 'gatsby';

// define our hook to pull in blog posts
const usePosts = () => {
    // Define GraphQL Query generated in Graph QL Playground
    // Use Gatsbys built in hook 'useStaticQuery and write in a GraphQL query within that
    const data = useStaticQuery(graphql`
        query getPostsQuery {
            allMdx {
                nodes {
                    frontmatter {
                        author
                        slug
                        title
                        image {
                            sharp: childImageSharp {
                                fluid(
                                    maxWidth: 100
                                    maxHeight: 100
                                    duotone: {
                                        highlight: "#ddbbff"
                                        shadow: "#663399"
                                    }
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    excerpt
                }
            }
        }
    `);

    // Return Blog Post Data but in our specified format
    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        author: post.frontmatter.author,
        slug: post.frontmatter.slug,
        image: post.frontmatter.image,
        excerpt: post.excerpt,
    }));
};

export default usePosts;
