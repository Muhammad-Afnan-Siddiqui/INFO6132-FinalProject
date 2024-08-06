import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
      setModalVisible(false);
      //uploadImage(result.uri);
    }
  };


  // Array of image objects with source and title
  const images = [
    { source: require('../../../img/m1.jpeg'), title: 'Design 1' },
    { source: require('../../../img/m2.jpg'), title: 'Design 2' },
    { source: require('../../../img/i0.jpeg'), title: 'Design 3' },
    { source: require('../../../img/i1.jpeg'), title: 'Design 4' },
    { source: require('../../../img/i2.jpg'), title: 'Design 5' },
    { source: require('../../../img/i3.webp'), title: 'Design 6' },
  ];

  return (
    <>
      <ScrollView>
        {/* Header */}
        {/* <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 20, textAlign: 'center' }}>Wrap Shop</Text> */}
        {/* Wrap Gallery */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginTop:20 }}>
          {/* Map over the images array and render each image */}
          {images.map((image, index) => (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('DesignDetail', { title: image.title, imageSource: image.source })}>
              <Image source={image.source} style={{ width: 150, height: 150, borderRadius: 10, marginBottom: 10 }} />
            </TouchableOpacity>
          ))}
        </View>
        {/* Add other sections like categories, search bar, etc. */}
      </ScrollView>
      {/* <Button title="Add" onPress={() => setModalVisible(true)} /> */}

      {/* Modal for uploading image */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={pickImage}>
              <Text style={styles.modalText}>Upload Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.modalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
