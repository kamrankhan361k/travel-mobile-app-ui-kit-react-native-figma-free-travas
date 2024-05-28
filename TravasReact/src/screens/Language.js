import {  View, Text ,SafeAreaView, TextInput, StatusBar,TouchableOpacity,Image,ScrollView,ImageBackground} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';
import style from '../theme/style';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';



export default function Language() {
 
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [darkMode,setDarkMode] = useState(false)


    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:20}]}>
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
       {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
        
        <View style={{flex:2.7,marginTop:30,}}>
          <Text style={[style.subtitle,{color:theme.txt,marginBottom:10,textAlign:'center'}]}>Select your Language</Text>
          <Text style={[style.subtxt,{textAlign:'center'}]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
        

          <Text style={[style.txt1, { color:Colors.disable1,marginTop:30}]}>Language</Text>

          <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10,backgroundColor:theme.input}]}>
                    
                    <TextInput placeholder='Select Language'
                        selectionColor={Colors.primary}
                        placeholderTextColor={Colors.intxt}
                        style={{flex:1,color:theme.txt, fontFamily:'PlusJakartaSans-Regular',}}
                    ></TextInput>
                    <TouchableOpacity onPress={()=>navigation.navigate('Languagelist')}>
                        <Icon name='chevron-down' color={theme.txt} size={20} />
                    </TouchableOpacity>
        </View>
        <View style={{paddingVertical:40,}}>
            <TouchableOpacity onPress={()=>navigation.navigate('SelectExplore')}
            style={style.btn}>
               <Text style={style.btntxt}>Continue</Text>
            </TouchableOpacity>
        </View>        
        </View>
        </View>
    </SafeAreaView>
  )
}