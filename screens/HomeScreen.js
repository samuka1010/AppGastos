import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import {Card, Avatar} from 'react-native-paper';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

// <Progress.Bar progress={0.3} width={200} color='blue' />
export default function HomeScreen() {

  return (
    <View style={styles.container}>
        <View style={{maxHeight:70, backgroundColor: '#8ee05a', paddingTop: 10, flex: 1, flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
            <View>
                <Text style={{textAlign:'center', fontSize: 25, fontFamily: 'monospace'}}>Julho</Text>
            
                <ProgressBarAnimated
                  width={200}
                  borderColor={'#000000'}
                  value={40}
                  onComplete={() => {
                    Alert.alert('Hey!', 'onComplete event fired!');
                  }}     
                />
            </View>
        </View>
        
        <View style={{paddingTop: 15 }}>
            <View style={styles.Card}>
                <Card elevation={5}>
                    <Card.Title 
                        title="StarBucks" 
                        fontFamily="monospace"
                        subtitle="12 de Julho - 10:32" 
                        right={(props) => <Text style={{padding: 20, fontSize: 25, fontFamily: 'monospace', color: '#f24730'}}>-10.00</Text>}
                        left={(props) => <Avatar.Icon {...props} icon="mood" />}
                    />
                </Card>
            </View>

            <View style={styles.Card}>
                <Card elevation={5}>
                    <Card.Title 
                        title="Papelaria" 
                        subtitle="11 de Julho - 14:55" 
                        right={(props) => <Text style={{padding: 20, fontSize: 25, fontFamily: 'monospace', color: '#f24730'}}>-12.50</Text>}
                        left={(props) => <Avatar.Icon {...props} icon="book" />}   
                    />
                </Card>
            </View>
        </View>

        <View style={{width: '100%', flex:1, flexDirection:'row', height:70, backgroundColor: '#8ee05a', paddingTop: 10, position:'absolute',bottom:0}}>
            <Text style={{flex:1, textAlign:'center', fontSize: 25, fontFamily: 'monospace', paddingTop:13}}>Saldo: -22.50</Text>     
        </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  Card: {
    padding: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  
});
