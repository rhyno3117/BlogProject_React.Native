import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = () => {
    return (
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Add Blog Post"
                onPress={() => {
                    addBlogPost(title, content, () => {
                        navigation.navigate('Index');
                    });
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default BlogPostForm