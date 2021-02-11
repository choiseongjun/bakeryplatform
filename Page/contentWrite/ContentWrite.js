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
import {Picker} from '@react-native-picker/picker';
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';
import Textarea from 'react-native-textarea';
import * as ImagePicker from 'react-native-image-picker';

const ContentWrite = () => {

    const [title,setTitle] = useState('');
    const [text,setText] = useState('');
    const [ img, setImageSource ] = useState("");  // 이미지를 img변수에 할당시킬겁니다!
    const [language, setLanguage] = useState("bakerycontent");

    const pickImg = ()=>{
   
        ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
                setImageSource(response.uri);
              console.log(response);
              // let ImageFile ={
              //   uri:response.uri
              // }
              // console.log('sdfdf')
              
            },
        )
    }  
    const onChangeText = (item)=>{
        console.log(item)
    }
    
    return (
        <View style={{backgroundColor: COLORS.white,height:1000}}>
            <View style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop:30}}>
                <Picker
                selectedValue={language}
                style={{height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) =>
                    setLanguage(itemValue)
                }>
                    <Picker.Item label="베이커리 컨텐츠" value="bakerycontent" />
                    <Picker.Item label="자유로운 컨텐츠" value="freecontent" />
                </Picker>
            </View>
            <View style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop:30}}>
             
                    
                    <TextInput
                        style={{ height: 50, borderColor: 'gray',width:350, borderWidth: 1,opacity:0.5,fontSize:SIZES.base*2.2}}
                        onChangeText={text => setTitle(text)}
                        value={title}
                        placeholder='제목을 입력해주세요.' 
                    />       
                    <View style={{width:'85%'}}> 
                        <Textarea
                                containerStyle={styles.textareaContainer}
                                style={styles.textarea}
                                onChangeText={onChangeText}
                                defaultValue={text}
                                placeholder={'자유롭게 써주세요:)'}
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                            />
                    </View>
            </View>
            <View style={{left:30}}>
                <TouchableOpacity style={styles.imgWrapper} onPress={()=>pickImg()}>
                    <Image source={icons.camera}  style={{width:70,height:70}}/>
                    
                </TouchableOpacity>  
                <Image source={{uri: img}} style={{width:100,height:100}}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textareaContainer: {
      height: 300,
      padding: 5,
      backgroundColor: COLORS.white,
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 300,
      fontSize: 24,
      color: '#333',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
  });
export default ContentWrite
