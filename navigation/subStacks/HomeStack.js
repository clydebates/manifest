import { createStackNavigator } from 'react-native';
import TabBarIcon from '../../components/TabBarIcon';
import defaultHeader from './DefaultHeader';
import HomeScreen from '../../screens/HomeScreen';

const HomeStack = createStackNavigator(
  {
    HomePg: {
      screen: HomeScreen,
    },
  },
  defaultHeader,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = 'app/home/';