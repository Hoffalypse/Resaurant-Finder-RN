import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>SearchBar</Text>
    </View>
  )
}

styles = StyleSheet.create ({
    background: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15
    }
})

export default SearchBar