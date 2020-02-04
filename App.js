import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './app/components/HomeScreen';
import DetailsScreen from './app/components/DetailsScreen';

// const MainNavigator = createStackNavigator({
//   Home: {screen: HomeScreen},
//   Details: {screen: DetailsScreen},
// });

// const App = createAppContainer(MainNavigator);
const App = HomeScreen
export default App;