import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [APx, setAPx] = useState(0);
  const [Px, setPx] = useState(0);
  const [Nx, setNx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalAPx, intervalPx, intervalNx;

    if (isRunning) {
      // Aumenta APx a cada 30 segundos
      intervalAPx = setInterval(() => {
        setAPx(prev => prev + 1);
      }, 30000); // 30 segundos

      // Aumenta Px a cada 45 segundos
      intervalPx = setInterval(() => {
        setPx(prev => prev + 1);
      }, 45000); // 45 segundos

      // Aumenta Nx a cada 90 segundos
      intervalNx = setInterval(() => {
        setNx(prev => prev + 1);
      }, 90000); // 90 segundos
    }

    // Limpeza dos intervalos ao desmontar o componente ou parar a contagem
    return () => {
      clearInterval(intervalAPx);
      clearInterval(intervalPx);
      clearInterval(intervalNx);
    };
  }, [isRunning]);

  const startCounting = () => {
    setIsRunning(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>AP {APx}</Text>
      <Text style={styles.counter}>P {Px}</Text>
      <Text style={styles.counter}>N {Nx}</Text>
      <Button title="Começar" onPress={startCounting} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 24,
    margin: 10,
  },
});

export default App;