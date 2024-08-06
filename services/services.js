import { db } from '../database/config';
import firebase from 'firebase/app';
import 'firebase/storage';


// Function to upload image to Firebase Storage
const uploadImage = async (uri) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`images/${filename}`);
    await imageRef.put(blob);
    console.log('Image uploaded successfully');
  } catch (error) {
    console.error('Error uploading image:', error.message);
  }
};

export { uploadImage };
