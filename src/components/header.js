import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialIcons} from '';

function CustomHeader(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textDesign}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(109, 237, 241 ,0.4)',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDesign: {
    fontFamily: 'Papyrus',
    fontSize: 20,
    alignSelf: 'center',
  },
});

export default CustomHeader;
