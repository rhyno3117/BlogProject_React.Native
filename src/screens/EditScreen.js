import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreen = ({ route }) => {
    const { id } = route.params;
    
    return (
        <View>
            <Text>Edit Screen - {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default EditScreen;
