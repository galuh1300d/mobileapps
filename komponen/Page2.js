import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = (styles = bootstrapStyleSheet.create());

function Page2({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('page3')}>
      <View style={[s.h100, s.bgWhite, s.alignItemsCenter]}>
        <Image
          style={{height: 250}}
          source={require('../assets/gambaranak.jpg')}
        />

        <Image style={[s.w100]} source={require('../assets/posyandu2.png')} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Page2;
