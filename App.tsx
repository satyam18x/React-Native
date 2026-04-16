import React from "react";
import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function App(){
  const isDarkMode = useColorScheme() == "dark";

  return (

    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello bhaiiii !!!!!
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    
  flex : 1,
  alignItems : "center",
  justifyContent : "center"

  },
  whiteText :{
      color : "#51e927",
  },
  darkText :{
        color : "black"
  }
})

export default App;
