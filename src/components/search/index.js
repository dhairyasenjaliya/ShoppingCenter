 
import Carousel from 'react-native-snap-carousel'; 
import React, { Component } from 'react';
import { Dimensions,View, Image,Text,TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles' 
const { width } = Dimensions.get('window');



export default class Search extends Component {

    constructor(props) {
      super(props);
      this.state = {};  
    } 

    render() {
        let{
            textStyles ,
            style,
            searchContent 
        } = this.props  
       
        return (  
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="ios-search" size={25} />
                    <TextInput
                        style={styles.input}
                        placeholder={searchContent}
                        // onChangeText={(searchString) => {this.setState({searchString})}}
                        underlineColorAndroid="transparent"
                        style = {{fontSize:20}}
            />
            </View> 
        )
    }
}