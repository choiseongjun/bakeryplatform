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


const RecommandHeader = ({setWriteVisible}) => {


    return (
        <View style={styles.container}>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.white,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius,
                        }}
                    > 
                        <Text style={{fontSize:SIZES.base*2.5,fontFamily:'NotoSans-Black'}}>빵집 후기 </Text>
                    </View>
                </View>

              
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        paddingLeft: SIZES.padding * 2,
        paddingRight: SIZES.padding * 2,
        backgroundColor: COLORS.white,
    }
})
export default RecommandHeader;

