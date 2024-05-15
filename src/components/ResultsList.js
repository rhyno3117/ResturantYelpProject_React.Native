import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

function ResultsList({ title, results }) {
  return (
    <View>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return <ResultsDetail result={item} />
        }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsList