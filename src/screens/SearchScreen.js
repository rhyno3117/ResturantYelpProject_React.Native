import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  return (
    <View>
      <SearchBar />
      <Text>SearchScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
})

export default SearchScreen