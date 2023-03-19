import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage ] = useResults()

//   console.log(JSON.stringify(results, null, 2))
const filterResultsByPrice = (price) => {

    return results.filter(result => {
        return result.price === price;
    })

}
  
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() =>searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>We have found {results.length} results</Text> */}
      <ResultsList results= {filterResultsByPrice('$')}title='Cost Effective'/>
      <ResultsList results= {filterResultsByPrice('$$')}title='Bit Pricier'/>
      <ResultsList results= {filterResultsByPrice('$$$')}title='Big Spender'/>
      <ResultsList results= {filterResultsByPrice('$$$$')}title='Win the Lottery?'/>
    </View>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
