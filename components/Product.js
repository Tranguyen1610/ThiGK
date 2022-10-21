import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-ratings'

export default function Product({item}) {
  return (
    <View style={{backgroundColor:'#D0D4D3', marginTop:10,width:200}}>
        {/* <Image
            source={{item.im}}
            style={{width:100,height:100}}/> */}
        <Text>{item.name}</Text>
        <View>
            <Text>{item.price}</Text>
            <Rating
                startingValue={5}
                ratingCount={5}
                imageSize={20}
                />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})