import React,{ useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image}from 'react-native';
import { AntDesign } from "@expo/vector-icons";


const Task = (props) =>{

    const [check,updatecheck]=useState(false)

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
            <TouchableOpacity  
            onPress={()=>updatecheck(!check)}
          >
            {check?
              <Image
              style={styles.moon}
              source={{uri: 'https://raw.githubusercontent.com/leeecch/final/main/Property%201%3Ddone.png'}}/>
              :<Image
              style={styles.moon}
              source={{uri: 'https://raw.githubusercontent.com/leeecch/final/main/Property%201%3DDefault.png'}}/>
              
            }
            
          </TouchableOpacity>

                <View style={styles.textline}>
                    <Text style={styles.itemText}>{props.text}</Text>
                    <Text style={styles.line}> ────────────── </Text>
                </View>
                <TouchableOpacity onPress={() => props.deleteTask()}>
                    <AntDesign style={styles.delete} name="delete" size={20} color='#fff' />
                </TouchableOpacity>
                
            </View>
           


        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        width:304,
        padding:5,
        paddingLeft:18,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom: 10,
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
    },
    moon:{
        width:24,
        height:24,
        color:'#1D2942',
        paddingRight:10,
    },
    textline:{
        flexDirection:'column',
    },
    itemText:{
        maxWidth:'80%',
        paddingLeft:8,
        fontSize:14
    },
    line:{
        color:'#1D2942'
    },
    delete:{
        paddingLeft:8,
        color:'lightslategrey'
    }

});

export default Task;
