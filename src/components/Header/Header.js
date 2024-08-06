import { Entypo, Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
export default function Header(props) {
    return (
        <View style={styles.container}>
            <Entypo name="list" size={30} color="darkslategray"/>
            <Text style= {styles.headTitle}>Wrap Shop</Text>
            <TouchableOpacity onPress={props.logOut}>
                <Ionicons name="log-out" size={24}/>
            </TouchableOpacity>
        </View>
    );
}