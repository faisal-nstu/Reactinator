import React from 'react';
import { View, AppRegistry} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const Pressed=()=>{
  alert('dgdg');
}
const App = () => (
  <View>
    <Header headerText={'Reactinator!'}/>
    <AlbumList onPress={this.Pressed}/>
  </View>
);

AppRegistry.registerComponent('Reactinator', () => App);