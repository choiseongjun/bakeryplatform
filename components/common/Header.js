import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';

const Header = () => {
    return (
        <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        width: 100,
                        height: 50,
                        justifyContent: 'center',
                        display:'flex',
                        alignItems:'flex-start'
                    }}
                >  
                    <Text style={{ fontSize:SIZES.base*2.5,fontWeight: 'bold' }}>앙버터</Text>
                </TouchableOpacity>

                {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>테스트ㅎ </Text>
                    </View>
                </View> */}

                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}
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
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: COLORS.darkgray,
        paddingLeft: SIZES.padding * 2,
        paddingRight: SIZES.padding * 2,
    }
})
export default Header

