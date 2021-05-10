/* eslint-disable no-unused-vars */
import { StyleSheet, Dimensions } from 'react-native';

// import layout from '../../constants';

const iconDims = Dimensions.get('window').height / 25;

export default StyleSheet.create({
 
      screenContainer: {
        flex: 1,
        backgroundColor: '#181818',
        flexDirection: "row",
        alignSelf: "stretch",
        paddingVertical: 20
      },
      subContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '85%',
      },
      row: {
        paddingHorizontal: 20,
        paddingVertical: 10
      },
      sectionHeader: {
        backgroundColor: '#8296B117',
        paddingHorizontal: 20,
        paddingVertical: 10
      },
      textStyle: {
        color: '#FFFFFF',
        fontFamily: 'Avenir',
      },
      subheaderText: {
        fontWeight: '500',
        fontSize: 18,
        marginBottom: 15,
      }
});
