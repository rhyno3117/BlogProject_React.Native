import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ShowScreen = ({ route }) => {
    const { id } = route.params;
    console.log(id);

    return (
        <View>
            <Text>Show Screen</Text>
            <Text>Blog ID: {id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ShowScreen;
