//Follow by this video: https://www.youtube.com/watch?v=Hf4MJH0jDb4&t=4s
import React ,{useState,useEffect} from "react";
import {View,StyleSheet, 
  FlatList,Alert} from "react-native"
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";
import * as uuid from 'uuid'

const App =() =>{
  const [items,setItems] =useState([
    {id: uuid.v4(), text: 'Milk!' },
    {id: uuid.v4(), text: 'Eggs!' },
    {id: uuid.v4(), text: 'Bread!' },
    {id: uuid.v4(), text: 'Juice!'}
  ]);
  // useEffect(()=>{
  //   const getTasks= async()=>{
  //     const itemsFromServer=await fetchTasks()
  //     setItems(itemsFromServer)
  //   }
  //   getTasks()
  //   }, [])
  //  //Fetch Tasks
  //  const fetchTasks= async()=> {
  //   const res =await fetch('lists.json')
  //   const data= await res.json()
  //   return data
  // }
  const deleteItem=(id)=>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id!=id);
    });
  };
  const addItem=(text)=>{
    if(!text){
      Alert.alert('Error!','Please enter an item!');
    }
    else{
      setItems(prevItems=>{
        return [{id:uuid.v4(), text:text},...prevItems]
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title='Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList 
      data={items}
      renderItem={({item})=><ListItem item={item}
      deleteItem={deleteItem}
      />}
      />
    </View>
  );
};
const styles= StyleSheet.create({
  container:{
    flex:1,
    paddingTop:10,  
  },
});
export default App;