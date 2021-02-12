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

const CategoryMenuHeader = ({setCategoryMenu}) => {
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
                    onPress = {()=>setCategoryMenu(false)}
                >  
                     <Image
                      style={{ width: 15, height: 20 }}
                      source={icons.blackback} 
                    />
                </TouchableOpacity>

                <View style={{ flex: 1}}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{fontSize:SIZES.base*2.5,fontWeight: 'bold'}}>CATEGORY </Text>
                    </View>
                </View>              
                {/* <TouchableOpacity
                    style={{
                        width: 50,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'flex-end'
                    }}
                >
                   <Image
                      style={{ width: 25, height: 25 }}
                      source={icons.house}
                    />
                </TouchableOpacity> */}
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
        backgroundColor: COLORS.white,
    }
})
export default CategoryMenuHeader;

