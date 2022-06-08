import React, { useState }  from 'react';
import { StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import { ScrollView, View, Image, Text, Box, Center, } from "native-base";
import { LinearGradient } from 'expo-linear-gradient';
import Wish from './wish';



const WishListScreen = () => {

  const [task, setWish] = useState();
  const [taskItems, setWishItems] = useState([]);

  const handleAddWish = () => {
    Keyboard.dismiss();
    setWishItems([...taskItems, task])
    setWish(null);
  }

  const deleteWish = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)

    setWishItems(itemsCopy)

  }


  return (
    <Center bg="#F9FBFF" w="100%" h="100%">
      <ScrollView >
        <Box  w="343" h="570" padding="2" mt="2" mx="auto" borderTopRadius="166" >
        <LinearGradient borderTopRadius="166"
        // Background Linear Gradient
        colors={['#EDEFF2', '#FFFDFD00']}
        style={styles.background}
        />
         
          <Image  ml="50" w="224" h="85"
            source={{uri:'https://raw.githubusercontent.com/leeecch/mid/main/make%20a%20wish%20(1).png'}}
            alt='make a wish'
          />
         
          <View style={styles.items}>

            {
              taskItems.map((item, index) => {
                return (
                  <TouchableOpacity key={index} onPress={() => deleteWish(index)}>
                    < Wish text={item} />
                  </TouchableOpacity>
                )
               
              })
            }

            {/*<Wish text={'Wish 1'}/>
            <Wish text={'Wish 2'}/> */}
          </View>

          <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.writeWishWrapper}
            >
              <TextInput style={styles.input} placeholder={'Make a wish'} value={task} onChangeText={text => setWish(text)}/>

              <TouchableOpacity onPress={() => handleAddWish()}>
                <View style={styles.addWish}>
                  <Text style={styles.add}>+</Text>
                </View>
              </TouchableOpacity>
            </KeyboardAvoidingView>
            
          
         
        </Box>    

      </ScrollView>      
    </Center>

  );
}

const styles=StyleSheet.create({

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    borderRadius:166
  },
  items: {
    marginTop:30,
  },
  writeWishWrapper:{
    position:'absolute',
    bottom: 20,
    width:'90%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginLeft:25,
    marginRight:25
  },
  input:{
    paddingVertical:12,
    paddingHorizontal:15,
    backgroundColor:'#F9FBFF',
    borderRadius:60,
    borderColor:'#1D2942',
    borderWidth:1,
    width:230,
  },
  addWish:{
    width:28,
    height:28,
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#1D2942',
    borderWidth:1,
  },
  add:{

  }

});


export default WishListScreen;