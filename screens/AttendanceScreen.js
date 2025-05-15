// screens/AttendanceScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { sampleAttendance } from '../data/sampleData';
import AttendanceItem from '../components/AttendanceItem';

const AttendanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Attendance</Text>
      {sampleAttendance.length > 0 ? (
        <FlatList
          data={sampleAttendance}
          renderItem={({ item }) => <AttendanceItem item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No attendance data available yet.</Text>
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

export default AttendanceScreen;
