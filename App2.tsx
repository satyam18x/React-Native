import { View, Text,ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import Flatcards from './components/Flatcards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';


const App2 = () => {
  return (

   <SafeAreaView>
      
         <ScrollView>
          <Flatcards></Flatcards>
          <ElevatedCards></ElevatedCards>
          <FancyCards></FancyCards>
          <ActionCard></ActionCard>
          <ContactList></ContactList>
         </ScrollView>
   </SafeAreaView>
  )
}

export default App2