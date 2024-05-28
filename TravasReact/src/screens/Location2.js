import {
    View, Text,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    FlatList,
    TextInput,
    ImageBackground,
    ScrollView
} from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-elements/dist/helpers'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Location2() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ImageBackground source={theme.location} resizeMode='stretch'
                style={{ height: height, width: width, marginTop: -20 }}>
                <View style={{ marginHorizontal: 20, marginTop: 40, flex: 0.5 }}>
                    <AppBar
                        color={theme.bg}
                        title='Airport'
                        titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                        centerTitle={true}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Location')}>
                            <Avatar.Icon icon="arrow-left"
                                style={{ backgroundColor: theme.icon, }}
                                color={theme.txt} size={40}
                            />
                        </TouchableOpacity>
                        } />
                </View>

                <View style={{ flex: 0.25, backgroundColor: theme.bg, marginHorizontal: 20, marginBottom: -170, borderRadius: 15 }}>
                    <View style={{ marginHorizontal: 20 }}>

                        <View style={{ paddingTop: 20, flexDirection: 'row', width: width / 1.9, }}>
                            <Image source={require('../../assets/image/l1.png')} resizeMode='stretch'
                                style={{ height: height / 8, width: width / 4 }}
                            />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={[style.subtitle, { color: theme.txt, fontSize: 16, }]}>San Francisco International Airport</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                    <Text style={[style.subtxt, { color: '#FFCD1A', marginHorizontal: 3 }]}>4.4</Text>
                                    <Text style={[style.subtxt, { color: theme.disable, }]}>(32)</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                    <Icons name='location' color={theme.disable1} size={15} />
                                    <Text style={[style.subtxt, { color: theme.disable1, marginLeft: 5 }]}>San Francisco</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <Avatar.Icon icon='earth' color={Colors.secondary} size={45} style={{backgroundColor:Colors.primary}}/>
                            <Avatar.Icon icon='arrow-right-top' color={theme.txt} size={45} style={{backgroundColor:theme.input}}/>
                            <Avatar.Icon icon='cards-heart-outline' color={theme.txt} size={45} style={{backgroundColor:theme.input}}/>
                            <Avatar.Icon icon='phone-outline' color={theme.txt} size={45} style={{backgroundColor:theme.input}}/>
                        </View>

                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}