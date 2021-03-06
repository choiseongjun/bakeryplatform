import React,{useState,useEffect} from 'react'
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


const ContentWrite = ({navigation,route}) => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [imageId,setImageId] = useState('');
    const [img, setImageSource ] = useState('');  // 이미지를 img변수에 할당시킬겁니다!
    const [category, setCategory] = useState(1);

    useEffect(() => {
        console.log(route.params)      
        if(route.params!==undefined){
            console.log('route.params.bakeryId',route.params.bakeryId)
        }
    },[])

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
                    // setImageSource(img.concat(response.data.url));
                    // setImageId(imageId.concat(response.data.id));
                    setImageSource(response.data.url);
                    setImageId(response.data.id)
                })
                .catch(function (error) {
                console.log(error);
                });
            },
        )
  
    }  
 
    const writeContent = () =>{


        if(title === '')
            return Alert.alert('제목을 입력해주세요.');
        if(content === '')
            return Alert.alert('내용을 입력해주세요.');
        if(route.params!==undefined){
            console.log('route.params.bakeryId',route.params.bakeryId)
            let bakeryKey = parseInt(route.params.bakeryId);
            axios.post('/contents/write',{imageId:imageId,title:title,content:content,categoryKey:parseInt(category),bakeryKey:bakeryKey})
            .then(function (response) {
                setTitle('');
                setContent(''); 
                setImageId('');
                setImageSource('');
                setCategory('1')
                navigation.navigate('추천글');
                Alert.alert('글 등록이 완료되었습니다.');
                
            }) 
            .catch(function (error) {
            console.log(error);
            }); 
        }else{
            axios.post('/contents/write',{imageId:imageId,title:title,content:content,categoryKey:parseInt(category)})
            .then(function (response) {
                setTitle('');
                setContent(''); 
                setImageId('');
                setImageSource('');
                setCategory('1')
                navigation.navigate('컨텐츠');
                Alert.alert('글 등록이 완료되었습니다.');
                
            }) 
            .catch(function (error) {
            console.log(error);
            }); 
        }
        
        
    }
    
    return (
        <ScrollView>
            <View style={{backgroundColor: COLORS.white,height:'auto',flex:1}}>
                <ContentWriterHeader writeContent={writeContent}/>
                {route.params===undefined &&
                <View style={{display: 'flex',marginTop:30,marginLeft:20}}>
                    <Picker
                    selectedValue={category}
                    style={{height: 50, width: 200}}
                    onValueChange={(itemValue) =>{
                        setCategory(itemValue) 
                    }}>
                        <Picker.Item label="베이커리 컨텐츠" value="1"/>
                        <Picker.Item label="자유로운 컨텐츠" value="2" />
                    </Picker>
                </View>
                }
                
                <View style={{flex:1,left:30,marginTop:60,display: 'flex',flexDirection: 'row',flexWrap: 'wrap',width:'80%'}}>
                    <TouchableOpacity style={styles.imgWrapper} onPress={()=>pickImg()}>
                        <Image source={icons.camera}  style={{width:70,height:70}}/>
                        <Text>제목 사진(필수x)</Text>
                    </TouchableOpacity>  
                    <Image source={{uri: img}} style={{width:100,height:100,marginLeft:30}}/>
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
