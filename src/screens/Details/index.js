import React from 'react'
import {View, Text, Image} from 'react-native'
import { useRoute } from '@react-navigation/native'
import ale from './style';

export default function Details(){

    const routes = useRoute();
    return(
            <View>  
              
              <center>
               <Text> {routes.params.titulo} </Text>
               <Text>{routes.params.nota}   </Text>
               <Image style={ale.images} source ={require(`../../Img/${routes.params.imagem}`)} />
               </center>
  
            </View> 
    
        )


}