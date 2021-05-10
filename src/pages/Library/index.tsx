import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Libray: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bibliotecas</Text>
    </View>
  );
};

export default Libray;
