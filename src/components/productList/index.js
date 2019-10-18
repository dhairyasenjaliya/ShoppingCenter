 
import Carousel from 'react-native-snap-carousel'; 
import React, { Component } from 'react';
import { Dimensions,View, Image,Text,FlatList } from 'react-native';

const { width } = Dimensions.get('window'); 

export default class ProductList extends Component {

    constructor(props) {
      super(props);
      this.state = {};  
    }

    renderProduct = (item,index) => { 
        return (
           <View style={{flexDirection:'row' ,justifyContent:'space-between',alignContent:'center' ,alignSelf:'center' ,marginVertical:10  }}>
              <View style={{backgroundColor:'#FFF' ,borderRadius:20 ,marginHorizontal:5}}>
                <Image source={{uri:item.link}}
                style={{width: width/2.5, height: undefined,aspectRatio:1 ,resizeMode:'contain' ,alignSelf:'center', alignContent:'center'  ,marginHorizontal:10 ,marginVertical:20  }} />
                <Text style={{ textAlign:'center' ,fontSize:20 ,paddingVertical:10 }}>{item.name}</Text> 
              </View> 
          </View>   
        ) 
      } 
 
    // renderTitle = (item) => {
    //   return (
    //     <View style={{ }}>
    //        <Text style={{ textAlign:'center' }}>{item.title}</Text> 
    //    </View>   
    //   ) 
    // }

    render() {
        let{ 
            content ,
        } = this.props  
       
        return (   
            <FlatList
            data={content}
            renderItem = {  ({item}) => this.renderProduct(item) }
            // keyExtractor={({item}) => this.renderTitle(item) }
            contentContainerStyle={{
              justifyContent: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          /> 
        )
    }
}