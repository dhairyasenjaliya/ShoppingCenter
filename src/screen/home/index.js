import React from 'react';
import { View, Text ,Button ,SafeAreaView ,TextInput ,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles' 
// import Carousel from 'react-native-snap-carousel'; 
import ProductSwiper from '../../components/productSwiper'
import Banner from '../../components/banner'
import Search from '../../components/search'


const { width } = Dimensions.get('window');

class HomeScreen extends React.Component {

  constructor() {
    super()
    this.state = {
      banner:[  
        { link: 'https://storiesflistgv2.blob.core.windows.net/stories/2018/10/BBDTipSheet_mainbanner.jpg' },
        { link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmYqSlVANqV1KgCZ7gLMQlPe--4FvTjIMa7I8vHx_6zLn1nSxq' }, 
        { link: 'https://i.ytimg.com/vi/SrAGa8lmuIw/maxresdefault.jpg' },
        { link: 'https://storiesflistgv2.blob.core.windows.net/stories/2018/10/BBDTipSheet_mainbanner.jpg' }
      ],
      product:[  
        { link: 'https://rukminim1.flixcart.com/flap/150/150/image/c5f0137fed830e72.jpg?q=70' ,name:'Bags'},
        { link: 'https://rukminim1.flixcart.com/image/150/150/jzeg6fk0/speaker/mobile-tablet-speaker/z/a/h/jbl-jblgoplusblkeu-original-imafdzu6tsnfnstp.jpeg?q=70' ,name:'Speaker'}, 
        { link: 'https://rukminim1.flixcart.com/image/150/150/jyj0how0/collapsible-wardrobe/g/s/g/pp-fksbcwma5-flipkart-smartbuy-maroon-original-imafgzswhgb6zxtx.jpeg?q=70',name:'Home Accessories' },
        { link: 'https://rukminim1.flixcart.com/flap/150/150/image/51b689f536463412.jpg?q=70' ,name:'Shoes'},

        { link: 'https://rukminim1.flixcart.com/image/150/150/j8rnpu80/watch/d/5/y/b172-casio-original-imaeymgrxhfmnw6f.jpeg?q=70' ,name:'Watch'},
        { link: 'https://rukminim1.flixcart.com/image/150/150/jzeg6fk0/speaker/mobile-tablet-speaker/z/a/h/jbl-jblgoplusblkeu-original-imafdzu6tsnfnstp.jpeg?q=70',name:'Home ' }, 
        { link: 'https://rukminim1.flixcart.com/image/150/150/jyj0how0/collapsible-wardrobe/g/s/g/pp-fksbcwma5-flipkart-smartbuy-maroon-original-imafgzswhgb6zxtx.jpeg?q=70',name:'Bags' },
        { link: 'https://rukminim1.flixcart.com/image/150/150/jyj0how0/headphone/w/z/t/mi-zbw4475in-original-imafgr2cnz3ugqd3.jpeg?q=70' ,name:'Headfone'}
      ],
    }
  }

  _renderItem ({item, index}) {
    return (
      // <View style={styles.slide}>
      //     <Text style={styles.title}>{ item.title }</Text>
      // </View>
      <View>
        <Image source={{uri:item.link}}
          style={{width: width, height: 200 ,resizeMode:'cover',alignSelf:'center'}} />
      </View>
  );}
 

  static navigationOptions = {
    header: null,
  };
 
    render() {
      const {navigate} = this.props.navigation;
      return ( 
        <View style={styles.container}>
          <View style={{ marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#FFF' ,width:'100%'}}> 
            
            <View style={{ flexDirection:'row',marginHorizontal:20,justifyContent:'space-between' ,alignItems:'center' ,alignContent:'center' }}>
              <Text style={{ fontSize:20 }}>NOW</Text> 
                <Icon style={{ marginHorizontal:10 }} name="ios-arrow-round-forward" size={35} />
              <Text style={{ fontSize:20 ,fontWeight:'bold'}}>Rajkot</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigate('Offer')}
              style={{ flexDirection:'row',alignItems:'center' ,marginHorizontal:20}} > 
                  <Image
                    style={styles.offerLogo}
                    source={require('../../assets/discount.png')} 
                  />  
              <Text style={{ fontSize:20 ,fontWeight:'bold'}}>Offers</Text>
            </TouchableOpacity>
          </View> 

          <Search searchContent={`Search For Product ,Brand and More`}/> 
           
          <Banner  
            // textStyles={{fontSize:20}}
            content={this.state.banner}
            style={{ alignSelf:'center'}}  
          />  
   
          <ProductSwiper
            textStyles={{fontSize:20}}
            content={this.state.product}
            style={{ flex:1,alignSelf:'center'}}  
          /> 
       
        </View>  
  
      );
    }
}

export default HomeScreen

  