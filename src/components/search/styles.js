     
import { StyleSheet, Dimensions } from 'react-native';
// import Colors from '../../assets/colors';
// import Fonts from '../../assets/fonts';
// import Scale from '../../utils/scale';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    searchSection: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
        alignItems:'center', 
        marginHorizontal:20,
        marginVertical:10,
        borderWidth: 1
        // borderRadius:10,
        // borderLeftWidth: 4,
        // borderRightWidth: 4,
        // height: 70
        },
        searchIcon: {
            padding: 10,
            // marginLeft:40
        },
        input: {
            // flex: 1,
            paddingTop: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingLeft: 0,
            // backgroundColor: '#D3D3D3',
            // color: '#424242',
            width:'100%',
            padding:100,
            borderRadius:5 
        }, 
    
});
