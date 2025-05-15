// screens/ResultsScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { sampleResults } from '../data/sampleData';
import ResultItem from '../components/ResultItem';

const ResultsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Results</Text>
      {sampleResults.length > 0 ? (
        <FlatList
          data={sampleResults}
          renderItem={({ item }) => <ResultItem item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No results published yet.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#777',
  },
});

export default ResultsScreen;
