import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Button, Card } from '@expo-monorepo/ui';
import { LoginForm } from '@expo-monorepo/features/auth';

export default function App() {
  const handleLogin = (email: string, password: string) => {
    Alert.alert(
      'Login Attempt',
      `Email: ${email}\nPassword: ${password.replace(/./g, '*')}`,
      [{ text: 'OK' }]
    );
  };

  const handleButtonPress = () => {
    Alert.alert('Button Pressed', 'You pressed the example button!');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.header}>Expo Monorepo Example</Text>
        <Text style={styles.subheader}>
          NX workspace with shared libraries
        </Text>

        <Card title="UI Components">
          <Text style={styles.description}>
            Shared UI components from @expo-monorepo/ui
          </Text>
          <View style={styles.buttonGroup}>
            <Button 
              title="Primary Button" 
              onPress={handleButtonPress} 
              variant="primary" 
            />
          </View>
          <View style={styles.buttonGroup}>
            <Button 
              title="Secondary Button" 
              onPress={handleButtonPress} 
              variant="secondary" 
            />
          </View>
        </Card>

        <Card title="Feature Packages">
          <Text style={styles.description}>
            Login form from @expo-monorepo/features/auth
          </Text>
          <LoginForm onLogin={handleLogin} />
        </Card>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Built with NX, Expo, and React Native
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#000',
  },
  subheader: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  buttonGroup: {
    marginVertical: 8,
  },
  footer: {
    marginTop: 32,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
});
