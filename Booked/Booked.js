import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../database/config';
const Booked = () => {
    const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
      
      const fetchBookings = async () => {
        try {
            const data =[]
            const dbCollection = collection(db, 'Booking');
            await getDocs(dbCollection)
                .then((querySnapshot) => {
                    // console.log(doc.id, doc.data());
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, doc.data());
                        const task = {
                            ...doc.data(),
                            id: doc.id
                        }
                        data.push(task);
                    });
                    console.log('Data ', data)
                })
                .catch((error) => {
                    console.log('Error:', error);
                });
                
          setBookings(data);
        } catch (error) {
          console.error('Error fetching bookings:', error);
        }
      };
      fetchBookings();
    }, []);
  
    return (
      <ScrollView>
        
        {bookings.map((booking, index) => (
          <View key={index} style={styles.bookingContainer}>
            <Text style={styles.bookingTitle}>Date:</Text>
            <Text style={styles.bookingText}>{booking.date}</Text>
            <Text style={styles.bookingTitle}>Time:</Text>
            <Text style={styles.bookingText}>{booking.time}</Text>
            <Text style={styles.bookingTitle}>Service Type:</Text>
            <Text style={styles.bookingText}>{booking.serviceType}</Text>
            <Text style={styles.bookingTitle}>Contact Information:</Text>
            <Text style={styles.bookingText}>{booking.contactInfo}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };
  
  export default Booked;
  
  const styles = StyleSheet.create({
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
      textAlign: 'center',
    },
    bookingContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      padding: 20,
      marginBottom: 20,
    },
    bookingTitle: {
      fontWeight: 'bold',
      marginBottom: 5,
    },
    bookingText: {
      marginBottom: 10,
    },
  });
  