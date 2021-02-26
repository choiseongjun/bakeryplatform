import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput,
    useWindowDimensions
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';
import {RichEditor,RichToolbar} from 'react-native-pell-rich-editor';
import HTML from "react-native-render-html";

const DetailTitle = ({detailData,contentDetail,prevnextData,navigation, titleImage}) => {
    const richText = React.createRef();
    const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;
    const contentWidth = useWindowDimensions().width;
    React.useEffect(() => {
        console.log('vsdvsdv',contentDetail )
    },[contentDetail])

    let text = contentDetail.content;
    const handleChange = () =>{ 

    }
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{detailData.title}</Text>
            </View>
            <View style={{marginTop:15,display: 'flex',flexDirection: 'row'}}>
                <Text style={{fontSize:SIZES.base*2.1}}>{detailData.nickname}</Text>
                <Text style={{marginLeft:15}}>|</Text>
                <Text style={{marginLeft:15,fontSize:SIZES.base*2.1}}>{detailData.create_date}</Text>
            </View>
            <View style={{width:'90%',marginTop:20,borderBottomColor:COLORS.maingray}}></View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>{contentDetail.content}</Text> 
                <ScrollView style={{ flex: 1 }}>
                    <HTML source={{ html: contentDetail.content }} contentWidth={contentWidth} />
                </ScrollView>
            </View>
            <View>
                <View>
                    {prevnextData.map((item,idx)=>(
                            <View style={{marginTop:20}}>
                            <View>
                                <View style={{display: 'flex',flexDirection: 'row'}}>
                                    {idx===1?
                                        <Text>다음</Text>
                                        :
                                        <Text>이전</Text>
                                    }
                                    <TouchableOpacity
                                            onPress={()=>{navigation.replace('FreeContentDetail',{freeContentId:item.id})}}
                                    >
                                        <Text style={{marginLeft:15}}>{item.title}</Text>
                                    </TouchableOpacity>
                                </View> 
                                <View style={{width:'90%',marginTop:20,borderBottomWidth:1,borderBottomColor:COLORS.darkgray}}></View>
                            </View>
                        </View>
                        ))}
                </View>
                
                {/* <View style={{marginTop:20}}>
                    <View>
                        <View style={{display: 'flex',flexDirection: 'row'}}>
                            <Text>이전</Text>
                            <Text style={{marginLeft:15}}>{prevnextData.prevData}</Text>
                        </View> 
                        <View style={{width:'90%',marginTop:20,borderBottomWidth:1,borderBottomColor:COLORS.darkgray}}></View>
                        <View style={{display: 'flex',flexDirection: 'row',marginTop:15}}>
                            <Text>다음</Text>
                            <Text style={{marginLeft:15}}>{prevnextData.nextData}</Text>
                        </View>
                    </View>
                </View> */}
                {/*
                    {prevnextData.map((item,idx)=>(
                        <View style={{marginTop:20}}>
                        <View>
                            <View style={{display: 'flex',flexDirection: 'row'}}>
                                {idx===1?
                                    <Text>다음</Text>
                                    :
                                    <Text>이전</Text>
                                }
                                <TouchableOpacity
                                        onPress={()=>{navigation.replace('FreeContentDetail',{freeContentId:item.id})}}
                                >
                                    <Text style={{marginLeft:15}}>{item.title}</Text>
                                </TouchableOpacity>
                            </View> 
                            <View style={{width:'90%',marginTop:20,borderBottomWidth:1,borderBottomColor:COLORS.darkgray}}></View>
                        </View>
                    </View>
                    ))}
                */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        width:280,
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    titleText:{
        fontFamily:'NotoSans-Black',
        fontSize:SIZES.base*3.4
    },
    contentContainer:{
        marginTop:50,
        flexDirection: 'row',
        display: 'flex',
        width:350,
        flexWrap:'wrap'
    },
    contentText:{
        fontSize:SIZES.base*3
    },
})
export default DetailTitle
