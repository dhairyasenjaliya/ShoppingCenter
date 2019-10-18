import React from 'react';
import {FlatList, Alert,View, Text ,Button ,SafeAreaView ,TextInput ,Dimensions,Image ,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles' 
// import Carousel from 'react-native-snap-carousel'; 
import CategorySwiper from '../../components/CategorySwiper'
import ProductList from '../../components/productList' 
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
        { link: 'https://storiesflistgv2.blob.core.windows.net/stories/2018/10/BBDTipSheet_mainbanner.jpg' }, 
      ],
      product:[  
        { link: 'https://rukminim1.flixcart.com/flap/150/150/image/785e3a7a1a06e4b9.jpg?q=70' ,name:'Watches'},
        { link: 'https://rukminim1.flixcart.com/image/312/312/jh3q6q80/monitor/y/r/h/ls24f350-ls24f350-samsung-original-imaf576unwyge7hp.jpeg?q=70' ,name:'Speaker'}, 
        { link: 'https://rukminim1.flixcart.com/image/150/150/k0lbdzk0pkrrdj/speaker/home-audio-speaker/p/r/d/jbl-boombox-original-imafj9zgyenpy2rt.jpeg?q=70',name:'Home Accessories' },
        { link: 'https://rukminim1.flixcart.com/flap/150/150/image/51b689f536463412.jpg?q=70' ,name:'Shoes'},

        { link: 'https://rukminim1.flixcart.com/image/150/150/jfvfjbk0/deodorant/g/b/u/300-signature-voyage-neo-deodorant-spray-park-avenue-men-original-imaf48ujsfmv9umj.jpeg?q=70' ,name:'Watch'},
        { link: 'https://rukminim1.flixcart.com/image/150/150/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70',name:'Home ' }, 
        { link: 'https://rukminim1.flixcart.com/image/150/150/jyj0how0/collapsible-wardrobe/g/s/g/pp-fksbcwma5-flipkart-smartbuy-maroon-original-imafgzswhgb6zxtx.jpeg?q=70',name:'Bags' },
        { link: 'https://rukminim1.flixcart.com/image/150/150/jyj0how0/headphone/w/z/t/mi-zbw4475in-original-imafgr2cnz3ugqd3.jpeg?q=70' ,name:'Headfone'}
      ],
      productList:[  
        { link: 'https://rukminim1.flixcart.com/image/150/150/jzd0qkw0/mobile/x/n/w/realme-5-rmx1911-original-imafje89tgyzdj7c.jpeg?q=70' ,name:'Realmex5' ,upto:'4000' }, 
        { link: 'https://rukminim1.flixcart.com/image/150/150/jxz0brk0/mobile/m/6/z/redmi-k20-pro-na-original-imafgb4yzvmbfewa.jpeg?q=70',name:'K20 pro' },
        { link: 'https://rukminim1.flixcart.com/image/150/150/jvjugsw0/mobile-phone-lens/f/e/f/4-in-1-lens-198-fish-eye-0-63x-super-wide-angle-15x-macro-2x-original-imafgehgfwhqkpbr.jpeg?q=70' ,name:'Lenses'},
        { link: 'https://rukminim1.flixcart.com/image/150/150/k0r15e80/rice-light/j/w/f/1-hdrl-new-strip-yellow-01-home-delight-original-imafkgy6z3ybrwat.jpeg?q=70' ,name:'Rice Light'}, 
        { link: 'https://rukminim1.flixcart.com/image/150/150/jnm2efk0/sari/e/g/s/free-725s5-saara-original-imafa4pmg634uhd4.jpeg?q=70',name:'Saree' },
        { link: 'https://rukminim1.flixcart.com/flap/150/150/image/51b689f536463412.jpg?q=70' ,name:'Shoes'},
        { link: 'https://rukminim1.flixcart.com/image/150/150/j7qi9ow0/sunglass/h/f/t/onesize-m155gr1-fastrack-original-imaexwzhgpaw5zqu.jpeg?q=70' ,name:'Sunglasses'},
        { link: 'https://rukminim1.flixcart.com/image/150/150/j63x7rk0/memory-card/microsdhc/4/z/g/sandisk-sdsquar-032g-gn6ma-original-imaewngzfeudzgvm.jpeg?q=70',name:'Home ' }, 
        { link: 'https://rukminim1.flixcart.com/image/150/150/jyj0how0/collapsible-wardrobe/g/s/g/pp-fksbcwma5-flipkart-smartbuy-maroon-original-imafgzswhgb6zxtx.jpeg?q=70',name:'Bags' },
        { link: 'https://rukminim1.flixcart.com/image/150/150/jyj0how0/headphone/w/z/t/mi-zbw4475in-original-imafgr2cnz3ugqd3.jpeg?q=70' ,name:'Headfone'}
      ],
    }
  }  

  static navigationOptions = {
    header: null,
  };

   
    render() {

      const {navigate} = this.props.navigation;  

      return ( 
        <View style={styles.container}>
          <ScrollView>
            <View style={{backgroundColor:"#FFF"}}>
            <View style={{ marginTop:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#FFF' ,width:'100%'}}> 
              
              <View style={{ flexDirection:'row',marginHorizontal:20,justifyContent:'space-between' ,alignItems:'center' ,alignContent:'center' ,paddingVertical:10 }}>
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
            </View>
            
            <Banner  
              content={this.state.banner}
              style={{ alignSelf:'center'}}  
            />  

            <View style={{marginVertical:10,marginLeft:20}}><Text style={{fontSize:20,fontWeight:'bold'}}>Category</Text></View>
    
            <CategorySwiper
              textStyles={{fontSize:20}}
              content={this.state.product}
              style={{ flex:1,alignSelf:'center'}}  
            />  

            <View style={{marginVertical:10,marginLeft:20}}><Text style={{fontSize:20,fontWeight:'bold'}}>Trending Products</Text></View>
    
            <ProductList content={this.state.productList} />


          </ScrollView>
        </View> 
  
      );
    }
}

export default HomeScreen

  