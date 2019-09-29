import React from 'react';
import { StatusBar } from 'react-native';

import NavigationContainer from './navigation/Navigator';
import GlobalState from './context/GlobalState';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor="#021" barStyle="light-content" />
      <GlobalState>
        <NavigationContainer />
      </GlobalState>
    </>
  );
};


export default App;
