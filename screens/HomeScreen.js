// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Card from '../components/Card';

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* You'll need to add an actual image to assets/icon.png */}
        <Image source={require('../assets/icon.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to CoolCollegeApp!</Text>
        <Text style={styles.subtitle}>Your one-stop portal for college life.</Text>
      </View>

      <Card>
        <Text style={styles.cardTitle}>Quick Access</Text>
        <Text style={styles.linkText} onPress={() => navigation.navigate('Attendance')}>- Check your Attendance</Text>
        <Text style={styles.linkText} onPress={() => navigation.navigate('Notices')}>- View latest Notices</Text>
        <Text style={styles.linkText} onPress={() => navigation.navigate('Results')}>- Access your Results</Text>
        <Text style={styles.linkText} onPress={() => navigation.navigate('CommunitiesTab')}>- Connect in Communities</Text>
      </Card>

      <Card>
        <Text style={styles.cardTitle}>Today's Highlight</Text>
        <Text style={styles.cardText}>
          Don't forget to check the "Placement Prep" community for the latest interview tips and company updates!
        </Text>
      </Card>
       <Card>
        <Text style={styles.cardTitle}>Upcoming Event</Text>
        <Text style={styles.cardText}>
          AI Workshop on Nov 5th. Limited seats, register soon via the Notices section!
        </Text>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
    borderRadius: 35, 
    backgroundColor: 'rgba(255,255,255,0.2)', // Placeholder color if image is transparent
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5,
    lineHeight: 22,
  },
  linkText: {
    fontSize: 15,
    color: '#007AFF',
    marginBottom: 8,
    lineHeight: 22,
  }
});

export default HomeScreen;
