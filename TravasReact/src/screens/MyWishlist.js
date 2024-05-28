import { View, Text,SafeAreaView,Dimensions,TouchableOpacity,TextInput,Image,ScrollView,StatusBar, ImageBackground} from 'react-native'
import React,{useState,useContext} from 'react'
import { AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-paper';
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { useNavigation } from '@react-navigation/native';

const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function MyWishlist() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [like, setLike] = useState(true);
    const [like1, setLike1] = useState(true);
    const [like2, setLike2] = useState(true);
    const [like3, setLike3] = useState(true);
    
  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,}]}>
        <View style={[style.main,{backgroundColor:theme.bg,marginTop:20}]}>
        <AppBar
            color={theme.bg}
            title="My Wishlist"
            titleStyle={{fontFamily:'PlusJakartaSans-Bold'}}
            centerTitle={true}
            elevation={0}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:20}}>

        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <ImageBackground source={require('../../assets/image/i1.png')}
                resizeMode='stretch'
                style={{height:height/5.5,}}>
                  <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={()=>setLike1(!like1)}>
                      <View style={style.favorite}>
                        <Icon name={like1?'heart':'heart-outline'}  size={18} 
                        color={like1 ? '#E53935' : Colors.active}
                        />
                      </View> 
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <Text style={[style.subtxt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>Tahiti Beach</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='location' size={14} color={theme.disable}></Icon>
                    <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>Polynesia, French </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>$235</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='star' color={'#FFCD1A'}></Icon>
                        <Text style={[style.subtxt,{color:'#FFCD1A',fontSize:11,marginHorizontal:3}]}>4.4</Text>
                        <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>(32)</Text>
                    </View>
                </View>
            </View>
            <View style={{margin:10}}></View>
            <View style={{flex:1}}>
                <ImageBackground source={require('../../assets/image/i2.png')}
                resizeMode='stretch'
                style={{height:height/5.5,}}>
                  <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={()=>setLike(!like)}>
                      <View style={style.favorite}>
                        <Icon name={like?'heart':'heart-outline'}  size={18} 
                        color={like ? '#E53935' : Colors.active}
                        />
                      </View> 
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <Text style={[style.subtxt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>St. Lucia Mountain</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='location' size={14} color={theme.disable}></Icon>
                    <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>South America</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>$182</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='star' color={'#FFCD1A'}></Icon>
                        <Text style={[style.subtxt,{color:'#FFCD1A',fontSize:11,marginHorizontal:3}]}>4.4</Text>
                        <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>(41)</Text>
                    </View>
                </View>
            </View>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
            <View style={{flex:1}}>
                <ImageBackground source={require('../../assets/image/i3.png')}
                resizeMode='stretch'
                style={{height:height/5.5,}}>
                  <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={()=>setLike2(!like2)}>
                      <View style={style.favorite}>
                        <Icon name={like2?'heart':'heart-outline'}  size={18} 
                        color={like2 ? '#E53935' : Colors.active}
                        />
                      </View> 
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <Text style={[style.subtxt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>Cappadocia</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='location' size={14} color={theme.disable} ></Icon>
                    <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>Turki</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>$282</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='star' color={'#FFCD1A'}></Icon>
                        <Text style={[style.subtxt,{color:'#FFCD1A',fontSize:11,marginHorizontal:3}]}>4.4</Text>
                        <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>(32)</Text>
                    </View>
                </View>
            </View>
            <View style={{margin:10}}></View>
            <View style={{flex:1}}>
                <ImageBackground source={require('../../assets/image/i4.png')}
                resizeMode='stretch'
                style={{height:height/5.5,}}>
                  <View style={{alignItems:'flex-end'}}>
                    <TouchableOpacity onPress={()=>setLike3(!like3)}>
                      <View style={style.favorite}>
                        <Icon name={like3?'heart':'heart-outline'}  size={18} 
                        color={like3 ? '#E53935' : Colors.active}
                        />
                      </View> 
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
                <Text style={[style.subtxt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>Hanalei Bay</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Icon name='location' size={14} color={theme.disable}></Icon>
                    <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>Hawaii</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={[style.txt,{color:theme.txt,fontFamily:'PlusJakartaSans-Bold'}]}>$182</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='star' color={'#FFCD1A'}></Icon>
                        <Text style={[style.subtxt,{color:'#FFCD1A',fontSize:11,marginHorizontal:3}]}>4.4</Text>
                        <Text style={[style.subtxt,{color:theme.disable,fontSize:11}]}>(41)</Text>
                    </View>
                </View>
            </View>
        </View>

        </ScrollView>    
    </View>
    </SafeAreaView>
  )
}