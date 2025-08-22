// components/CustomText.tsx
import React from 'react';
import { Text, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

export default function CustomText({ style, children, ...props }: CustomTextProps) {
  return (
    <Text style={[{ fontFamily: 'NicoMoji' }, style]} {...props}>
      {children}
    </Text>
  );
}
