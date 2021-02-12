import { StyleSheet , Dimensions} from 'react-native';
import colors from '../../styles/colors';
import fontsize from '../../styles/font-size';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:16,
        marginHorizontal:16,
        borderBottomWidth:1,
        paddingBottom:6,
        borderColor:colors.light,
    },
    body : {
        padding: 16,
    },
    image_container:{
    },
    image:{
        height: deviceSize.height / 3,
    },
    title:{
        fontSize:fontsize.xxlarge,
        marginBottom: 10,
        fontWeight: 'bold',

    },
    post_bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        alignItems: 'center',
    },
    category_container:{
        borderLeftWidth : 3,
        paddingLeft: 5,
        borderColor: '#0c0c0c',
        marginRight: 16,
    },
    category:{
        fontSize:fontsize.normal,
        color:colors.header,
    },
    
    date:{
        fontSize:fontsize.small,
        backgroundColor: '#000',
        color: '#fff',
        padding: 5,
    },
    content: {
        fontSize: fontsize.large,
    },
    back_button:{
        position: 'absolute',
        zIndex: 9,
        left: 5,
        top: 5,
        backgroundColor: '#ffffff',
        borderRadius: 100,
    },
    back_button_icon:{
        color: '#5c5c5c',
    }
});

