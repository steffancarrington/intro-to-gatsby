import { graphql, useStaticQuery } from 'gatsby';

// define our hook to pull in site metadata
const useSiteMetadata = () => {
    // Define GraphQL Query generated in Graph QL Playground
    // Use Gatsbys built in hook 'useStaticQuery and write in a GraphQL query within that
    const data = useStaticQuery(graphql`
        query getSiteMetaData {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    // Return siteMetadata object from GraphQL Query
    return data.site.siteMetadata;
};

export default useSiteMetadata;
