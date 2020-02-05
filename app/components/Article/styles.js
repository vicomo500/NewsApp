import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 100,
  },
  title: {
    fontSize: 21,
    fontWeight:'bold',
    color: 'black',
  },
  date: {
    fontSize:15,
    color: 'gray',
  }
});

export default styles;

