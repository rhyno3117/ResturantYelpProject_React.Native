import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE'
    }
})

export default SearchBar