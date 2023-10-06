import React,{Fragment} from 'react'
import { Image,Text ,Fra} from 'react-native'
import styles from './styles';



export default function BannerMovies(){

    return(
             <>

            <Text style = {styles.textBanner}> Em cartaz  </Text>

            <Image style = {styles.imageBanner}source={require(`../../Img/${Math.floor(Math.random()*(4-1)+1)}.jpg`)} />

            </>


    );


}