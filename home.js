import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import jobshero from './jobshero';

export default function Login() {
  const featuredJobs = [
    { id: 1, icon: require('./assets/facebook.jpg'), title: 'Software Engineer', sub: "Facebook", salary: '$120,000', location: 'San Francisco, CA', backgroundColor: 'royalblue' },
    { id: 2, icon: require('./assets/facebook.jpg'), title: 'Product Manager', salary: '$110,000', location: 'New York, NY', backgroundColor: 'navy' },
    { id: 3, icon: require('./assets/facebook.jpg'), title: 'UX Designer', salary: '$90,000', location: 'Austin, TX', backgroundColor: 'indigo' },
    { id: 4, icon: require('./assets/facebook.jpg'), title: 'Data Scientist', salary: '$130,000', location: 'Boston, MA', backgroundColor: '#9C27B0' },
    { id: 5, icon: require('./assets/facebook.jpg'), title: 'DevOps Engineer', salary: '$115,000', location: 'Seattle, WA', backgroundColor: '#00BCD4' },
    { id: 6, icon: require('./assets/facebook.jpg'), title: 'Backend Developer', salary: '$105,000', location: 'Chicago, IL', backgroundColor: '#8BC34A' },
    { id: 7, icon: require('./assets/facebook.jpg'), title: 'Frontend Developer', salary: '$100,000', location: 'Los Angeles, CA', backgroundColor: '#FFC107' },
    { id: 8, icon: require('./assets/facebook.jpg'), title: 'Mobile Developer', salary: '$95,000', location: 'Denver, CO', backgroundColor: '#FF9800' },
  ];
  return (

    <View style={styles.container1}>
      <ScrollView>
        <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.userProfile}>

          <View style={styles.nameEmail}>
              <Text style={styles.username} >
                JEDIDIAH AGBEDAM
              </Text>
              <Text  style={styles.usergmail}>
                Jagb6969@gmail.com
              </Text>
          </View>

            <View  style={styles.profilePic} >
                <Image source={require('./assets/userProfile.jpg')} style={styles.profileImg}/>
            </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
            <Image source={require('./assets/search.png')} style={styles.searchIcon} />
        </View>

        <View style={styles.jobs}>
          <Text style={styles.featured}> Featured jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>See more</Text>
          </TouchableOpacity>
        </View>
 
      </View>
      <FlatList 
      horizontal={true}
      
      />
      </ScrollView>
    </View>
  
  );
}

const styles = StyleSheet.create({

  container1: {
    flex: 1,
    backgroundColor: 'white'
  },


  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 90,
    marginLeft:20
  },

  userProfile: {
    display: 'flex',
    flexDirection: 'row',
  },

  nameEmail: {

  },

  username: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 20
  },

  usergmail:{
    fontWeight: '100'
  },

  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    
  },

  profilePic: {
    // justifyContent: 'flex-end'
    marginLeft: 75
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
    marginTop: 40,
    
    
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0,
    paddingHorizontal: 10,
    borderRadius:10,
    backgroundColor:"#F2F2F6",
    marginLeft:0,
    width:90,
    paddingLeft:50,
  },

  searchIcon: {
    position: 'absolute',
     left: 20,
     width: 20,
     height: 20,
   },

   jobs: {
    displpay: 'flex',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between'
   },

   featured: {
    fontSize: 18,
    fontWeight: 'bold'
   },

   seeMore: { 
    fontWeight: '100'
   }




  
});
 
