import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

var _ = require('lodash');


import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import PlaidScreen from '../screens/PlaidScreen';
import GoalsScreen from '../screens/GoalsScreen';
import GoalsSummaryScreen from '../screens/GoalsSummaryScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import StatsScreen from '../screens/StatsScreen';
import LogOutScreen from '../screens/LogOutScreen';
import GamesScreen from '../screens/GamesScreen';
import DKScreen from '../screens/games/DK';
import GameTwoScreen from '../screens/games/GameTwo';
import GameThreeScreen from '../screens/games/GameThree';
import GameFourScreen from '../screens/games/GameFour';
import Link from '../screens/subViews/PlaidLink';
import ManifestTitle from '../screens/Header';
// import console = require('console');


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const defaultHeader = {
  defaultNavigationOptions: {
    headerTitle: <ManifestTitle />,
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#4c4c4c',
    },
  },
  headerLayoutPreset: 'center',
  config,
};

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

const PlaidStack = createStackNavigator(
  {
    Plaid: {
      screen: PlaidScreen,
    },
  },
  // defaultHeader,
  _.merge({
    initialRouteName: 'Plaid',
    initialRouteParams: {
      auth: false,
    },
  }, defaultHeader),
);

PlaidStack.navigationOptions = {
  tabBarLabel: 'Plaid',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

PlaidStack.path = 'app/plaid';

const GoalsStack = createStackNavigator(
  {
    Goals: {
      screen: GoalsScreen,
    },
  },
  _.merge({
    initialRouteName: 'Goals',
    initialRouteParams: {
      auth: false,
    },
  }, defaultHeader),
);

GoalsStack.navigationOptions = {
  tabBarLabel: 'Goals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

GoalsStack.path = 'app/goals';

const GoalsSummaryStack = createStackNavigator(
  {
    Goals: {
      screen: GoalsSummaryScreen,
    },
  },
  defaultHeader,
);

GoalsSummaryStack.navigationOptions = {
  tabBarLabel: 'Goals Summary',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

GoalsSummaryStack.path = 'app/goals-summary';

const GamesStack = createStackNavigator(
  {
    Goals: {
      screen: GamesScreen,
    },
    DK: {
      screen: DKScreen,
    },
    GameTwo: {
      screen: GameTwoScreen,
    },
    GameThree: {
      screen: GameThreeScreen,
    },
    GameFour: {
      screen: GameFourScreen,
    },
  },
  defaultHeader,
);

GamesStack.navigationOptions = {
  tabBarLabel: 'Games',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

GamesStack.path = 'app/games';

const StatsStack = createStackNavigator(
  {
    Stats: {
      screen: StatsScreen,
    },
  },
  defaultHeader,
);

StatsStack.navigationOptions = {
  tabBarLabel: 'Stats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

StatsStack.path = 'app/stats';

const TransactionsStack = createStackNavigator(
  {
    Transactions: {
      screen: TransactionsScreen,
    },
  },
  defaultHeader,
);

TransactionsStack.navigationOptions = {
  tabBarLabel: 'Transactions',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

TransactionsStack.path = 'app/transactions';

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: SettingsScreen,
    },
  },
  defaultHeader,
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = 'app/settings';

const MyAccountStack = createStackNavigator(
  {
    MyAccount: {
      screen: MyAccountScreen,
    },
  },
  _.merge({
    initialRouteName: 'MyAccount',
    initialRouteParams: {
      auth: false,
    },
  }, defaultHeader),
);

MyAccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

MyAccountStack.path = 'app/my-account';

const drawerNavigator = createDrawerNavigator(
  {
    Home: HomeStack,
    Plaid: PlaidStack,
    Stats: StatsStack,
    Goals: GoalsStack,
    GoalsSummary: GoalsSummaryStack,
    Games: GamesStack,
    Transactions: TransactionsStack,
    Settings: SettingsStack,
    Account: MyAccountStack,
    LogOut: {
      screen: LogOutScreen,
    },
  },
  {
    initialRouteName: 'Home',
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#49d5b6',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#49d5b6',
    },
    backBehavior: 'initialRoute',
  },
);

drawerNavigator.path = 'app/';

export default drawerNavigator;
