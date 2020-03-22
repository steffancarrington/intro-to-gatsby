exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    // Run a check to see if we do get the data, if not output and error
    if (result.errors) {
        reporter.panic('failes to create posts', result.errors);
    }

    // If there are no errors, we can proceed to grab the post data
    const posts = result.data.allMdx.nodes;

    posts.forEach(post => {
        actions.createPage({
            path: post.frontmatter.slug,
            component: require.resolve('./src/templates/post.js'),
            context: {
                slug: post.frontmatter.slug,
            },
        });
    });
};