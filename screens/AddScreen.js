import React, { useState } from 'react';
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
import { NavigationEvents } from 'react-navigation';

import { SQLite } from 'expo-sqlite';
//import AppStorage from '../storage/AppStorage';



export default class AddScreen extends React.Component {

  databases = {};

  movList = [];

  state = {
    movs : [],
  }

  openDatabase(databaseName = 'db') {

    let database = this.databases[databaseName];

    if (!database) {
        database = SQLite.openDatabase(`${databaseName}.db`);
        this.databases[databaseName] = database;
    }
    return database;
}

async executeSqlAsync(sqlStatement, args = [], databaseName = 'db') {

  if (!sqlStatement) {
      throw new Error('É obrigatório informar uma expressão SQL.');
  }

  const database = this.openDatabase(databaseName);

  return new Promise((resolve, reject) => {
      database.transaction(transaction =>
          transaction.executeSql(
              sqlStatement,
              args,
              (transaction, resultSet) => resolve(resultSet),
              (transaction, error) => reject(error)
          )
      );
  });
}

async transactionAsync(callback, databaseName = 'db') {
    const database = this.openDatabase(databaseName);
    return new Promise((resolve, reject) => {
        database.transaction(transaction =>
            callback(transaction),
            error => reject(error),
            () => resolve()
        )
    });
}

_willFocus = async () => {

}

render() {

  return (
    <View style={{...styles.container, flexDirection: 'column'}}>
        <NavigationEvents onWillFocus={this._willFocus}/>
     

    </View>
  );
}
}

AddScreen.navigationOptions = {
  header: null,
};


styles = StyleSheet.create({
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
