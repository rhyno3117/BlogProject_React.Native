import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
const blogPosts = useContext(BlogContext)

  return <View>
    <Text>Index Screen</Text>
    <Button />
    <FlatList 
    data={blogPosts} 
    keyExtractor={(blogPost) => blogPost.title}
    renderItem={({ item }) => {
        return <Text>{item.title}</Text>
    }}
    />
  </View>
}

const styles = StyleSheet.create({})

export default IndexScreen;