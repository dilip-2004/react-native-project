import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Easing } from 'react-native';
import WhyJoinAirblack from '../components/Third.tsx'
import CertificateComponent from '../components/fourth.tsx'
import Fifth from '../components/fifth.tsx'
import MakeupCourseForm from '../components/secont.tsx'
import App from '../components/first.tsx'

const ImageBannerWithText = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <App />

      <View>
        <MakeupCourseForm />
      </View>

      <View>
        <WhyJoinAirblack />
      </View>

      <View>
        <CertificateComponent />
      </View>

      <View>
        <Fifth />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f4f4f4',
  }
});

export default ImageBannerWithText;
