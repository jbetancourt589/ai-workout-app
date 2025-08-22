import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";


type ArrowProps = { onPress?: () => void };

export const BackArrow: React.FC<ArrowProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 16 }}>
    <Ionicons name="arrow-back" size={50} color="#b28238" />
  </TouchableOpacity>
);

export const ForwardArrow: React.FC<ArrowProps> = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 16 }}>
    <Ionicons name="arrow-forward" size={50} color="#b28238" />
  </TouchableOpacity>
);