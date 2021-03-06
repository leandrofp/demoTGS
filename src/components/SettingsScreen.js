import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, FlatList, Modal, TouchableHighlight , Dimensions } from 'react-native';
import { List, ListItem, Card, Icon } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
//import OneSignal from 'react-native-onesignal';
import homeScreenActions from '../actions/postHomeScreen_actions';
import { connect } from 'react-redux';

class SettingsScreen extends Component {
    constructor() {
      super();
      this.state = {
        list1: [
          {
            title: 'German Gonzalez'
          },
          {
            title: 'Cambiar contraseña'
          },
          {
            title: 'Notificaciones'
          }
        ]
      };
    }
  
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../images/profilePicture.png')}
              style={{
                width: 200,
                height: 200,
                margin: 5,
                borderRadius: 360
              }}
            />
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <FlatList
              data={this.state.list1}
              renderItem={({ item, index }) => (
                <ListItem title={item.title} style={{ borderColor: '#000' }} chevron chevronColor="#333" bottomDivider />
              )}
            />
  
            <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.popToTop()}>
              <Text style={styles.buttonText}>CERRAR SESION</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      with: Dimensions.width,
      height: Dimensions.height
    },
    logoContainer: {
      alignItems: 'center',
      //marginBottom: 10,
      //marginTop: '20px',
      flex: 1,
      justifyContent: 'center'
    },
    buttonContainer: {
      backgroundColor: 'rgb(17,48,81)',
      paddingVertical: 15,
      margin: 30,
      borderRadius: 5,
      elevation: 2 // Android
    },
    buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700'
    },
  
};


const mapStateToProps = state => {
    const { homeScreen } = state;
        return {
            homeScreen
        };
};
  
/*
  const mapDispatchToProps = {
      closeConfirmModal,
      closeModalOk,
      openModalOk,
  };
*/

export default connect(mapStateToProps)(SettingsScreen);
