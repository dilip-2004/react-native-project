import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MakeupCourseForm = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Professional Online Makeup Course</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.certification}>
          <Text style={styles.certificationText}>Certification Programme</Text>
        </View>
        <Text style={styles.rating}>⭐ Rated 4.85/5</Text>
      </View>
      <Text style={styles.bullet}>✅ India's No.1 Online Makeup Course</Text>
      <Text style={styles.bullet}>✅ Learn by LIVE Do-it-together Classes</Text>
      <Text style={styles.bullet}>✅ Unlimited Practice Session to master skills</Text>
      
      <View style={styles.form}>
        <Text style={styles.formTitle}>FILL THE FORM BELOW TO ENQUIRE</Text>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>*Enter your name</Text>
          <TextInput
            style={styles.input}
            placeholder="name"
            placeholderTextColor="#aaa"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>*Enter your WhatsApp Number</Text>
          <TextInput
            style={styles.input}
            placeholder="whatsapp number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>*Select your profession</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            placeholder={{ label: "Choose the most relevant option", value: null }}
            onValueChange={(value) => {}}
            items={[
              { label: 'CALISTNEINCS', value: 'CALISTNEINCS' },
            ]}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>*Select your goal</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            placeholder={{ label: "Choose the most relevant option", value: null }}
            onValueChange={(value) => {}}
            items={[
              { label: 'IT JOB', value: 'IT JOB' },
              { label: 'CALISTHENICS', value: 'CALISTHENICS' },
            ]}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>*Select your city</Text>
          <RNPickerSelect
            style={pickerSelectStyles}
            placeholder={{ label: "Choose the most relevant option", value: null }}
            onValueChange={(value) => {}}
            items={[
              { label: 'CUDDALORE', value: 'CUDDALORE' },
              { label: 'COIMBATORE', value: 'COIMBATORE' },
            ]}
          />
        </View>
        
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  certification: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  certificationText: {
    color: '#000',
    fontSize: 14,
  },
  rating: {
    color: '#ff0',
    fontSize: 14,
  },
  bullet: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 10,
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  formTitle: {
    backgroundColor: 'teal',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: '#000',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    color: '#000',
  },
  submitButton: {
    backgroundColor: 'teal',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
  inputAndroid: {
    width: '100%',
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
});


export default MakeupCourseForm;
