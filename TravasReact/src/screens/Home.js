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
// import { Avatar } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import RBSheet from 'react-native-raw-bottom-sheet';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Home() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [like, setLike] = useState(false);
    const [like1, setLike1] = useState(false);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { backgroundColor: theme.bg, marginTop: 30 }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>

                    <View >
                        <Avatar.Image source={require('../../assets/image/user.png')}
                            size={40}
                        />
                    </View>
                    <View style={{ marginLeft: 15 }}>
                        <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>Hi, Andy</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='location' color={theme.disable} size={15} />
                            <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>Netherland</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('MessageN')}>
                            <Avatar.Image
                                size={40}
                                source={theme.notification}
                                style={{ backgroundColor: theme.bg }}
                            />
                        </TouchableOpacity>

                        <View style={{ margin: 10 }}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('Messagedelete')}>
                            <Avatar.Image
                                size={40}
                                source={theme.message}
                                style={{ backgroundColor: theme.bg }}
                            />
                        </TouchableOpacity>

                    </View>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <View style={[style.inputContainer, { backgroundColor: theme.input }]}>
                        <Icons name="search" size={20} color={Colors.disable} />
                        <TextInput placeholder="search"
                            selectionColor={Colors.primary}
                            placeholderTextColor={Colors.disable}
                            style={{ flex: 1, color: Colors.active, fontFamily: 'PlusJakartaSans-Regular' }} />


                        <View style={[style.verticaldivider, { backgroundColor: Colors.disable, marginHorizontal: 10 }]}></View>
                        <Image source={theme.filter}
                            style={{ width: width / 20, height: height / 40 }}></Image>
                    </View>

                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                                <Avatar.Image size={40}
                                    source={require('../../assets/image/Airport.png')}
                                    style={{ height: height / 14, width: width / 7, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                />
                            </TouchableOpacity>

                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Airport</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Location')}>
                                <Avatar.Image size={40}
                                    source={require('../../assets/image/Taxi.png')}
                                    style={{ height: height / 14.5, width: width / 7, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                />
                            </TouchableOpacity>
                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Taxi</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                                <Avatar.Image size={40}
                                    source={require('../../assets/image/Hotel.png')}
                                    style={{ height: height / 14.5, width: width / 7, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                />
                            </TouchableOpacity>
                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Hotel</Text>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.RBSheet.open()}
                                style={{ alignItems: 'center' }}>
                                <Avatar.Image size={40}
                                    source={require('../../assets/image/more.png')}
                                    style={{ height: height / 14.5, width: width / 7, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                />
                                <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>More</Text>
                            </TouchableOpacity>
                            <RBSheet ref={ref => {
                                this.RBSheet = ref;
                            }}
                                height={350}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: theme.bg
                                    }
                                }}>
                                <View style={{ marginTop: 15, marginHorizontal: 20 }}>
                                    <AppBar
                                        color={theme.bg}
                                        title='All Service'
                                        titleStyle={{ color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }}
                                        centerTitle={true}
                                        elevation={0}
                                        leading={<TouchableOpacity onPress={() => this.RBSheet.close()}>
                                            <Avatar.Icon icon="close"
                                                style={{ backgroundColor: theme.icon, }}
                                                color={theme.txt} size={40}
                                            />
                                        </TouchableOpacity>
                                        }
                                    />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                                        
                                        <View style={{ alignItems: 'center' }}>
                                        <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/Airport.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                       </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Airport</Text>
                                        </View>


                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/Taxi.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                            </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Taxi</Text>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/Hotel.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                            </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Hotel</Text>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/villa.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                            </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Villa</Text>
                                        </View>

                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/cafe.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                            </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Cafe</Text>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/laggage.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                            </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Laggage</Text>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/ship.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                            </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Ship</Text>
                                        </View>

                                        <View style={{ alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('Location')}}>
                                            <Avatar.Image size={40}
                                                source={require('../../assets/image/camera.png')}
                                                style={{ height: height / 14.5, width: width / 6.5, alignItems: 'center', justifyContent: 'center', borderRadius: 50, backgroundColor: theme.icon }}
                                            />
                                            </TouchableOpacity>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10 }]}>Camera</Text>
                                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 10, marginTop: -6 }]}>rental</Text>
                                        </View>

                                    </View>
                                </View>
                            </RBSheet>
                        </View>

                    </View>

                    <View style={{ paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>Frequently visited</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 2, }}>
                            <View style={[style.indicator,
                            {
                                borderColor: Colors.primary,
                                borderWidth: 1,
                                paddingHorizontal: 12,
                                borderRadius: 10,
                                backgroundColor: Colors.primary,
                                alignItems: 'center',
                                // marginHorizontal:5
                            }]}>

                            </View>
                            <View style={[style.indicator,]}>
                            </View>
                            <View style={[style.indicator,]}>
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={{ flex: 1 }}>
                            <ImageBackground source={require('../../assets/image/beach.png')}
                                resizeMode='stretch'
                                style={{ height: height / 5.5, }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => setLike(!like)}>
                                        <View style={style.favorite}>
                                            <Icon name={like ? 'heart' : 'heart-outline'} size={18}
                                                color={like ? '#E53935' : Colors.active}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginTop: 5 }]}>Tahiti Beach</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <Icons name='location' size={14} color={theme.disable} />
                                <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>Polynesia, French </Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$235</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name='star' color={'#FFCD1A'}></Icon>
                                    <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                                    <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(32)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ margin: 10 }}></View>
                        <View style={{ flex: 1 }}>
                            <ImageBackground source={require('../../assets/image/mountain.png')}
                                resizeMode='stretch'
                                style={{ height: height / 5.5, }}>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={() => setLike1(!like1)}>
                                        <View style={style.favorite}>
                                            <Icon name={like1 ? 'heart' : 'heart-outline'} size={18}
                                                color={like1 ? '#E53935' : Colors.active}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                            <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold', marginTop: 5 }]}>St. Lucia Mountain</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                <Icons name='location' size={14} color={theme.disable} />
                                <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>Hawaii</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
                                <Text style={[style.txt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$182</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name='star' color={'#FFCD1A'}></Icon>
                                    <Text style={[style.subtxt, { color: '#FFCD1A', fontSize: 11, marginHorizontal: 3 }]}>4.4</Text>
                                    <Text style={[style.subtxt, { color: theme.disable, fontSize: 11 }]}>(41)</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>Tour Guide</Text>
                        <TouchableOpacity>
                            <Text style={[style.txt, { color: Colors.primary }]}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                        <ScrollView nestedScrollEnabled={true} horizontal showsHorizontalScrollIndicator={false}>

                            <TouchableOpacity onPress={() => navigation.navigate('TourGuide')}>
                                <View style={{ width: width / 1.3, height: height / 6.2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>
                                            <Image source={require('../../assets/image/guide1.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 3.5 }}
                                            />
                                            <View style={{ paddingVertical: 5, backgroundColor: 'black', borderRadius: 20, marginTop: -15, width: width / 5, alignSelf: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                                    <Text style={[style.txt, { color: '#FFFFFF', marginHorizontal: 3 }]}>4.0</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={[style.subtitle, { color: theme.txt }]}>Emilia Ricardo</Text>
                                            <Text style={[style.txt, { color: theme.disable, marginTop: 5 }]}>$25 (1 Day)</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                <Icons name='location' color={theme.txt} size={15} />
                                                <Text style={[style.txt, { color: theme.disable1, marginLeft: 5 }]}>Polynesia, French </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={{ marginHorizontal: 10 }}></View>

                            <TouchableOpacity onPress={() => navigation.navigate('TourGuide')}>
                                <View style={{ width: width / 1.3, height: height / 6.2 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View>
                                            <Image source={require('../../assets/image/guide2.png')} resizeMode='stretch'
                                                style={{ height: height / 8, width: width / 3.5 }}
                                            />
                                            <View style={{ paddingVertical: 5, backgroundColor: 'black', borderRadius: 20, marginTop: -15, width: width / 5, alignSelf: 'center' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Icon name='star' color={'#FFCD1A'} size={20}></Icon>
                                                    <Text style={[style.txt, { color: '#FFFFFF', marginHorizontal: 3 }]}>4.0</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={[style.subtitle, { color: theme.txt }]}>Jonsky Alexia</Text>
                                            <Text style={[style.txt, { color: theme.disable, marginTop: 5 }]}>$30 (1 Day)</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                                <Icons name='location' color={theme.txt} size={15} />
                                                <Text style={[style.txt, { color: theme.disable1, marginLeft: 5 }]}>South America</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            
                        </ScrollView>
                    </View>
                    <View style={{ paddingTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={[style.subtitle, { color: theme.txt }]}>On Budget Tour</Text>
                        <TouchableOpacity>
                            <Text style={[style.txt, { color: Colors.primary }]}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                    <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                        <Image source={require('../../assets/image/beach2.png')} resizeMode='stretch'
                            style={{ height: height / 8, width: width / 4 }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}>Ledadu Beach</Text>
                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 5 }]}>3 days 2 nights</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Icons name='location' color={theme.disable} size={15} />
                                <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>Australia</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                            <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$20<Text style={[style.subtxt, { color: theme.disable }]}>/Person</Text></Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('HotelDetail')}>
                    <View style={{ paddingTop: 20, flexDirection: 'row', marginBottom: 60 }}>
                        <Image source={require('../../assets/image/beach3.png')} resizeMode='stretch'
                            style={{ height: height / 8, width: width / 4 }}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={[style.subtitle, { color: theme.txt, fontSize: 18 }]}>Endigada Beach</Text>
                            <Text style={[style.subtxt, { color: theme.disable, marginTop: 5 }]}>5 days 4 nights</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Icons name='location' color={theme.disable} size={15} />
                                <Text style={[style.subtxt, { color: theme.disable, marginLeft: 5 }]}>Australia</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                            <Text style={[style.subtxt, { color: theme.txt, fontFamily: 'PlusJakartaSans-Bold' }]}>$25<Text style={[style.subtxt, { color: theme.disable }]}>/Person</Text></Text>
                        </View>
                    </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}