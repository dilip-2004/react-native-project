import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const WhyJoinAirblack = () => {
  return (
    <ImageBackground
      source={require('../assets/images/imagetwo.png')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Why Should You Join Airblack?</Text>
        
        <View style={styles.iconRow}>
          <View style={styles.iconContainer}>
            <FontAwesome name="video-camera" size={30} color="teal" />
            <Text style={styles.iconText}>Do-it-together, live on zoom</Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name="star" size={30} color="teal" />
            <Text style={styles.iconText}>4.8/5 Rated Classes</Text>
          </View>
          <View style={styles.iconContainer}>
            <FontAwesome name="users" size={30} color="teal" />
            <Text style={styles.iconText}>35000+ Members</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: 'teal',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WhyJoinAirblack;
