import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
  },
  title: {
    width: 20,
    height: 20,
    fontSize: 21,
    color: 'black'
  },
  date: {
    width: 20,
    height: 20,
    fontSize:15,
    color: 'gray'
  }
});

export default styles;

