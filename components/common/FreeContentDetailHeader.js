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

const FreeContentDetailHeader = ({navigation}) => {
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
                    onPress = {()=>navigation.goBack()}
                >  
                     <Image
                      style={{ width: 15, height: 20 }}
                      source={icons.blackback} 
                    />
                </TouchableOpacity>

              
                <TouchableOpacity
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
        backgroundColor: COLORS.white,
    }
})
export default FreeContentDetailHeader;

