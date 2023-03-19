import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({item}) => {
        return <ResultsDetail result={item}/>
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    title : {
        marginLeft:10,
        marginTop:15,
        fontSize: 25,
        fontWeight: 'bold',
    }

})
export default ResultsList