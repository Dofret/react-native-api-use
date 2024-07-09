import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserDatas = ({item},) => {
  return (
    <View style={styles.container} >
      <Image
      style={styles.img}
      source={{ uri: item.picture.medium }}
      ></Image>
      <Text style={{fontWeight:"bold",fontSize:20}}>{item.name.first} {item.name.last}</Text>
      <Text style={{fontSize:15}}>Email: 
        <Text style={{fontSize:13,fontStyle:"italic"}}> {item.email}</Text>
      </Text>
    </View>
  )
}

export default UserDatas

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        alignItems:"center",
        marginVertical:10,
        borderRadius:10,
        padding:5,
        
    },
    img:{
        width:100,
        height:100,
        borderRadius:50,
    }
})