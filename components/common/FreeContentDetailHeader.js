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
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        paddingLeft: SIZES.padding * 2,
        paddingRight: SIZES.padding * 2,
        backgroundColor: COLORS.white,
    }
})
export default FreeContentDetailHeader;

