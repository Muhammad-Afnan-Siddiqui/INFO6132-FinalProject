import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Button, Platform, Alert } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../database/config';

import DatePicker from '@react-native-community/datetimepicker';

const AppointmentBookingScreen = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [serviceType, setServiceType] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  

  async function handleAppointmentBooking(){
    if (!date || !time || !serviceType || !contactInfo) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    console.log('Saving...');
    const dbCollection = collection(db, 'Booking');
    const appointmentTime = time.toLocaleTimeString('en-US', { hour12: false });
    const appointmentDate = date.toLocaleDateString();
    await addDoc(dbCollection, {
      date: appointmentDate,
      time: appointmentTime,
      serviceType: serviceType,
      contactInfo: contactInfo,
    })
      .then(() => {
        Alert.alert('Success', 'Appointment booked successfully');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <ScrollView>
      
      {/* Date Picker */}
      {Platform.OS === 'ios' ? (
        <DatePicker
          testID="datePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="spinner"
          onChange={(event, selectedDate) => {
            setShowDatePicker(Platform.OS === 'ios');
            setDate(selectedDate || date);
          }}
        />
      ) : (
        showDatePicker && (
          <DatePicker
            testID="datePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(Platform.OS === 'ios');
              setDate(selectedDate || date);
            }}
          />
        )
      )}
      {/* Time Picker */}
      {Platform.OS === 'ios' ? (
        <DatePicker
          testID="timePicker"
          value={time}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={(event, selectedTime) => {
            setShowTimePicker(Platform.OS === 'ios');
            setTime(selectedTime || time);
          }}
        />
      ) : (
        showTimePicker && (
          <DatePicker
            testID="timePicker"
            value={time}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedTime) => {
              setShowTimePicker(Platform.OS === 'ios');
              setTime(selectedTime || time);
            }}
          />
        )
      )}
      {/* Service Type */}
      <TextInput
        placeholder="Service Type"
        value={serviceType}
        onChangeText={setServiceType}
        style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 5, padding: 10, marginBottom: 10 }}
      />
      {/* Contact Information */}
      <TextInput
        placeholder="Contact Information"
        value={contactInfo}
        onChangeText={setContactInfo}
        style={{ borderWidth: 1, borderColor: 'grey', borderRadius: 5, padding: 10, marginBottom: 10 }}
      />
      {/* Submit Button */}
      <Button title="Book Appointment" onPress={handleAppointmentBooking} />
    </ScrollView>
  );
};

export default AppointmentBookingScreen;
