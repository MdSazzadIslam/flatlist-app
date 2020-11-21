/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View, FlatList, Alert, Text} from 'react-native';

const App = () => {
  const getListViewItem = (item) => {
    Alert.alert(item.key);
  };
  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#ccc',
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top programming language</Text>
      <FlatList
        data={[
          {key: 'Javascript'},
          {key: 'Python'},
          {key: 'Java'},
          {key: 'C#'},
          {key: 'C++'},
          {key: 'PHP'},
          {key: 'CSS'},
          {key: 'TypeScript'},
          {key: 'Swift'},
          {key: 'Objective-C'},
          {key: 'GO'},
          {key: 'Scala'},
          {key: 'R'},
          {key: 'Rust'},
        ]}
        renderItem={({item}) => (
          <Text style={styles.item} onPress={getListViewItem.bind(item)}>
            {item.key}
          </Text>
        )}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: 'Thamoha',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
