import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableHighlight} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.username}>JEDIDIAH AGBEDAM</Text>
      <Text style={styles.welcomeM}>Welcome back 👋</Text>
      <Text style={styles.welcome2}>Let's log in, apply to jobs</Text>

      <View style={styles.inputs}>
          <TextInput style={styles.userInput} placeholder='Name'/>
          <TextInput style={styles.userInput} placeholder='email'/>
        
      </View>


      <View style={styles.button}>
        <TouchableHighlight
        style={styles.touch}
        activeOpacity={0.6}
        >
              <Text style={styles.buttonText}>
                Log in
              </Text>
        </TouchableHighlight>
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
    color:'#87CEEB',
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
  },

  button:{
    width: '80%',
    marginTop: 10,
    
  },
  touch: {
    backgroundColor: '#87CEEB',
    padding: 20,
    borderRadius: 15
  },

  buttonText: {
    color: 'white',
    marginLeft: "40%",
    fontSize:16
  }
});
