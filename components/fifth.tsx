import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Fifth = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/last.png')}
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <Text style={styles.headline}>Join our growing community of 35,000+ alumni</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Apply Now</Text>
          </TouchableOpacity>
          <View style={styles.socialIcons}>
            <Icon name="instagram" size={40} color="pink" style={styles.icon} />
            <Icon name="facebook" size={40} color="#008ae6" style={styles.icon} />
            <Icon name="linkedin" size={40} color="#66c2ff" style={styles.icon} />
            <Icon name="twitter" size={40} color="#0099ff" style={styles.icon} />
          </View>
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
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 25,
  },
  headline: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: 'teal',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default Fifth;
