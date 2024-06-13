import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
const [title, setTitle] = useState('');
const [content, setContent] = useState('');

    return (
        <View>
            <Text>Enter Title:</Text>
            <TextInput />
            <Text>Enter Content:</Text>
            <TextInput />
        </View>
    );
};

const styles = StyleSheet.create({});

export default CreateScreen;
