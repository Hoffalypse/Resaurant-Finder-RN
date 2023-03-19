import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
 
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
      
      autoCorrect={false}
      placeholder='Search'
      style={styles.inputStyle}
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
      
    </View>
  )
}

styles = StyleSheet.create ({
    backgroundStyle: {
        backgroundColor: "white",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row',
        marginTop: 10,
        marginBottom:10,
    },
    inputStyle: {
     fontSize: 20,
      flex: 1,

    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 7,
    }

})

export default SearchBar