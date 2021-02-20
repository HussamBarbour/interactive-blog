import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontsize from '../../styles/font-size';


export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        paddingVertical: 10,
        borderColor: colors.light,



    },
    body: {
        flex: 1,

    },
    image_container: {
        alignSelf: 'flex-end',


    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginLeft: 10,

    },
    category: {
        fontSize: fontsize.normal,
        color: colors.dark,

    },
    title: {
        fontSize: fontsize.large,
        marginVertical: 10,


    },
    date: {
        fontSize: fontsize.small,

    },
});

