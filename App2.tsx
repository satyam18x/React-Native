import { View, Text,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/ElevatedCards';


const App2 = () => {
  return (

   <SafeAreaView>
      
         <ScrollView>
          <Flatcards></Flatcards>
          <ElevatedCards></ElevatedCards>
         </ScrollView>
   </SafeAreaView>
  )
}

export default App2