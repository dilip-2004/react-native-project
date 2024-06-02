import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const CertificateComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Certified From India's Biggest Beauty Platform</Text>
      <View style={styles.certificateContainer}>
        <Image
          source={require('../assets/images/certificate.png')}
          style={styles.certificateImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffc34d',
    marginBottom: 20,
    textAlign: 'center',
  },
  certificateContainer: {
    width:  375,
    height: 416,
    gap: 14,
  },
  certificateImage: {
    width: 362,
    height: 252,
  },
});

export default CertificateComponent;
