import {View, Text, Switch} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles';

export default function AlarmItems({dataFromAlarmList}: any) {
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled, setIsEnabled] = useState(false); // Estado para controlar o Switch
  return (
    <View style={styles.alarmContainer}>
      <Text style={styles.timeFont}>{dataFromAlarmList.time}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? 'lightblue' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
