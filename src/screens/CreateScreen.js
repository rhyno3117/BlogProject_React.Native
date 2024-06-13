import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput/>
      <Text>Enter Content:</Text>
      <TextInput/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
