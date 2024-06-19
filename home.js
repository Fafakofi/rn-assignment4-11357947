import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.userProfile}>

        <View NameEmail>
            <Text >
              JEDIDIAH AGBEDAM
            </Text>
            <Text>
              Jagb6969@gmail.com
            </Text>
        </View>

        <View style={styles.profileImg}>
            <Image source={require('./assets/userProfile.jpg')}/>
        </View>
      </View>


      


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 90,
    marginLeft:20,
  },

  
});
 
