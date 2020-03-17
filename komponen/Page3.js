import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const s = (styles = bootstrapStyleSheet.create());

const tombol = [
  {tb1: 'Apa itu POSYANDU?', tb2: 'Kegiatan POSYANDU'},
  {tb1: 'Manfaat POSYANDU', tb2: 'Penyelenggaraan POSYANDU'},
  {tb1: 'Imunisasi', tb2: 'Kesehatan Ibu dan Anak'},
  {tb1: 'Keluarga Berencana', tb2: 'Peningkatan Gizi'},
];

function Page3() {
  return (
    <View style={[s.h100, s.bgWhite, s.alignItemsCenter]}>
      <ImageBackground
        source={require('../assets/hariposyandu.png')}
        style={[
          {width: '100%', height: '35%'},
          s.justifyContentEnd,
          s.alignItemsCenter,
          s.mb3,
        ]}>
        <Image source={require('../assets/tombol3.png')} />
      </ImageBackground>
      <ScrollView contentContainerStyle={[s.alignItemsCenter]}>
        {tombol.map(({tb1, tb2}) => {
          return (
            <View key={tb1} style={[s.flexRow, s.justifyContentCenter]}>
              <TouchableOpacity
                style={[
                  s.justifyContentCenter,
                  s.alignItemsCenter,
                  s.mx1,
                  s.my1,
                  {
                    backgroundColor: '#68BCE1',
                    borderRadius: 10,
                    width: 190,
                    height: 100,
                  },
                ]}>
                <Text style={[s.textWhite, {fontSize: 18}]}>{tb1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  s.justifyContentCenter,
                  s.alignItemsCenter,
                  s.mx1,
                  s.my1,
                  {
                    backgroundColor: '#68BCE1',
                    borderRadius: 10,
                    width: 190,
                    height: 100,
                  },
                ]}>
                <Text style={[s.textWhite, s.textCenter, {fontSize: 18}]}>
                  {tb2}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <TouchableOpacity
          style={[
            s.justifyContentCenter,
            s.alignItemsCenter,
            s.mx1,
            s.my1,
            {
              backgroundColor: '#68BCE1',
              borderRadius: 10,
              width: 190,
              height: 100,
            },
          ]}>
          <Text style={[s.textWhite, s.textCenter, {fontSize: 18}]}>
            Penanggulangan Diare
          </Text>
        </TouchableOpacity>
        <View style={[s.my5, s.py5]}></View>
      </ScrollView>
    </View>
  );
}

export default Page3;
