import React,{useState} from 'react'
import {RichEditor,RichToolbar} from 'react-native-pell-rich-editor';
import {View,Text,ScrollView} from 'react-native'

const Editor = ({setContent}) => {
    const richText = React.createRef();
    const [editorFocus,setEditorFocus] = useState(false);
    const onPressAddImage = () => {
        // insert URL
        // richText.current?.insertImage(
        //     'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/100px-React-icon.svg.png',
        //     'background: gray;',
        // );
        // insert base64
        // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
       
       
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
    <ScrollView style={{height:'auto'}}>
        <RichEditor
                ref={richText}
                onChange={handleChange} 
                style={{minHeight:700,flex:1}}
                placeholder={'내용을 입력해주세요.'}
                initialContentHTML={''}
                />
    </ScrollView>
    )
}
export default Editor;