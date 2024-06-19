import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ route }) => {
    const { id } = route.params;
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id')
    );

    const [title, setTitle] = useState(blogPost.title)

    return (
        <View>
            <Text>Edit Screen - {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default EditScreen;
