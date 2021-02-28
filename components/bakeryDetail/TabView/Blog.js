import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,FlatList,Image } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../../constants';
import { FloatingAction } from "react-native-floating-action";
import axios from 'axios';

const actions = [
    {
      text: "Accessibility",
      icon: require("./image/add.png"),
      name: "bt_accessibility",
      position: 2
    }
  ];
const Blog = ({navigation,bakeryId}) => {

    const [blogList,setBlogList] = useState([]);

    useEffect(() => {
        axios.get(`/bakery/blogList/${bakeryId}`)
        .then(function (response) {
            // handle success
            console.log(response.data)
            setBlogList(response.data)
          })
          .catch((err)=>{
            console.log(err.response)
          })
    },[])
    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={()=>navigation.navigate('FreeContentDetail',{freeContentId:item.id})}
        >
            <View style={{display: 'flex',flexDirection: 'row',width:'50%',marginTop:20}}>
                {item.url===null?
                <Image
                    source={images.content1} 
                    resizeMode="cover"
                    style={{
                        width: 150,
                        height: 150,
                    }}
                />
                :
                <Image
                    source={{uri:item.url}}
                    resizeMode="cover"
                    style={{
                        width: 150,
                        height: 150,
                    }}
                />
                }
                <View style={{marginLeft:15}}>
                    <Text style={styles.contentInnerTitle}>{item.title}</Text>
                    <Text style={{marginTop:10,fontSize:SIZES.base*2.4,color:COLORS.maingray}}>{item.nickname}</Text>
                </View>
            </View> 
        </TouchableOpacity>
    );
    return (
        <View style={styles.container}>
             <FlatList
                    data={blogList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:50,
      backgroundColor: "#fff"
    }
  });
  
export default Blog
