import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'

const SearchScreen = () => {
const [term, setTerm] = useState('');
const [results, setResults] useState([]);

  return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={(newTerm) => setTerm(newTerm)} 
      onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>SearchScreen</Text>
      <Text>{term}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
})

export default SearchScreen