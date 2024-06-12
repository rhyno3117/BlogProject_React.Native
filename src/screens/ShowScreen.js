import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    // const { id } = route.params;
    // console.log(id);

    return (
        <View>
            <Text>Show Screen</Text>
            <Text>Blog ID: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
