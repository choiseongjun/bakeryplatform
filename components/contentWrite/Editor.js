import React,{useState} from 'react'
import {RichEditor,RichToolbar,actions} from 'react-native-pell-rich-editor';
import {View,Text,ScrollView} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';

const Editor = ({setContent}) => {
    const richText = React.createRef();
    const [editorFocus,setEditorFocus] = useState(false);
    const [ imageSource, setImageSource ] = useState(null);
    const onPressAddImage = () => {
        // insert URL
        // richText.current?.insertImage(
        //     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
        //     'background: gray;',
        // );
        // ImagePicker.openPicker({includeBase64:true}).then(image => {
        //     console.log(image[0]);
        //     richText.current?.insertImage(`data:${image[0].mime};base64,${image[0].data}`);
        //   });
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
                    richText.current?.insertImage(response.data.url);
                })
                .catch(function (error) {
                console.log(error);
                });
               
              
            },
        )
        // insert base64
        // richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
       
       
    }
    const handleChange =(html) => {
        setContent(html) 
        // this.richHTML = html;
        // this.setState({a: Math.random});
    }
    const handleFocus = () =>{
        setEditorFocus(true);
    }
    const handleBlur = () => {
        setEditorFocus(false);
    };
    return (
    <View>
         <RichToolbar editor={richText}
            actions={[
                actions.setBold,
                actions.setItalic,
                actions.insertBulletsList,
                actions.insertOrderedList,
                actions.insertImage,
                'customAction',
            ]}
            onPressAddImage={onPressAddImage}
        />
        <ScrollView style={{height:'auto'}}>
            <RichEditor
                    ref={richText}
                    onChange={handleChange} 
                    style={{minHeight:500,flex:1}}
                    placeholder={'내용을 입력해주세요.'}
                    initialContentHTML={''}
                    />
        
        </ScrollView>
       
    </View>
    
    )
}
export default Editor;