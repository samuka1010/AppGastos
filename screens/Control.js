import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function HomeScreen() {

  return (
    <View style={{...styles.container, flexDirection: 'column'}}>
        <View style={{...styles.header,flex: 0.1, maxHeight:50, minHeight: 50, flexDirection: 'row'}}>
              <View style={{paddingRight: 8}}>
                <Button
                  type="clear"
                  icon={
                    <Icon
                      name="arrow-left"
                      size={15}
                      color="white"
                    />
                  }
                />
              </View>

            <View>
                <Text style={styles.fonteHeader}>18/10/2019</Text>
            </View>

            <View style={{paddingLeft: 8}}>
                <Button
                  type="clear"
                  style={{color: '#033F63'}}
                  icon={
                    <Icon
                      name="arrow-right"
                      size={15}
                      color="white"
                    />
                  }
                />
            </View>
        </View>      

        <ScrollView>
        <View style={{flex: 0.8, padding: 8, paddingBottom: 60 }}>
            
            <View style={{flex: 0.5, backgroundColor: 'rgba(0,0,0,0.15)'}}>
                <View style={{...styles.headerSec, maxHeight:50, minHeight:50, backgroundColor: '#6D97A6'}}> 
                   <View style={{flexDirection: 'row'}}> 
                        <View>    
                            <Text style={styles.fonteSec}>Créditos</Text>
                        </View>

                        <View style={{right: 5}}>
                            <Button
                              type="clear"
                              icon={
                                <Icon
                                  name="plus"
                                  size={20}
                                  color="white"
                                />
                              }
                            />    
                        </View>  
                    </View>     
                </View>
                
                <DataTable.Header style={{flexDirection: 'row', height: 30}}>
                    <DataTable.Title style={{...styles.headerTable, flex: 0.6}}>Descrição</DataTable.Title>
                    <DataTable.Title style={{...styles.headerTable, flex: 0.3}} numeric>Valor</DataTable.Title>
                    <DataTable.Title style={{...styles.headerTable, flex: 0.1}}>OK</DataTable.Title>
                </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Salário adiantamento</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>1500.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>OK</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Tester work</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>150.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>Não</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Tester work</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>150.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>Não</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Tester work</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>150.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>Não</DataTable.Cell>
                    </DataTable.Row>

                <View style={{...styles.footerSec, maxHeight:50, minHeight:50, backgroundColor: '#6D97A6'}}>
                    <Text style={styles.fonteSec}>Total: 1.950,00</Text>
                </View>
            </View>


            <View style={{flex: 0.5, paddingTop: 10, backgroundColor: 'rgba(0,0,0,0.15)'}}>
                <View style={{...styles.headerSec, maxHeight:50, minHeight:50, backgroundColor: '#6D97A6'}}>
                    <Text style={styles.fonteSec}>Débitos</Text>
                </View>
                
                <DataTable.Header style={{flexDirection: 'row', height: 30}}>
                    <DataTable.Title style={{...styles.headerTable, flex: 0.6}}>Descrição</DataTable.Title>
                    <DataTable.Title style={{...styles.headerTable, flex: 0.3}} numeric>Valor</DataTable.Title>
                    <DataTable.Title style={{...styles.headerTable, flex: 0.1}}>OK</DataTable.Title>
                </DataTable.Header>

                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}><Text>Barzinho</Text></DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>100.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>OK</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Presente</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>50.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>Não</DataTable.Cell>
                    </DataTable.Row>

                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Sorvete</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>50.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>Não</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Almoço</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>100.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>Não</DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.6}}>Almoço</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.3}} numeric>100.00</DataTable.Cell>
                        <DataTable.Cell style={{...styles.headerTable, flex: 0.1}}>Não</DataTable.Cell>
                    </DataTable.Row>

                
                <View style={{...styles.footerSec, maxHeight:50, minHeight:50, backgroundColor: '#6D97A6'}}>
                    <Text style={styles.fonteSec}>Total: 300,00</Text>
                </View>
            </View>
            
        </View>
        </ScrollView>

        
        <View style={{...styles.header, height:50, position:'absolute', bottom:0, width: '100%'}}>
            <Text style={styles.fonteHeader}>Saldo: 1.650,00</Text>     
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
    right: 16,
    bottom: 85,
    backgroundColor: '#1C7C54' 
  },
  header: {
    backgroundColor: '#033F63',
    flex: 1, 
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
  },
  headerSec: {
    backgroundColor: '#033F63',
    flex: 1, 
    flexDirection: 'column',
    justifyContent: 'center',
  },
  footerSec: {
    backgroundColor: '#033F63',
    flex: 1, 
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
  },
  headerTable: {
    flex: 1, 
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    fontFamily: 'monospace',
  },
  fonteHeader: {
    textAlign:'center',
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    color: '#fff'
  },
  fonteSec: {
    textAlign:'left',
    fontSize: 25,
    fontFamily: 'monospace',
    fontWeight: 'bold',
    paddingLeft: 8,
  },
  fonteDesc: {
    textAlign:'left',
    fontSize: 16,
    fontFamily: 'monospace',
  },
});
