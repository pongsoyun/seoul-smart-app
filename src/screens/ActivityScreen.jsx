/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SeoulPrograms from '../components/SeoulPrograms';
import ActivityList from '../components/ActivityList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default function ActivityScreen({ navigation }) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  const [isActivity, setIsActivity] = useState(true);
  const [type, setType] = useState('');
  return (
    <View style={styles.container}>
      <Text>활동페이지</Text>
      <TouchableOpacity
        onPress={() => {
          setIsActivity(true);
        }}
      >
        <Text>개인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setIsActivity(false);
        }}
      >
        <Text>서울시</Text>
      </TouchableOpacity>
      {isActivity ? (
        <ActivityList typeFilter={type} navigate={navigation.navigate} />
      ) : (
        <SeoulPrograms />
      )}
      <TouchableOpacity onPress={() => navigation.navigate('Open', { id: '' })}>
        <Text>개설하기</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text>상세보기</Text>
      </TouchableOpacity>
    </View>
  );
}

ActivityScreen.navigationOptions = {
  title: '활동',
};
