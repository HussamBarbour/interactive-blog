import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        padding:10,
        alignItems:'center',
        borderRadius:10,
        borderWidth: 1,

    },
    label:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 16,

    }
})