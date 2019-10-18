 
import Carousel from 'react-native-snap-carousel'; 
import React, { Component } from 'react';
import { Dimensions,View, Image,Text } from 'react-native';

const { width } = Dimensions.get('window'); 

export default class CategorySwiper extends Component {

    constructor(props) {
      super(props);
      this.state = {};  
    }

    _renderItem ({item, index}) {
        return ( 
        // For Full Size Images :
        //   <View style={{ borderRadius:20 ,width: width/2,alignItems:'center',alignContent:'center' ,overflow:'hidden',marginVertical:20 ,backgroundColor:'#fff'}}> 
        //     <Image source={{uri:item.link}}
        //     style={{resizeMode: 'contain',aspectRatio: 1, width: '100%' ,alignSelf:'center', alignContent:'center'  }} />
        //     <Text style={{ textAlign:'center',paddingVertical:10 }}>{item.name}</Text>  
        //   </View>   
        <View style={{ borderRadius:20 ,width: width/2,alignItems:'center',alignContent:'center' ,overflow:'hidden',marginVertical:20 ,backgroundColor:'#fff'}}> 
            <Image source={{uri:item.link}}
                style={{resizeMode: 'contain', aspectRatio: 1, width: width/3 ,alignSelf:'center', alignContent:'center' ,marginVertical:10 ,marginHorizontal:10}} />
            <Text style={{ textAlign:'center',paddingVertical:10 }}>{item.name}</Text>  
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