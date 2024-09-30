import {View, FlatList, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import AlarmData from '../AlarmData/AlarmData';
import AlarmItems from './AlarmItems';
import styles from '../../styles';
import Icon from 'react-native-vector-icons/Feather';

export default function AlarmList() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Alarm List</Text>
          <Icon name="plus" size={30} color="#FFF" />
          <FlatList
            data={AlarmData}
            renderItem={({item}) => <AlarmItems dataFromAlarmList={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
