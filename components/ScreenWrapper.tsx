// components/ScreenWrapper.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface ScreenWrapperProps {
  children: React.ReactNode;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1919', // your global background color
  },
});
