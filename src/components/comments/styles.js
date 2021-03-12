import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import fontsize from '../../styles/font-size';

export default StyleSheet.create({
    container: {
        marginTop: 15,
        borderTopWidth: 1,
        borderColor: colors.light,
        paddingVertical: 10,
    },
    comment: {
        marginBottom: 15,
        backgroundColor: '#eee',
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    header: {
        fontSize: 20,
        marginBottom: 15,
    },
    comments_info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    comment_content: {
        fontSize: fontsize.large,
    }
});