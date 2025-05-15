// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import HomeScreen from '../screens/HomeScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import NoticesScreen from '../screens/NoticesScreen';
import ResultsScreen from '../screens/ResultsScreen';
import CommunitiesScreen from '../screens/CommunitiesScreen';
import CommunityDetailScreen from '../screens/CommunityDetailScreen';
import PostDetailScreen from '../screens/PostDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const commonStackOptions = {
  headerStyle: {
    backgroundColor: '#007AFF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'College Dashboard' }} />
      {/* Add other screens navigable from Home that aren't tabs, if any */}
    </Stack.Navigator>
  );
}

function AttendanceStack() {
  return (
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen name="AttendanceMain" component={AttendanceScreen} options={{ title: 'My Attendance' }} />
    </Stack.Navigator>
  );
}

function NoticesStack() {
  return (
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen name="NoticesMain" component={NoticesScreen} options={{ title: 'College Notices' }} />
      {/* If you had a NoticeDetailScreen, it would go here */}
    </Stack.Navigator>
  );
}

function ResultsStack() {
  return (
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen name="ResultsMain" component={ResultsScreen} options={{ title: 'My Results' }} />
    </Stack.Navigator>
  );
}

function CommunitiesStack() {
  return (
    <Stack.Navigator screenOptions={commonStackOptions}>
      <Stack.Screen name="CommunitiesList" component={CommunitiesScreen} options={{ title: 'Communities', headerShown: false }} />
      <Stack.Screen name="CommunityDetail" component={CommunityDetailScreen} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} />
    </Stack.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Attendance') {
              iconName = focused ? 'calendar-check' : 'calendar-check-outline';
            } else if (route.name === 'Notices') {
              iconName = focused ? 'bell' : 'bell-outline';
            } else if (route.name === 'Results') {
              iconName = focused ? 'school' : 'school-outline';
            } else if (route.name === 'CommunitiesTab') {
              iconName = focused ? 'account-group' : 'account-group-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Important: Hide default header for Tab screens, Stack will provide it
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Attendance" component={AttendanceStack} />
        <Tab.Screen name="Notices" component={NoticesStack} />
        <Tab.Screen name="Results" component={ResultsStack} />
        <Tab.Screen name="CommunitiesTab" component={CommunitiesStack} options={{ title: 'Communities' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
