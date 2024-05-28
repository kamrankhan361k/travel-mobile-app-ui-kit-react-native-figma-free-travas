import { View, Text,SafeAreaView,TouchableOpacity,TextInput,Image,ScrollView,StatusBar,KeyboardAvoidingView} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';


export default function Signup() {
    
    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [darkMode,setDarkMode] = useState(false)

    return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,paddingTop:10}]}>
      <KeyboardAvoidingView style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
       {/* <StatusBar backgroundColor={darkMode === true ? '#000':'#fff'} barStyle={darkMode === true  ? 'light-content' : 'dark-content'} translucent={false}/> */}
       <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
        <AppBar 
            color={theme.bg}
            title='Sign Up'
            titleStyle={{color:theme.txt, fontFamily:'PlusJakartaSans-Bold'}}
            centerTitle={true}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Avatar.Icon icon="arrow-left"  
            style={{backgroundColor:theme.icon,}}  
            color={theme.txt} size={45}
            />
            </TouchableOpacity>
        }/>


   <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{paddingTop:30,marginBottom:15}}>
        <Text style={[style.logintitle,{color:theme.txt}]}>Complete your account</Text>
        <Text style={[style.txt1,{textAlign:'center',color:theme.disable}]}>Lorem ipsum dolor sit amet</Text>
      </View>
      <View style={{flex:1,paddingTop:30}}>
        <Text style={{color:Colors.disable,fontWeight:'500', fontFamily:'PlusJakartaSans-Regular'}}>First Name</Text>
        <View style={{paddingTop:10}}>
                    <TextInput placeholder='Enter Your First name'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.intxt}
                    style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
                    />
         
        </View>
        <View style={{paddingTop:15}}>
        <Text style={{color:Colors.disable,fontWeight:'500', fontFamily:'PlusJakartaSans-Regular'}}>Last Name</Text>
        <View style={{paddingTop:10}}>
                    <TextInput placeholder='Enter Your last name'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.intxt}
                    style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
                    />
          </View>
      </View>

      <View style={{paddingTop:15}}>
        <Text style={{color:Colors.disable,fontWeight:'500', fontFamily:'PlusJakartaSans-Regular'}}>Email</Text>
        <View style={{paddingTop:10}}>
                    <TextInput placeholder='Enter Your Email'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.intxt}
                    style={[style.txtinput,{backgroundColor:theme.input,fontFamily:'PlusJakartaSans-Regular'}]}
                    />
          </View>
      </View>

      <View style={{paddingTop:5}}>
      <Text style={{color:Colors.disable,fontWeight:'500',paddingVertical:10, fontFamily:'PlusJakartaSans-Regular'}}>PassWord</Text>
        <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.input}]}>
                    
                    <TextInput placeholder='Enter Your Password'
                         selectionColor={Colors.primary}
                        secureTextEntry={!isPasswordVisible}
                        placeholderTextColor={Colors.intxt}
                        style={{backgroundColor:theme.input,color:Colors.disable, fontFamily:'PlusJakartaSans-Regular',flex:1}}
                    ></TextInput>
                    <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={theme.disable} size={20} />
                    </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingTop:5}}>
      <Text style={{color:Colors.disable,fontWeight:'500',paddingVertical:10, fontFamily:'PlusJakartaSans-Regular'}}>Confirm PassWord</Text>
        <View style={[style.txtinput,{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.input,}]}>

                    <TextInput placeholder='Confirm Password'
                        secureTextEntry={!isPassword}
                        placeholderTextColor={Colors.intxt}
                        style={{color:Colors.disable, fontFamily:'PlusJakartaSans-Regular',flex:1}}
                    />
                    <TouchableOpacity onPress={() => setIsPassword(!isPassword)}>
                        <Icon name={isPassword ? 'eye-off' : 'eye'} color={theme.disable} size={20}/>
                    </TouchableOpacity>
        </View>
      </View>
      <View style={{paddingVertical:30,}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Language')}
            style={style.btn}>
               <Text style={style.btntxt}>Sign Up</Text>
            </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',paddingTop:10,marginBottom:10}}>
            <Text style={style.txt1}>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={[style.txt,{color:Colors.primary,fontWeight:'500'}]}> Login</Text>
            </TouchableOpacity>
      </View>
      </View>  
    </ScrollView>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
  )
}