import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { icons, SIZES, COLORS,images } from '../../constants';
const TopTitle = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>쌀쌀해지는 요즘,</Text>
            <Text style={styles.mainTitle}>이런 종류의 베이커리는 어떠세요?</Text>
            <View style={styles.hashTagList}>
                <Text style={styles.hashTag}>#마카롱</Text>
                <Text style={styles.hashTag}>#앙버터</Text>
                <Text style={styles.hashTag}>#크로와상</Text>
            </View>
            <View>
            <Image
                        source={images.bread}
                        resizeMode="contain"
                        style={{
                            width: 350,
                            height: 500,
                            color:COLORS.darkgray
                        }}
                    />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container:{
        top:30,
        left:30
    },
    mainTitle:{
        fontSize:SIZES.base*3,
        fontWeight:'bold',
        marginTop:15,
        fontFamily:'NotoSans-Black' 
    },
    hashTagList:{
        marginTop:30,
        display:'flex',
        flexDirection: 'row',
    },
    hashTag:{
        marginLeft:10
    }
})
export default TopTitle
