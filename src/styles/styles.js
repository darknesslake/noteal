import { StyleSheet, Dimensions } from 'react-native';

const baseFontSize = 16;

const styles = StyleSheet.create({
  main: {
    paddingTop: 60,
    height: 100,
    backgroundColor: 'white',
  },
  header: {
    // flex: 1,
    padding: 20,
    paddingTop: -50,
    // height: 100,
  },
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containertwo: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1
    // width: undefined,
    // height: undefined,
    // flexDirection: 'column',
    // backgroundColor:'transparent',
    // justifyContent: 'flex-start',
  },
  image: {
    // flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    width: '100%',
    height: '20%',
    padding: 40,
  },
  imageLine: {
    // flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    width: 10,
    height: 3,
    // padding: 10,
  },
  buttonp: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
    width: '50%',
    height: '50%',
    position: 'absolute',
    top: 150,
    left: -150,
  },
  backgroundtone: {
    backgroundColor: 'grey',
    width: '100%',
    height: '100%',
    flex: 1
  },
  zipContainer: {
    height: baseFontSize + 10,
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3
  },



});

export default styles;
