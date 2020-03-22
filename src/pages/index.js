import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import Insta from '../components/insta';

export default () => {
    // call the usePosts hook
    const posts = usePosts();

    return (
        <React.Fragment>
        <Hero />
        <Layout>
            <h2>Read my Blog</h2>
            {posts.map(post => (
                // Output the JSON Content to the Page, post is the data we want to output
                // <pre>{JSON.stringify(post, null, 2)}</pre>
                <PostPreview key={post.slug} post={post} />
            ))}

            <Insta />
        </Layout>
        </React.Fragment>
    );
}