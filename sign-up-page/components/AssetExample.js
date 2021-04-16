import * as React from 'react';
import { Text, View,  Image } from 'react-native';

export default class AssetExample extends React.Component {
  render() {
    return (
      <View >
        <Text >
          Local files and assets can be imported by dragging and dropping them into the editor
        </Text>
        <Image source={require('../assets/snack-icon.png')} />
      </View>
    );
  }
}

   