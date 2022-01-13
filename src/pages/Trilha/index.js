

import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';


export default function Trilhas( {navigation}) {
    navigation.setOptions({
        headerTitle: 'Vídeo informativo'
    })
 return (
    <View style={style.container}>
        <ImageBackground source={require('../../assets/TelaPrincipal.jpeg')} style={style.image}> 
            
       
     
      </ImageBackground>
      <View style={style.textcontainer}>
          <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>
       
        </View>
        <View style={style.logocontainer}>
        <Image source={require('../../assets/logo.png')} style={style.logo} />      
        </View>
        <View style={style.scrowcontainer}>
        <Text style={[style.text, {color: '#747482'} ]} >Aplicativo em construção!</Text>   
        </View>
        <View style={style.line} />
        <View style={style.alertcontainer}> 
            <Text style={[style.texto, {color: '#590202'} ]}>       Maiores informações no site: www.longevidadecomqualidade.eco.br</Text>
        </View>



    </View>
  );
}

const style = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: '#fff'
    },
    header:{
      marginBottom: 0
    
    },
    image:{
      flex: 1,
      resizeMode: "cover",
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      opacity: .5,
      
    },
    textcontainer:{
        flexDirection: 'row',
        position: 'absolute',
        top: '92%',
        bottom: '0%',
        right: '0%',
        left: '15%'
        
        
        
    
      },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 25,
        
          
        
      },
    texto:{
        fontFamily: 'Anton_400Regular',
        fontSize: 19,
        
          
        
      },
    logocontainer:{
    
        flexDirection: 'row',
        position: 'absolute',
        top: '1%',
        bottom: '0%',
        right: '0%',
        left: '0%'
        
        
        
    
      },
    logo:{
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        right: '-15.5%',
  
      },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth:2, 
        top: '38%',

    },
    scrowcontainer:{
    
        flexDirection: 'row',
        position: 'absolute',
        top: '31%',
        bottom: '0%',
        right: '0%',
        left: '20%'     
    
      },
      alertcontainer:{
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        top: '0%',
        bottom: '0%',
        right: '0%',
        left: '13%'     
    
      },

    
  });