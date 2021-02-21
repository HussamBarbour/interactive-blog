import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontsize from '../../styles/font-size';


export default StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        padding:5,
        height:60,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    icon:{
        color:'#fff'
    },
    header_left:{
       

    },

    header_center:{

    },
    header_right:{
        flexDirection:'row'

    },
    title:{
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
    }
});

