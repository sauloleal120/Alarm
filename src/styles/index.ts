import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'black',
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
    textAlign: 'left',
    marginHorizontal: 25,
  },
  timeFont: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
  },
  alarmContainer: {
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor: 'black',
    padding: 10,
    marginHorizontal: 25,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
});

export default styles;
