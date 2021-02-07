import React,{useState,useEffect} from 'react'
import {   
    View,
    Text,
  } from 'react-native';
const BakeryDetail = ({navigation,route}) => {

    useEffect(() => {
        
        console.log('route',route.params.bakeryId)
    }, [])

    return (
        <View>
            <Text>
                디테일화면 
            </Text>
        </View>
    )
}

export default BakeryDetail
