import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Video extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              source={require('../assets/awi.jpg')}
              style={styles.iconImage}
            />
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}> Anime World India App</Text>
          </View>
        </View>
          <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
        
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
         <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Photo')}>
          <View
            style={{
              marginTop: 60,
              width: 300,
              height: 200,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../main2.jpg')}
              style={{
                paddingLeft: 200,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            
          </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#15193c',
    marginTop: StatusBar.currentHeight || 0,
  },

  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    marginLeft: -20,
    color: 'white',
    fontSize: RFValue(32),
    fontFamily: 'Bubblegum-Sans',
  },
});
