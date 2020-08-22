import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 90,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius:90,
    height: 45,
    width: 45
  },
  btnIcon: {
    height: 30,
    width: 30
  }
});

export default styles;
