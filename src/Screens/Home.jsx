import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'
import axios from 'axios'
import UserDatas from '../components/UserDatas'

const Home = () => {

    const url = 'https://randomuser.me/api/?results=10'
    const [respons,setResponse] = useState([])

    useEffect(()=>{
        axios.get(url)
        .then(res =>
        {setResponse(res.data.results)})
        .catch(error => {console.log("Api error",error);})
    },[])

  return (
    <ScrollView style={{width:"90%"}}>
      <View>
      <Text style={styles.title}>Users</Text>
      {respons.map((item,index)=>(
        <View key={index}>
            <UserDatas item={item}/>
        </View>
      ))}
    </View>
    </ScrollView>

  )
}

export default Home

const styles = StyleSheet.create({
  title:{fontSize:40,
  textAlign:"center",
  marginTop:40,
  fontStyle:"italic"
  }
})