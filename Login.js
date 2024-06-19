import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

export default function Login({ navigation }) {


  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.username}>Jobfind</Text>
      <Text style={styles.welcomeM}>Welcome back 👋</Text>
      <Text style={styles.welcome2}>Let's log in, apply to jobs</Text>

      <View style={styles.inputs}>
          <TextInput style={styles.userInput} placeholder='Name'/>
          <TextInput style={styles.userInput} placeholder='email'/>
        
      </View>


      <View style={styles.button}>
        <TouchableOpacity
        style={styles.touch}
        activeOpacity={0.6}
        onPress={handleLogin}
        >

              <Text style={styles.buttonText}>
                Log in
              </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.choice}>
        <View style={styles.continue}></View>
        <Text style={styles.continueText}>   Or continue with  </Text>
        <View style={styles.continue}></View>
      </View>

      <View style={styles.apps}>
        <Image source={require('./assets/apple.jpg')} style={styles.icon}/>
        <Image source={require('./assets/google.png')} style={styles.icon}/>
        <Image source={require('./assets/facebook.jpg')} style={styles.icon}/>
        
      </View>


      <View style={styles.newACcount}>
        <Text style={styles.noAccount}>
          Haven't an account? 
        </Text>
        <Text style={styles.register}>  Register</Text>
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
    width:'90%',
    padding: 10,
    borderRadius:15,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 14
  },

  button:{
    width: '90%',
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
  },


  choice: {
    marginTop: 70,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    marginBottom: 30
  },

  continue: {
      height: 1,
      width: '35%',
      backgroundColor: '#D3D3D3',
      marginTop: 10
  },

  continueText: {
    fontWeight: '100',
    alignItems: 'center',
    
  },

 apps: {
  display: 'flex',
  width: '70%',
  flexDirection:'row',
  justifyContent:'space-evenly',
  marginLeft: 30,
  marginTop: 20
 },

  icon: {
    width: 50, 
    height: 50, 
    marginHorizontal: 10, 
  },
  newACcount:{
     display: 'flex',
     flexDirection:'row',
     marginTop: 60,
    justifyContent: 'center'
  },

  noAccount: {
    fontWeight: '100'
  },

  register: {
    color:'#87CEEB'
  }
});
 