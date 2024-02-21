import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Homepage = () => {
  return (
    
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.frame1}>
        {/* <Image

          source={require('../')}

          style={styles.imagesize}
        /> */}
      </View>
      <View style={styles.frame2}>
        {/* <Image

          source={require('../Assets/img2.jpg')}

          style={styles.imagesize}
        /> */}
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  frame1: {
    marginTop: 30,
    width: 320,
    height: 180,
    padding: 15,
    marginBottom: 30,
    marginLeft: 40,
  },
  frame2: {
    marginTop:100,
    width: 320,
    height: 180,
    padding: 15,
    marginBottom: 30,
    marginLeft: 40,
  },
  imagesize: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
});

export default Homepage;