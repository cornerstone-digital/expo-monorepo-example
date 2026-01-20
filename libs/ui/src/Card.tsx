import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface CardProps {
  /**
   * Card title
   */
  title: string;
  /**
   * Card content
   */
  children: React.ReactNode;
}

/**
 * A reusable Card component for the monorepo
 */
export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

interface Styles {
  card: ViewStyle;
  title: TextStyle;
  content: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000000',
  },
  content: {
    marginTop: 4,
  },
});
