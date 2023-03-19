import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, {useState, useEffect } from 'react'
import yelp from '../api/yelp'

const ResultsShowScreen = ({navigation}) => {
    const [response, setResponse] = useState(null)
    const id = navigation.getParam('id')
    
    const getResult = async (id) => {
        const individual = await yelp.get(`/${id}`)
        setResponse(individual.data)
       
    }

  useEffect (() => {
    getResult(id)
  }, [])

if(!response){
    return null
}

  return (
    <View >
        <View style={{marginLeft:'auto', marginRight:'auto', marginTop:15}}>
      <Text style={{fontWeight:'bold', fontSize:18}}>{response.name}</Text>
      <Text>{response.display_phone}</Text>
      <Text style={{paddingBottom:25}}>{response.location.display_address}</Text>
      
      <FlatList
      data={response.photos}
      keyExtractor={(photo) => photo}
      renderItem={({item}) => {
        return <Image style={styles.image}source={{uri: item}}/>
      }}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height:120,
        width:200,
        borderColor:'black',
        borderWidth: 2,
        marginBottom:10,
    }

})
export default ResultsShowScreen