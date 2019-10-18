import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card, Avatar, FAB} from 'react-native-paper';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

// <Progress.Bar progress={0.3} width={200} color='blue' />
export default function HomeScreen() {

  return (
    <View style={styles.container}>
        <View style={{...styles.header, maxHeight:70}}>
            <View>
                <Text style={{textAlign:'center', fontSize: 25, fontFamily: 'monospace'}}>Julho</Text>
            
                <ProgressBarAnimated
                  width={200}
                  borderColor={'#000000'}
                  value={22}
                  onComplete={() => {
                    Alert.alert('Hey!', 'onComplete event fired!');
                  }}     
                />

                <Text style={{textAlign:'center', fontSize: 12, fontFamily: 'monospace'}}>22% (22.5 gastos de 100)</Text>
            </View>
        </View>
        
        <View style={{paddingTop: 15 }}>
            <View style={styles.Card}>
                <Card elevation={5} style={{backgroundColor: '#B0BEA9'}}>
                    <Card.Title 
                        title="StarBucks" 
                        
                        fontFamily="monospace"
                        subtitle="12 de Julho - 10:32" 
                        right={(props) => <Text style={{padding: 20, fontSize: 25, fontFamily: 'monospace', color: '#f24730', fontWeight: 'bold'}}>-10.00</Text>}
                        left={(props) => <Avatar.Icon {...props} icon="mood" />}
                    />
                </Card>
            </View>

            <View style={styles.Card}>
                <Card elevation={5} style={{backgroundColor: '#B0BEA9'}}>
                    <Card.Title 
                        title="Papelaria" 
                        subtitle="11 de Julho - 14:55" 
                        right={(props) => <Text style={{padding: 20, fontSize: 25, fontFamily: 'monospace', color: '#f24730', fontWeight: 'bold'}}>-12.50</Text>}
                        left={(props) => <Avatar.Icon {...props} icon="book" />}   
                    />
                </Card>
            </View>
        </View>

        <View style={{...styles.header, height:50, position:'absolute', bottom:0, width: '100%'}}>
            <Text style={{textAlign:'center', fontSize: 25, fontFamily: 'monospace', fontWeight: 'bold'}}>Saldo: -22.50</Text>     
        </View>

        <FAB
          style={styles.fab}
          icon="add"
          color='#73E2A7'
          onPress={() => console.log('Pressed')}
        />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: '#fff',
  },
  Card: {
    padding: 4,
    marginLeft: 10,
    marginRight: 10,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 85,
    backgroundColor: '#1C7C54' 
  },
  header: {
    backgroundColor: '#97d466',
    flex: 1, 
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1
  }
});
