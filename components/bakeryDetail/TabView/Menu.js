import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../../constants';
import axios from 'axios';

const Menu = ({bakeryId}) => {
    const menuData = [
        {"name":"앙버터","price":"1000"},
        {"name":"마블초코","price":"1000"},
        {"name":"치즈 다망드","price":"1000"},
        {"name":"블루베리 오슈","price":"6000"},
        {"name":"펌퍼니클","price":"4000"},
        {"name":"탕종식빵","price":"5000"},
        {"name":"미니탕종식빵","price":"3000"},
        {"name":"쇼콜라 클래식","price":"4000"},
        {"name":"쇼콜라 클래식","price":"4000"},
        {"name":"쇼콜라 클래식","price":"4000"},
        {"name":"쇼콜라 클래식","price":"4000"},
        {"name":"쇼콜라 클래식","price":"4000"},
        {"name":"미니탕종식빵","price":"3000"},
        {"name":"미니탕종식빵","price":"3000"},
        {"name":"미니탕종식빵","price":"3000"},
        {"name":"미니탕종식빵","price":"3000"},
    ]
   
    
    const aData = {"name":"ggg","price":"dsff"}
    const [menu,setMenu] = useState([]);

    useEffect(() => {
        axios.get(`/bakery/menu/${bakeryId}`)
        .then(function (response) {
            console.log('menu',response.data)
            setMenu(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])

    return (
        <View style={styles.container}>
                {menu.map((item)=>
                    <View style={styles.menuList}>
                        <Text style={{marginLeft:30,fontSize:SIZES.base*2,fontWeight:'bold'}}>{item.menuNm}</Text>
                        <Text style={{position:'absolute',right:40}} >{item.menuPrice}</Text>
                    </View> 
                )}  
        </View>
    )  
} 
const styles = StyleSheet.create({
    container:{

    },
    menuList:{

        display: 'flex',
        flexDirection: 'row',
        marginTop:10
    }
})
export default Menu
