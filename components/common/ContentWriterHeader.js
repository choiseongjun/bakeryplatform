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

const ContentWriterHeader = ({writeContent}) => {
    return (
        <View style={styles.container}>
                {/* <TouchableOpacity
                    style={{
                        width: 100,
                        height: 50,
                        justifyContent: 'center',
                        display:'flex',
                        alignItems:'flex-start'
                    }}
                    onPress = {()=>setWriteVisible(false)}
                >  
                    <Text style={{ fontSize:SIZES.base*2.5,fontWeight: 'bold' }}>취소</Text>
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                            marginRight:50
                        }}
                    >
                        <Text style={{fontSize:SIZES.base*2.5,fontWeight: 'bold'}}>아띠85도베이커리 </Text>
                    </View>
                </View> */}

                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        top:10,
                        right:20,
                        position: 'absolute',
                    }}
                    onPress = {() =>writeContent()}
                >
                   <Text style={{fontSize:SIZES.font*1.2,fontWeight: 'bold',paddingLeft:7,borderRadius:7,paddingTop:3,width:50,height:30,backgroundColor:COLORS.black,color:COLORS.white }}>등록</Text>
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
export default ContentWriterHeader

