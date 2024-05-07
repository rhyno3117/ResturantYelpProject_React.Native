import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.background}>
        <Feather name="search" />
      <Text>Search Bar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        // backgroundColor: '#F0EEEE',
        backgroundColor: 'red',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
})

export default SearchBar