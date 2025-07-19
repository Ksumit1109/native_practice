import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, User, HelpCircle} from 'lucide-react-native';
import {HomeStackParamList} from '@/types/navigation';
import ProfileScreen from '@/screens/Account/ProfileScreen';
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator<HomeStackParamList>();

const ICONS_MAP: Record<string, React.ElementType> = {
  Home: Home,
  Profile: User,
};

function renderTabBarIcon(routeName: string, color: string, size: number) {
  const IconComponent = ICONS_MAP[routeName] ?? HelpCircle;
  return <IconComponent color={color} size={size} />;
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) =>
          renderTabBarIcon(route.name, color, size),
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        options={{headerShown: false}}
        component={HomeStackNavigator}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
