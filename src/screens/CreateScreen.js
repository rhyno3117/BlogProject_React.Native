import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../BlogPostForm';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return <BlogPostForm />
};

const styles = StyleSheet.create({});

export default CreateScreen;
