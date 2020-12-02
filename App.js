import React from 'react';
import { View, Platform } from 'react-native';
import AddEntry from './components/AddEntry';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import History from './components/History';
import { NavigationContainer } from '@react-navigation/native';
// import { TabNavigator } from 'react-navigation';
// import { purple, white } from './utils/colors';
// import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

// const Tabs = TabNavigator({
//   History: {
//     screen: History,
//     navigationOptions: {
//       tabBarLabel: 'History',
//       tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
//     }
//   },
//   AddEntry: {
//     screen: AddEntry,
//     navigationOptions: {
//       tabBarLabel: 'Add Entry',
//       tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
//     }
//   }
// }, {
//   tabBarOptions: {
//     activeTintColor: Platform.OS === 'ios' ? purple : white,
//     style: {
//       height: 56,
//       backgroundColor: Platform.OS === 'ios' ? white : purple,
//       shadowColor: 'rgba(0, 0, 0, 0.24',
//       shadowOffset: {
//         width: 0,
//         height: 3,
//       },
//       shadowRadius: 0,
//       shadowOpacity: 1
//     }
//   }
// })

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Provider store={createStore(reducer)}>
          <Tab.Navigator>
            {/* <View style={{flex: 1}}>
              <View style={{height: 20}} />
              
            </View> */}
            <Tab.Screen name="History" component={History} />
            <Tab.Screen name="Add Entry" component={AddEntry} />
          </Tab.Navigator>
        </Provider>
      </NavigationContainer>
    )
  }
}
