import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#00B38660" />
    <View style={{ flex: 1, backgroundColor: '#00B38660' }} />
  </>
);

export default App;
