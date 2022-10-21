import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import {useItemState} from '../Provider'
import Product from '../components/Product'

const DATA=[
  {id:'1',
  name:'Stabuck Coffee',
  img:'../assets/Caramel.png',
  price:'150$'},
  {id:'1',
  name:'Stabuck Coffee',
  img:'../assets/Caramel.png',
  price:'150$'},
  {id:'1',
  name:'Stabuck Coffee',
  img:'../assets/Caramel.png',
  price:'150$'},
]
export default function MainScreen() {
  // const {product,setProduct,list,setList} =useItemState();
  // const [list, setList] = useState([]);
  // setList(DATA);
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.hi}>
          <Text style={{fontSize:16}}>Good morning, Indro!</Text>
          <Image
          source={require('../assets/Group10.png')}
          style={{
            width:50, 
            height:50,
            marginLeft:10,
            borderRadius:100,
          }}/>
        </View>
        <View style={{
          marginTop:10,
          padding:10,
          display:'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center',
          borderWidth:1,
          borderRadius:10,
          backgroundColor:"#D0D4D3",
        }}>
          <TextInput
            style={{ 
              width:300,
              marginRight:10,
            }}
            placeholder='Find the coffee for you!'/>
            <TouchableOpacity style={{backgroundColor:'#fff',borderRadius:100,width:40,height:40, alignItems:'center',justifyContent:'center'}}>
              <Image
                source={require('../assets/Group8.png')}
                style={{width:25,height:25}}/>
            </TouchableOpacity>
        </View>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          marginTop:30,
        }}>
          <TouchableOpacity
            style={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-around',
              width:150,
              backgroundColor:'#23E1AD',
              borderRadius:20,
              padding:10,
            }}>
            <Image source={require('../assets/coffee_glass.png')}
              style={{
                width:40,
                height:40,
              }}/>
            <Text
              style={{
                fontSize:17,
              }}>coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-around',
              width:150,
              backgroundColor:'#9BCDBF',
              borderRadius:20,
              padding:10,
            }}>
            <Image source={require('../assets/coffee_glass.png')}
              style={{
                width:40,
                height:40,
              }}/>
            <Text
              style={{
                fontSize:17,
              }}>Snack</Text>
          </TouchableOpacity>
        </View>
        <View 
          style={{
            marginTop:20,
            backgroundColor:"#D0D4D3",
            padding:10,
            borderRadius:10,
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <Text style={{
            fontSize:18,
            width:200,
          }}>50% Disscount for All Purchase This Morning</Text>
          <Image source={require('../assets/coffee.png')}
              style={{
                width:100,
                height:100,
              }}/>
        </View>
        <View style={{
          marginTop:20,
        }}>
          <Text style={{fontSize:20,fontWeight:'700'}}>Recommendation</Text>
          <FlatList
            data={DATA}
            renderItem={({item})=>
              <Product
                item={item}/>}/>
        </View> 
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:10,
  },
  hi:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    
  }
})