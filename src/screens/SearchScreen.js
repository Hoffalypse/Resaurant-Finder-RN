import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import useResults from "../hooks/useResults";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  //   console.log(JSON.stringify(results, null, 2))
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
          navigation={navigation}
        />
        <ResultsList 
        results={filterResultsByPrice("$$")} 
        title="Bit Pricier" 
        navigation = {navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
          navigation = {navigation}
        />
        <ResultsList
          results={filterResultsByPrice("$$$$")}
          title="Win the Lottery?"
          navigation = {navigation}
        />
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({});

export default SearchScreen;
