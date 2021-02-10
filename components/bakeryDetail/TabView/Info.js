import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../../constants';
const Info = () => {

    let infoData = {"location":"서울 관악구 쑥고개로 137","time":"매일 08:00-23:00","call":"02-876-3110","homepage":"www.atree85cafe.co.kr"};
    return (
        <View style={styles.container}>
             <View style={styles.textimage}>
                <Image
                            source={icons.location}
                            resizeMode="cover"
                            style={{
                                width: SIZES.base*2.5,
                                height: SIZES.base*3,
                                color:COLORS.darkgray,
                                top:20
                            }}
                        />
                <Text style={styles.infoText}>{infoData.location}</Text>
             </View>
            <View style={styles.textimage}>
                <Image
                            source={icons.clock}
                            resizeMode="cover"
                            style={{
                                width: SIZES.base*2.9,
                                height: SIZES.base*3,
                                color:COLORS.darkgray,
                                top:25
                            }}
                        />
                <Text style={styles.infoText}>{infoData.time}</Text>
            </View >
            <View style={styles.textimage}>
            <Image
                source={icons.call}
                resizeMode="cover"
                style={{
                    width: SIZES.base*2.9,
                    height: SIZES.base*3,
                    color:COLORS.darkgray,
                    top:25
                }}
            />
            <Text style={styles.infoText}>{infoData.call}</Text>
            </View>
            <View style={styles.textimage}>
            <Image
                source={icons.paperair}
                resizeMode="cover"
                style={{
                    width: SIZES.base*2.9,
                    height: SIZES.base*3,
                    color:COLORS.darkgray,
                    top:25
                }}
            />
            <Text style={styles.infoText}>{infoData.homepage}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        left:20,
        marginTop:40
    },
    infoText:{
        fontSize:20,
        marginTop:20,
        marginLeft:30
    },
    textimage:{
        display: 'flex',
        flexDirection: 'row'
    }
 });
export default Info
