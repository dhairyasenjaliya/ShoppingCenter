 
import Carousel from 'react-native-snap-carousel'; 
import React, { Component } from 'react';
import { Dimensions,View, Image,Text } from 'react-native';

const { width } = Dimensions.get('window'); 

export default class ProductSwiper extends Component {

    constructor(props) {
      super(props);
      this.state = {};  
    }

    _renderItem ({item, index}) {
        return ( 
          <View style={{ borderRadius:20 ,alignItems:'center',alignContent:'center' ,marginVertical:20 ,backgroundColor:'#fff'}}> 
                <View style={{ }}>
                    <Image source={{uri:item.link}}
                    style={{width: width/2, height: 150 ,resizeMode:'contain' ,alignSelf:'center', alignContent:'center' , borderRadius:40  }} />
                    <Text style={{ textAlign:'center' }}>{item.name}</Text> 
              </View>   
          </View>   
      )
    } 

    render() {
        let{ 
            content ,
        } = this.props  
       
        return (   
            <View style={{flex:1  }}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={content}
                    renderItem={this._renderItem}
                    sliderWidth={width}
                    itemWidth={width/2} 
                />   
            </View>
        )
    }
}