import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

const PopularJobCard = ({ job }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
    <Image source={job.icon} style={styles.categoryIcon} />
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text style={styles.jobSalary}>{job.salary}</Text>
    </View>
    <View style={styles.cardBody}>
      <Text style={styles.jobLocation}>{job.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '95%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#F2F2F6',
    
  },

categoryIcon:{
  width:50,
  height:50,
  borderRadius:20
},


  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  jobSalary: {
    fontSize: 16,
    fontWeight: '100'
  },
  cardBody: {
    marginTop: 10,
  },
  jobLocation: {
    fontSize: 14,
    color: '#757575',
  },
});

export default PopularJobCard;