import { View, Text,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Flatcards from './components/Flatcards';


const App2 = () => {
  return (

   <SafeAreaView>
      
         <ScrollView>
          <Flatcards></Flatcards>
         </ScrollView>
   </SafeAreaView>
  )
}

export default App2