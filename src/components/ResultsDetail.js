import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View>
        <Image style={styles.image} source={{ uri: result.image_url }} />
        <Text>{result.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    }
});

export default ResultsDetail;
