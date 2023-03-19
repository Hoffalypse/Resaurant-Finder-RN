import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results, navigation}) => {

    if(!results.length){
        return null
    }
  return (
    <View style={{marginBottom:15}}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return(
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
        <ResultsDetail result={item}/>
        </TouchableOpacity>
  )}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title : {
        marginLeft:15,
    
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5
    }

})
export default ResultsList