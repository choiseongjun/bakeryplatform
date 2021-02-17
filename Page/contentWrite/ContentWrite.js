import React,{useState} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput,
    Alert
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';
import Textarea from 'react-native-textarea';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import ContentWriterHeader from '../../components/common/ContentWriterHeader';
import Editor from '../../components/contentWrite/Editor';


const ContentWrite = ({navigation}) => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [imageId,setImageId] = useState([]);
    const [img, setImageSource ] = useState([]);  // 이미지를 img변수에 할당시킬겁니다!
    const [category, setCategory] = useState('bakerycontent');

    const pickImg = ()=>{
   
        ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
                
              console.log(response);
              // let ImageFile ={
              //   uri:response.uri
              // }
              // console.log('sdfdf')
              const data = new FormData();
              data.append('photo', {
                  uri: response.uri,
                  name: 'file_photo',
                  type: response.type,
              });

              axios.post('/common/content/photo',data)
                .then(function (response) {
                    console.log(response.data)
                    setImageSource(img.concat(response.data.url));
                    setImageId(imageId.concat(response.data.id));
                })
                .catch(function (error) {
                console.log(error);
                });
            },
        )
  
    }  
 
    const writeContent = () =>{
        console.log(content)
        axios.post('/contents/write',{imageId:imageId,title:title,content:content,category:category})
                .then(function (response) {
                    setTitle('');
                    setContent(''); 
                    setImageId([]);
                    setImageSource([]);
                    setCategory('bakerycontent')
                    navigation.navigate('컨텐츠');
                    Alert.alert('글 등록이 완료되었습니다.');
                    
                }) 
                .catch(function (error) {
                console.log(error);
                }); 
    }
    
    return (
        <ScrollView>
            <View style={{backgroundColor: COLORS.white,height:'auto',flex:1}}>
                <ContentWriterHeader writeContent={writeContent}/>
                
                <View style={{display: 'flex',marginTop:30,marginLeft:20}}>
                    <Picker
                    selectedValue={category}
                    style={{height: 50, width: 200}}
                    onValueChange={(itemValue, itemIndex) =>
                        setCategory(itemValue)
                    }>
                        <Picker.Item label="베이커리 컨텐츠" value="bakerycontent"/>
                        <Picker.Item label="자유로운 컨텐츠" value="freecontent" />
                    </Picker>
                </View>
                <View style={{flex:1,left:30,marginBottom:60}}>
                    <TouchableOpacity style={styles.imgWrapper} onPress={()=>pickImg()}>
                        <Image source={icons.camera}  style={{width:70,height:70}}/>
                        
                    </TouchableOpacity>  
                    <View style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',width:'80%'}}>
                        {img.map((item)=>(
                            <Image source={{uri: item}} style={{width:100,height:100}}/>
                        ))}
                    </View>
                </View>
                <View style={{flex:1,display: 'flex',marginLeft:20}}>
                
                        
                        <TextInput
                            style={{ height: 50, borderColor: 'gray',width:350, borderBottomWidth: 1,opacity:0.5,fontSize:SIZES.base*2.5}}
                            onChangeText={text => setTitle(text)}
                            value={title}
                            placeholder='제목을 입력해주세요.' 
                        />       
                       
                        <Editor setContent={setContent}/> 
                </View>
               
            </View>
        </ScrollView>
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
      fontSize: SIZES.base*2.2,
      color: '#333',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
  });
export default ContentWrite
