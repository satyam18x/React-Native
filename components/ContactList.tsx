import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} 
              scrollEnabled = {true}>
               {contacts.map(({uid , name , status , imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                  <Image
                  source={{
                    uri : imageUrl
                  }}
                  style={styles.userImage}
                  />
                </View>
               ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText : {
    color : "white",
    fontWeight : "bold",
    fontSize : 24,
    paddingLeft : 10
  },
  container : {},
  userCard : {},
  userImage : {}



})