import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';

const CommentBox = ({setModalOpen}) => {
    return (
        <View style={{borderTopWidth:1,borderTopColor:COLORS.darkgray}}>
            <View style={{marginTop:10}}></View>
            <View style={{display: 'flex',flexDirection: 'row'}}>
                <View style={{display: 'flex',flexDirection: 'row',marginLeft:30}}>
                    
                    <Image
                        source={icons.good}
                        resizeMode="cover"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                    <Text style={{marginLeft:10,fontSize:SIZES.base*2.7}}>9</Text>
                </View>
                <View style={{display: 'flex',flexDirection: 'row',marginLeft:30}}>
                    <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => setModalOpen(true)}>
                        <Image
                                source={icons.comment}
                                resizeMode="cover"
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setModalOpen(true)}>
                        <Text style={{marginLeft:10,fontSize:SIZES.base*2.7}}>23</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    )
}

export default CommentBox
