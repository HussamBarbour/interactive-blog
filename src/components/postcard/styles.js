import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';
import fontsize from '../../styles/font-size';
const deviceSize = Dimensions.get('window');


export default StyleSheet.create({
    container:{
        marginVertical:15,
        
    },
    body : {
    },
    image_container:{
    },
    image:{
        height: 197,
        width: 350,
        alignSelf: 'flex-start',
        resizeMode: 'contain',
        borderRadius:5,
    },
    title:{
        fontSize:fontsize.large,
        marginVertical:10,
        fontWeight:'bold',
        
        
    },
});

