import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function Timeline() {
  const { themeData } = useTheme();

  return (
    <View style={[styles.container, { borderColor: themeData.color }]}>
      <Text style={[styles.text, { color: themeData.textColor }]}>Timeline Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    textAlign: 'center',
  },
});
