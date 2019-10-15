import React from 'react';
import { View, Text ,Button ,SafeAreaView} from 'react-native';

class HomeScreen extends React.Component {

    // static navigationOptions = {
    //   title: 'Welcome',
    // };

    render() {
      const {navigate} = this.props.navigation;
      return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
            <Button
              title="Offer"
              onPress={() => navigate('Offer')}
                // onPress={() => navigate('Offer', {name: 'Jane'})} 
            />
        </View>  
      );
    }
}

export default HomeScreen

  