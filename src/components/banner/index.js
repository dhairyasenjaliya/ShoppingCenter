 
import Carousel from 'react-native-snap-carousel'; 
import React, { Component } from 'react';
import { Dimensions,View, Image,Text } from 'react-native';

const { width } = Dimensions.get('window');



export default class Banner extends Component {

    constructor(props) {
      super(props);
      this.state = {};  
    }
    _renderItem ({item, index}) {
        return (
          // <View style={styles.slide}>
          //     <Text style={styles.title}>{ item.title }</Text>
          // </View>
          <View style={{alignItems:'center',alignContent:'center' }}> 
                <View style={{ }}>
                    <Image source={{uri:item.link}}
                    style={{width: width, height: 200 ,resizeMode:'cover',alignSelf:'center'}} />
                    {/* <Text style={{ textAlign:'center' }}>{item.name}</Text>  */}
              </View>   
          </View>
      )
    } 

    render() {
        let{
            textStyles ,
            style,
            content 
        } = this.props  
       
        return (  
             
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={content}
                renderItem={this._renderItem}
                sliderWidth={width}
                itemWidth={width} 
            />   
        )
    }
}