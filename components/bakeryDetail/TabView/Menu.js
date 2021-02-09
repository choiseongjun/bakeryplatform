import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Menu = () => {
    const menuData = [
        {"name":"앙버터","price":"1000"},
        {"name":"마블초코","price":"1000"},
        {"name":"치즈 다망드","price":"1000"},
        {"name":"블루베리 오슈","price":"6000"},
        {"name":"펌퍼니클","price":"4000"},
        {"name":"탕종식빵","price":"5000"},
        {"name":"미니탕종식빵","price":"3000"},
        {"name":"쇼콜라 클래식","price":"4000"},
    ]
    const aData = {"name":"ggg","price":"dsff"}

    useEffect(() => {

    },[])

    return (
        <View style={styles.container}>
                {menuData.map(item=>{
                    <Text>{item.name} 11</Text>
                })} 
                <Text>menu{aData.name}{menuData[0].name}</Text>
        </View>
    )  
} 
const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
        flex: 1,
    },
})
export default Menu
