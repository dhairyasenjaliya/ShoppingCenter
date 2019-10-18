import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screen/home'
import OfferScreen from './src/screen/offer'


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen}, 
  Offer: {screen: OfferScreen},
  // Home: {screen: HomeScreen}, 
});

const App = createAppContainer(MainNavigator);

export default App;