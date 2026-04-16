import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingtext}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.cards , styles.cardOne]}>
            <Text>Blue</Text>

        </View>
        <View style={[styles.cards , styles.cardTwo]}>
            <Text>white</Text>

        </View>
        <View style={[styles.cards , styles.cardThree]}>
            <Text>Blue</Text>

        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    headingtext : {
        fontSize : 24,
        color : "white",
        fontWeight : "bold",
        paddingHorizontal : 10
    },
    container : {
          flex :1,
          flexDirection : "row",
          padding : 20,
          justifyContent : "space-between"
          
          
},
    cards :{
        width : 100,
        height : 100,
        borderRadius : 5,
        justifyContent : "center",
        alignItems : "center"
        
    },

    cardOne : {
        backgroundColor : "red"


    },
     cardTwo : {
        backgroundColor : "white"


    },
     cardThree : {
        backgroundColor : "green"


    }

})