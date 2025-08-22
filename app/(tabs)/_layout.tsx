import { HapticTab } from '@/components/HapticTab';
import BlurTabBarBackground from '@/components/ui/TabBarBackground.ios';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Platform } from 'react-native'; // ✅ import Image


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: BlurTabBarBackground,
        tabBarStyle: Platform.select({
          ios: { height: 60 },
          default: { height: 60 },
        }),
        tabBarLabelStyle: {
          position: 'relative',
          fontSize: 14,
        },
      }}
    >
     <Tabs.Screen
  name="Push"
  options={{
    title: 'Push',
    tabBarIcon: ({ size }) => (
      <Image
        source={require('../../assets/images/landing-image.png')}
        style={{
          width: size * 1.7,   // make it 20% bigger
          height: size * 1.7,
          resizeMode: 'contain',
        }}
      />
          ),
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
