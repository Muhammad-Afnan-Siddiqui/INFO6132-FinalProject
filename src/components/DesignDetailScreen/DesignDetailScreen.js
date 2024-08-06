import React from 'react';
import { ScrollView, Image, Text, TouchableOpacity } from 'react-native';

const DesignDetailScreen = ({ navigation, route }) => {
  // Get the title and image source from the navigation parameters
  const { title, imageSource } = route.params;

  return (
    <ScrollView>
      {/* Design Details */}
      <Image source={imageSource} style={{ width: '100%', height: 300, resizeMode: 'cover' }} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' }}>{title}</Text>
      {/* Add other design details */}
      
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10, alignSelf: 'center', backgroundColor: 'lightgrey', borderRadius: 5, marginTop: 20 }}>
        <Text style={{ fontSize: 16 }}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DesignDetailScreen;
