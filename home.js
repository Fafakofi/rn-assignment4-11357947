import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, FlatList} from 'react-native';
import FeaturedJobCard from './FeaturedJobCard';
import PopularJobCard from './PopularJobCard';


export default function Home() {
  const featuredJobs = [
    { id: 1, icon: require('./assets/fb.png'), title: 'Software Engineer', sub: "Facebook", salary: '$120,000', location: 'San Francisco, CA', backgroundColor: 'royalblue' },
    { id: 2, icon: require('./assets/google.png'), title: 'Product Manager', salary: '$110,000', location: 'New York, NY', backgroundColor: 'navy' },
    { id: 3, icon: require('./assets/amazon.png'), title: 'UX Designer', salary: '$90,000', location: 'Austin, TX', backgroundColor: 'indigo' },
    { id: 4, icon: require('./assets/com.jpeg'), title: 'Data Scientist', salary: '$130,000', location: 'Boston, MA', backgroundColor: '#9C27B0' },
    { id: 5, icon: require('./assets/com.jpeg'), title: 'DevOps Engineer', salary: '$115,000', location: 'Seattle, WA', backgroundColor: '#00BCD4' },
    { id: 6, icon: require('./assets/com.jpeg'), title: 'Backend Developer', salary: '$105,000', location: 'Chicago, IL', backgroundColor: '#8BC34A' },
    { id: 7, icon: require('./assets/com.jpeg'), title: 'Frontend Developer', salary: '$100,000', location: 'Los Angeles, CA', backgroundColor: '#FFC107' },
    { id: 8, icon: require('./assets/com.jpeg'), title: 'Mobile Developer', salary: '$95,000', location: 'Denver, CO', backgroundColor: '#FF9800' },
  ];

  const popularJobs = [
    { id: 9,icon: require('./assets/burger1.png'),  title: 'Burger king chef', salary: '10,00cedis', location: 'Kasoa' },
    { id: 10,icon: require('./assets/doctor.jpg'), title: 'Doctor', salary: '1M cedis/yr', location: 'UGMC' },
    { id: 11,icon: require('./assets/electrician.jpg'), title: 'electrician', salary: '0.7M cedis/yr', location: 'Accra' },
    { id: 12,icon: require('./assets/accountant.jpg'), title: 'accountant', salary: '$90,000', location: 'Bosnia' },
    { id: 13,icon: require('./assets/webdev.jpg'), title: 'web developer', salary: '$800,000', location: 'from home' },
    { id: 14,icon: require('./assets/teacher.jpg'), title: 'teacher', salary: '$75,000', location: 'Kumasi' },
    { id: 15,icon: require('./assets/accountant.jpg'), title: 'Recruiter', salary: '$65,000', location: 'Phoenix, AZ' },
    { id: 16,icon: require('./assets/accountant.jpg'), title: 'Office Manager', salary: '$60,000', location: 'Philadelphia, PA' },
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

        <FlatList
          horizontal
          data={featuredJobs}
          renderItem={({ item }) => <FeaturedJobCard job={item} backgroundColor={item.backgroundColor} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
        />

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
        </View>

        <FlatList
          data={popularJobs}
          renderItem={({ item }) => <PopularJobCard job={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.verticalList}
          showsVerticalScrollIndicator={false}
        />

 
      </View>

     
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
   },

   
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'gray',
  },
  horizontalList: {
    marginBottom: 20,
  },
  verticalList: {
    flex: 1,
  },




  
});
 
