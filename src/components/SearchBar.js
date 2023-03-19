import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>SearchBar</Text>
    </View>
  )
}

styles =StyleSheet.create ({
    background: {
        backgroundColor: "#f0eeee",
    }
})

export default SearchBar