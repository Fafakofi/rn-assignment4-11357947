import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.username}>JEDIDIAH AGBEDAM</Text>
      <Text style={styles.welcomeM}>Welcome back</Text>
      <Text style={styles.welcome2}>Let's log in, apply to jobs</Text>

      <View style={styles.inputs}>
          <TextInput style={styles.userInput} placeholder='Name'/>
          <TextInput style={styles.userInput} placeholder='email'/>
        
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

  username:{
    fontWeight: 'bold',
    color:'blue',
    marginBottom: 10,
    fontSize: 18
  },

  welcomeM: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 22
  },

  welcome2: {
    fontWeight: '100'
  },

  inputs: {
    marginTop: 40
  },

  userInput: {
    width:'80%',
    padding: 10,
    borderRadius:15,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 14
  }
});
