 
import { StyleSheet, Dimensions } from 'react-native';
// import Colors from '../../assets/colors';
// import Fonts from '../../assets/fonts';
// import Scale from '../../utils/scale';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#EEEEEE',
  }, 
    offerLogo:{
      height:30,
      width:30,
      marginHorizontal:5,
    },
    SectionHeaderStyle:{
      // backgroundColor : 'transparent',
      backgroundColor : '#CDDC39',
      fontSize : 20,
      padding: 5,
      color: '#fff',
    },
  
    SectionListItemStyle:{ 
      fontSize : 15,
      padding: 5,
      color: '#000',
      backgroundColor : '#F5F5F5'
  
    }
});
