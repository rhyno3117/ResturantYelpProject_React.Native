import { createStackNavigator, createAppContainer } from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen';
//Do not know the updated imports 

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);