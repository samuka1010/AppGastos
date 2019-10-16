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
import {Card, Chip, Avatar} from 'react-native-paper';
import { MonoText } from '../components/StyledText';
import * as Progress from 'react-native-progress';

// <Progress.Bar progress={0.3} width={200} color='blue' />
export default function HomeScreen() {

  return (
    <View style={styles.container}>
        <View style={{height:70}}>
            <Text style={{textAlign:'center'}}>Julho</Text>
        </View>

        <View style={styles.Card}>
            <Card elevation={5}>
                <Card.Title 
                    title="StarBucks" 
                    subtitle="12 de Julho - 10:32" 
                    right={(props) => <Text>10.00</Text>}
                    left={(props) => <Avatar.Icon {...props} icon="mood" />}
                />
            </Card>
        </View>

        <View style={styles.Card}>
            <Card elevation={5}>
                <Card.Title 
                    title="Papelaria" 
                    subtitle="11 de Julho - 14:55" 
                    right={(props) => <Text>10.00</Text>}
                    left={(props) => <Avatar.Icon {...props} icon="book" />}   
                />
            </Card>
        </View>

    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
   // flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
  },
  Card: {
    padding: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  
});
