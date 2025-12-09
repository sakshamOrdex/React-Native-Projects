// import { View, Text } from 'react-native'
// import React from 'react'
// import Counter from './Components/Counter'
// import NotesApp from './Components/NotesApp'

// const App = () => {
//   return (
//     // <Counter />
//     <NotesApp />
//   )
// }

// export default App

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;