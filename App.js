import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class App extends React.Component {
  handleOnPress() {
    Alert.alert(
      'Hi Mag',
      'Who\s the best?',
      [
        {text: 'Amos', onPress: () => console.log('Amos is the best')},
        {text: 'Timothy', onPress: () => console.log('Timothy is the best')},
        {text: 'Mag & Nat', onPress: () => console.log('Both Mag & Nat are the best')}
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>HELLO WORLD FROM THE DESKTOP</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={this.handleOnPress}
          title="Say Hello Mag"
          color="#e32e3d"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
