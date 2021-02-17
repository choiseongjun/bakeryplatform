import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

import { icons, COLORS,SIZES, FONTS } from '../../constants';

const TagBox = ({navigation, tagname, isSpecial, setModalOpen}) => {
  
  const [isClicked, setIsClicked] = useState(false);
  const optionFeature = {
    ImageWidth: 18,
    ImageHeight: 18,
    ImageBgColor: COLORS.lightGray,
    ImageBorder: 0,
    ImageBorderColor: COLORS.lightGray,
    color: 'black'
  }
  if(tagname == '+') {
    optionFeature.ImageWidth = 0;
    optionFeature.ImageHeight = 0;
    optionFeature.ImageBgColor = 'white';
    optionFeature.ImageBorder = 1;
    optionFeature.ImageBorderColor = COLORS.deepDarkGray;
    optionFeature.color = COLORS.darkgray
  } else if(tagname == '입력해주세요') {
    optionFeature.ImageWidth = 0;
    optionFeature.ImageHeight = 0;
    optionFeature.ImageBgColor = 'white';
    optionFeature.ImageBorder = 1;
    optionFeature.ImageBorderColor = COLORS.deepDarkGray;
    optionFeature.color = COLORS.darkgray
  }
  return (
          isClicked ?
            <TouchableOpacity 
            onPress={() => {
              setIsClicked(false)
              if(tagname == '+') {
                  setModalOpen(true);
              }
            }}
            style={[
              styles.container, 
                {
                  backgroundColor:optionFeature.ImageBgColor, 
                  borderWidth: optionFeature.ImageBorder,
                  borderColor: optionFeature.ImageBorderColor
                }
              ]}
            >
              <Text style={[styles.tagText, {marginLeft: 3, marginRight: 2, color: optionFeature.color}]}>{tagname}</Text>
              <Image source={icons.closeBtn2} style={{width:optionFeature.ImageWidth, height:optionFeature.ImageHeight}} />
            </TouchableOpacity>
          :
            <TouchableOpacity disabled={isSpecial}
              onPress={() => {
                setIsClicked(true)
              }}
              style={[
                styles.container, 
                {
                  backgroundColor:'white', 
                  borderWidth: 1, 
                  borderColor: COLORS.deepDarkGray
                }
                ]}
            >
            
            <Text style={[styles.tagText, { color: COLORS.darkgray}]}>{tagname}</Text>
          </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    minWidth: 30,
    height: 30,
    marginRight: 10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    padding: SIZES.padding * 0.6,
    marginBottom: 6
  },
  tagText: {
    fontWeight:'bold'
  }
})

export default TagBox