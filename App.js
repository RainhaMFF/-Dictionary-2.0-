import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import linha from './escolheumedeixa';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header as HeaderRNE, HeaderProps, Icon } from '@rneui/themed';
import {Audio} from 'expo-av'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      plsprslb: [],
      ufo: [],
    };
  }
  componentDidUpdate() {
    console.log(this.state.ufo);
  }
JINGRO_BELL=async(indexh)=>{
  await Audio.Sound.createAsync(
    {uri: "https://s3-whitehatjrcontent.whjr.online/phones/"+indexh+".mp3"},
    {shouldPlay: true}
  )}
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaProvider>
          <HeaderRNE
            leftComponent={{
              icon: 'menu',
              color: '#fff',
            }}
            rightComponent={
              <View style={styles.headerRight}>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                  <Icon type="antdesign" name="rocket1" color="white" />
                </TouchableOpacity>
              </View>
            }
            centerComponent={{
              text: '꧁•⊹٭𝙳𝚒𝚌𝚝𝚒𝚘𝚗𝚊𝚛𝚢 𝟸.𝟶٭⊹•꧂',
              style: styles.heading,
            }}
          />
          <Image source={require('./monkey.png')} />
          <TextInput
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
          />
          <TouchableOpacity
            onPress={() => {
              linha[this.state.text]?(
              this.setState({
                plsprslb: linha[this.state.text].chunks,
              }),
              this.setState({
                ufo: linha[this.state.text].phones,
              })):
              alert("Opa! Parece que o sistema não conseguiu enontrar essa palavra. Quer experimentar outra? || OoF! / Oh! Looks like the system couldn't find that word. You wanna try another one?")
            }}>
            <Text>ENTER</Text>
          </TouchableOpacity>

          <View>
            {this.state.plsprslb.map((syllables, indexh) => {
              return (
                <TouchableOpacity onPress={()=>{this.JINGRO_BELL(this.state.ufo[indexh])}}>
                  <Text>{syllables}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </SafeAreaProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  heading: { fontfamily: 'Comic Sans', color: 'white' },
});
