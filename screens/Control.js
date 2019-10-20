import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button, Card, Divider, Badge } from 'react-native-elements';
import { FAB } from 'react-native-paper';
export default function HomeScreen() {

  return (
    <View style={{...styles.container, flexDirection: 'column'}}>
        <View style={{...styles.header,flex: 0.1, maxHeight:50, minHeight: 50, flexDirection: 'row'}}>
            <View>
                <Text style={styles.fonteHeader}>Meus Gastos</Text>
            </View>
        </View>      

        <ScrollView>
            <Card>    
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', top: 0, paddingBottom: 15}}>           
                      <View style={{flex: 0.3, flexDirection: 'column',justifyContent: 'center'}}>  
                          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'left'}}>20</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'column', textAlign: 'left', justifyContent: 'center'}}>  
                          <Text style={{fontSize: 17, fontWeight: 'bold', textAlign: 'left'}}>domingo</Text>
                          <Text style={{fontSize: 13, color: 'rgba(0,0,0,0.6)', textAlign: 'left', alignItems: 'center'}}>outubro 2019</Text>
                      </View>                  

                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                          <Text style={{fontSize: 23, fontWeight: 'bold', textAlign: 'right', alignItems: 'center', color: '#94B568'}}>R$ 1450.00</Text>
                      </View>
                  </View>

                  <Divider/>

                  <View style={{flex: 1, flexDirection: 'row', height: 50}}>     
                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                        <View style={{flex: 0.6, flexDirection: 'row', alignItems: 'center'}}>
                            <Badge/>
                            <Text style={{fontSize: 17, fontWeight: 'bold'}}> Salário</Text>
                        </View>
                        <Text style={{fontSize: 13, color: 'rgba(0,0,0,0.6)'}}>Conta NEXT 18:37</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                        <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'right', alignItems: 'center', justifyContent: 'center', color: '#94B568'}}>R$ 1500.00</Text>
                      </View>
                  </View>

                  <Divider/>

                  <View style={{flex: 1, flexDirection: 'row', height: 50}}>     
                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                        <View style={{flex: 0.6, flexDirection: 'row', alignItems: 'center'}}>
                            <Badge status="warning"/>
                            <Text style={{fontSize: 17, fontWeight: 'bold'}}> Bazinho</Text>
                        </View>
                        <Text style={{fontSize: 13, color: 'rgba(0,0,0,0.6)'}}>Conta NEXT 19:00</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                        <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'right', alignItems: 'center', justifyContent: 'center', color: '#DA5B59'}}>R$ 50.00</Text>
                      </View>
                  </View>   
                  
                  <Divider/>                                
            </Card>

            <Card>    
                  <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', top: 0, paddingBottom: 15}}>           
                      <View style={{flex: 0.3, flexDirection: 'column',justifyContent: 'center'}}>  
                          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'left'}}>21</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'column', textAlign: 'left', justifyContent: 'center'}}>  
                          <Text style={{fontSize: 17, fontWeight: 'bold', textAlign: 'left'}}>segunda</Text>
                          <Text style={{fontSize: 13, color: 'rgba(0,0,0,0.6)', textAlign: 'left', alignItems: 'center'}}>outubro 2019</Text>
                      </View>                  

                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                          <Text style={{fontSize: 23, fontWeight: 'bold', textAlign: 'right', alignItems: 'center', color: '#94B568'}}>R$ 1350.00</Text>
                      </View>
                  </View>
                      
                  <Divider/>

                  <View style={{flex: 1, flexDirection: 'row', height: 50}}>     
                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Presentes</Text>
                        <Text style={{fontSize: 13, color: 'rgba(0,0,0,0.6)'}}>Conta NEXT 12:30</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>  
                        <Text style={{fontSize: 19, fontWeight: 'bold', textAlign: 'right', alignItems: 'center', justifyContent: 'center', color: '#DA5B59'}}>R$ 100.00</Text>
                      </View>
                  </View>                                   
            </Card>
            
        </ScrollView>

        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <FAB
              style={styles.fab}
              icon="add"
              onPress={() => console.log('Pressed')}
            />
        </View>
        <View style={{...styles.header, height:50, position:'absolute', bottom:0, width: '100%'}}>
            <Text style={styles.fonteHeader}>Saldo atual: 1350.00</Text>     
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
    alignItems:'center',
    bottom: 75,
    right: '42%',
    backgroundColor: '#0E8187' 
  },
  header: {
    backgroundColor: '#0E8187',
    flex: 1, 
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
  },
  
  fonteHeader: {
    textAlign:'center',
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#fff'
  },
 
});
