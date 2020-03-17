import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Text,
  Image,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = (styles = bootstrapStyleSheet.create());

function Page1({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('page2')}>
      <View style={[s.h100, s.alignItemsCenter, {backgroundColor: '#3871C2'}]}>
        <Text
          style={[
            s.fontWeightBold,
            s.textWhite,
            {fontSize: 60, marginTop: 230},
          ]}>
          POSYANDU
        </Text>
        <Image
          style={[{marginTop: 100}]}
          source={require('../assets/posyandu1.png')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Page1;
