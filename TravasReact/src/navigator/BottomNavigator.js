import React,{useContext,useState} from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
import Profile from '../screens/Profile';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Explore from '../screens/Explore';
import MyWishlist from '../screens/MyWishlist';
import User from '../screens/User';
import HotelDetail from '../screens/HotelDetail';
import Home from '../screens/Home';
import TicketBook from '../screens/TicketBook';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  const theme = useContext(themeContext);
  const [darkMode,setDarkMode] = useState('false')

  return (
    <Tab.Navigator
    screenOptions={{
      // BottomTabBarHeight:30,
      tabBarStyle: { position: 'absolute',height:70,paddingBottom:10,paddingTop:10,backgroundColor:theme.bg},
      tabBarLabelStyle: {
        fontSize: 15,
      },
      tabBarShowLabel:false,
    }}>
    
    <Tab.Screen name="Home" component={Home} 
    options={{
      // tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>Home</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name="home-outline" size={25} 
        color={focused ? Colors.primary : Colors.disable} />
      },
      headerShown:false,
    }}
    />
  
    <Tab.Screen name="Explore" component={Explore}
     options={{
      // tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>Explore</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name="grid-outline" size={25}
        color={ focused ? Colors.primary : Colors.disable} />
      },
      headerShown:false,
    }} />

<Tab.Screen name="TicketBook" component={TicketBook}
     options={{
      // tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>User</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Icons name="ticket" size={30}
        color={ focused ? Colors.primary : Colors.disable} />
      },
      headerShown:false,
    }} />

 <Tab.Screen name="MyWishlist" component={MyWishlist}
     options={{
      // tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>MyWishlist</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name="heart-outline" size={25}
        color={focused ? Colors.primary : Colors.disable} />
      },
      headerShown:false,
    }} />

<Tab.Screen name="Profile" component={Profile}
    options={{
      // tabBarShowLabel:true,
      tabBarLabel: ({focused, color,}) => (
        <Text style={{color: focused ? Colors.primary : Colors.disable,fontFamily:'PlusJakartaSans-Regular'}}>Profile</Text>
      ),
      tabBarIcon:({focused,color}) => {
        return <Ionicons name="person-outline" size={25}
        color={focused ? Colors.primary: Colors.disable} />
      },
      headerShown:false,
    }} />

  </Tab.Navigator>
  );
}


