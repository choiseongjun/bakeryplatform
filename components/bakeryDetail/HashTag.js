import React,{useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { icons, images, SIZES, COLORS, FONTS } from '../../constants';



const HashTag = () => {
    const houseTypeData =[
        {
            "name":"#마카롱"
        },
        {
            "name":"#베이커리카페"
        },
        {
            "name":"#앙버터"
        },
        {
            "name":"#분위기좋은"
        }
    ]
    
    
    return ( 
        <View>
            <View style={styles.container}>
                {houseTypeData.map((item)=>
                    <TouchableOpacity
                    style={styles.button}
                    >
                        <Text style={styles.tagText}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                    
            
            </View>
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
    button: {
      backgroundColor: "#DDDDDD",
      padding: 10,
      width:'auto',
      height:50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft:10,
      marginTop:20,
    },
    tagText:{
        fontSize:SIZES.font*1.2,
        fontWeight: 'bold'
    }
  });
export default HashTag
