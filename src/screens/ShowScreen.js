import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ route }) => {
    const { state } = useContext(Context)
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
