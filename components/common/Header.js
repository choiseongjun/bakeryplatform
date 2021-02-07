import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
  } from 'react-native';
import { icons, SIZES, COLORS } from '../../constants';

const Header = () => {
    return (
        <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        width: 100,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >  
                    <Text style={{ fontSize:SIZES.base*2.8,fontWeight: 'bold' }}>앙버터</Text>
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
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.search}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
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
    
      
    }
})
export default Header

