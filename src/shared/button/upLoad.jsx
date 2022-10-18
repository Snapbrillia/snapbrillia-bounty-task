//import React from 'react';
//import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import UpLoad from '../../assets/icon/snapbrillia_upload_icon.svg';
import '../css/buttonStyles.css';

const loginScreenButton = {
  marginRight: 40,
  marginLeft: 40,
  marginTop: 10,
  paddingTop: 10,
  paddingBottom: 10,
  backgroundColor: '#1E6738',
  borderRadius: 10,
  borderWidth: 1,
  borderColor: '#fff',
};

const loginText = {
  color: '#fff',
  textAlign: 'center',
  paddingLeft: 10,
  paddingRight: 10,
};

export default function UploadButton({ onClick }) {
  return (
    <button
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '0.5rem',
        backgroundColor: '#00aeef',
        borderColor: 'red',
      }}
      className="btn-secondary"
    >
      <img src={UpLoad} alt="upload-icon" />

      <span
        style={{
          paddingLeft: '2rem',
          fontWeight: '500',
          fontSize: '1.5rem',
          color: '#121212',
        }}
      >
        upLoad
      </span>
    </button>
  );
}

{
  /*export default class App extends React.Component {
state={
  name: "Mamadou"
};

myPress = () => {
  this.setState({
    name: "Coulibaly"
  });
};

  render() {
    return (
      <View style={styles.container}>

          <Button>       
          title={this.state.name}
          color="red"
          onPress={this.myPress}
          </Button>   

      </View>

    );
  }
}
*/
}
