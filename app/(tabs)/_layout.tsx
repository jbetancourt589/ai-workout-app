import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
  screenOptions={{
    tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
    headerShown: false,
    tabBarButton: HapticTab,
    tabBarBackground: TabBarBackground,
    tabBarStyle: Platform.select({
      ios: {
        
        height:60,
      },
      default: {height:60,
        
      },
      
    }),
    // 👇 This is where you add margins to the title text
    tabBarLabelStyle: {
       position:'relative',
      fontSize: 14, // optional - change text size
    },
  }}
>
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workouts',
          tabBarIcon: ({ color }) => <IconSymbol size={30} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
  name="profile"
  options={{
    title: 'Profile',
    tabBarIcon: ({ color }) => (
      <Ionicons name="person-outline" size={30} color={color} />
    ),
  }}
/>

      
    </Tabs>
  );
}
