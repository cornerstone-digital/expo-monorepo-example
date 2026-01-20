import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

export interface ButtonProps {
  /**
   * Button text
   */
  title: string;
  /**
   * Callback when button is pressed
   */
  onPress: () => void;
  /**
   * Button variant style
   */
  variant?: 'primary' | 'secondary';
}

/**
 * A reusable Button component for the monorepo
 */
export const Button: React.FC<ButtonProps> = ({ 
  title, 
  onPress, 
  variant = 'primary' 
}) => {
  return (
    <View 
      style={[
        styles.button, 
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton
      ]}
      onTouchEnd={onPress}
    >
      <Text 
        style={[
          styles.text,
          variant === 'primary' ? styles.primaryText : styles.secondaryText
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

interface Styles {
  button: ViewStyle;
  primaryButton: ViewStyle;
  secondaryButton: ViewStyle;
  text: TextStyle;
  primaryText: TextStyle;
  secondaryText: TextStyle;
}

const styles = StyleSheet.create<Styles>({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  secondaryButton: {
    backgroundColor: '#E5E5EA',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  secondaryText: {
    color: '#000000',
  },
});
