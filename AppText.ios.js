import React from 'react';
import {Text,StyleSheet } from 'react-native'



 export default function Apptext({children}) {
    return (
      <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:100,
        fontFamily:'Avenir',

    }
})
