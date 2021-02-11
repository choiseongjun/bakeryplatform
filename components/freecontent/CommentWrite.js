import React,{useState} from 'react'
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
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';

const CommentWrite = () => {
    const [comment,setComment] = useState('');
    return (
        <View style={{height:70,backgroundColor:COLORS.white,borderTopColor:COLORS.darkgray,borderTopWidth:1}}>
            <View style={{display: 'flex',flexDirection: 'row'}}>
            <TextInput
                style={styles.inputbox}
                placeholder="자유롭게 댓글을 입력해주세요!"
                onChangeText={text => setComment(text)}
                value={comment}
            />
            <TouchableOpacity
                style={{marginTop:18}}
                    activeOpacity={1}>
                <Text style={{fontSize:SIZES.base*2.8}}>등록</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputbox:{
        height: 60,
        fontSize:19,
        width:'80%', 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        marginTop:10,
        paddingLeft:30

    },
})
export default CommentWrite
