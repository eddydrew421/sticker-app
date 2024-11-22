import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Discover screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#fff',
    },
  });