// components/ScreenWrapper.tsx
import React from 'react';
import { StyleSheet, View } from 'react-native';

interface ScreenWrapperProps {
  children: React.ReactNode;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f2f2f', // your global background color
  },
});
