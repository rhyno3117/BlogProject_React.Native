import React, { useState, createContext } from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([  ...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`} ])
    };


const blogPostz = [
    { title: 'Blog Post #1' },
    { title: 'Blog Post #2' }
];

    return <BlogContext.Provider value={blogPostz}>
        {children}
    </BlogContext.Provider>
};

export default BlogContext;