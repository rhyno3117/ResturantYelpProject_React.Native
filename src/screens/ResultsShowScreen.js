import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params;

  console.log(id);

  return (
    <View>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
