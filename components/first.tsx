import React from 'react';
import { StyleSheet, View, ImageBackground, Image, Text } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/imageone.png')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Image
            source={require('../assets/images/Airblack Beauty Club Logo.png')} 
            style={styles.logo}
          />
          <Text style={styles.text}>PRESENTS</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  logo: {
    width: 68.66,
    height: 28.44,
    gap: 0,
    marginVertical:20,
  },
  text: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    paddingBottom:10,
  },
});

export default App;
