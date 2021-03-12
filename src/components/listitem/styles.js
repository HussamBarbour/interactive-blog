import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontsize from '../../styles/font-size';

export default StyleSheet.create({
   container: {
   },
   button: {
      borderWidth: 1,
      padding: 10,
      alignItems: 'center',
      borderColor: '#000',
      backgroundColor: colors.primary,
      borderRadius: 10,
      marginBottom: 10,
   },
   buttonText: {
      color: '#fff',
      fontSize: fontsize.large,
   }
});