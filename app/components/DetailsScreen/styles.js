import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginStart:8,
    marginEnd:8,
    marginBottom:8,
  },
  title: {
    fontSize: 35,
    fontWeight:'bold',
    color: 'black',
  },
  caption: {
    fontSize: 15,
    fontStyle:'italic',
    color: '#5a5a5a',
  },
  content: {
    fontSize: 21,
    color:'#252525',
    marginTop:4,
  },
  button:{
    marginTop:4,
    backgroundColor:'green',
  }
});
export default styles;