import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';

const Header = ({searchVisible,setSearchVisible,setSearcListVisible,searchText,setSearchText,doSearch}) => {
    return (
        <View style={styles.container}>
                {!searchVisible ?
                <>
                    <TouchableOpacity
                    style={{
                        width: 200,
                        height: 50,
                        justifyContent: 'center',
                        display:'flex',
                        alignItems:'flex-start'
                    }}
                    >  
                        <Text style={{ fontSize:SIZES.base*2.5,fontWeight: 'bold' }}>{searchText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'flex-end'
                        }}
                        onPress={() =>{setSearchVisible(true);setSearcListVisible(true)}}
                    >
                        <Image
                            source={icons.boldSearch}
                            resizeMode="cover"
                            style={{
                                width: SIZES.base*2.5,
                                height: SIZES.base*2.6,
                                color:COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                </>
                :
                <>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 50,
                        justifyContent: 'center',
                        display:'flex',
                        alignItems:'flex-start'
                    }}
                    onPress = {() =>setSearchVisible(false)}
                    >   
                        {/* <Text style={{ fontSize:SIZES.base*2.5,fontWeight: 'bold' }}>닫기</Text> */}
                        <TextInput
                            style={styles.inputbox}
                            placeholder="검색어를 입력해주세요."
                            onChangeText={text => setSearchText(text)}
                            value={searchText} 
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: 50,
                            height: 50,
                            justifyContent: 'center',
                            alignItems: 'flex-end'
                        }}
                        onPress={() =>{doSearch()}}
                    >
                        <Image
                            source={icons.boldSearch}
                            resizeMode="cover"
                            style={{
                                width: SIZES.base*2.5,
                                height: SIZES.base*2.6,
                                color:COLORS.darkgray
                            }}
                        />
                    </TouchableOpacity>
                </>
            }
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.darkgray,
        paddingLeft: SIZES.padding * 2,
        paddingRight: SIZES.padding * 2,
    },
    inputbox:{
        height: 40,
        width:300, 
        marginTop:10
    },
})
export default Header

