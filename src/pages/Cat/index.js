import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground, Alert } from 'react-native';
import contadorVideo from '../../atom/video.atom';
import { useRecoilState } from 'recoil';


export default function Cat( {navigation}) {
   
    const [ Video, setVideo] = useRecoilState(contadorVideo);
    navigation.setOptions({
        headerTitle: 'Trilhas Mapeadas'
    })
 return (
    <View style={style.container}>
        <ImageBackground source={require('../../assets/TelaPrincipal.jpeg')} style={style.image}> 
      </ImageBackground>
      <View style={style.textcontainer}>
          <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>
        </View>
        <ScrollView style={style.scrowcontainer}>
            <TouchableOpacity onPress={()=>{
              setVideo((c)=>0)
              navigation.navigate('Movies')}}>
            <Image source={require('../../assets/t1.png')} style={style.logo} />
            <Text style={[style.texto, {color: '#022'},]}> TRILHA COMPLETA</Text>
            </TouchableOpacity>

            <Text style={[style.texto, {color: '#380202'},]}>  59 espécies </Text>
            <Text style={[style.texto, {color: '#380202'},]}>Distância: 8400m </Text>
            <Text style={[style.texto, {color: '#380202'},]}>Elevação Máxima: 1100 m  </Text>
            <Text style={[style.texto, {color: '#380202'},]}> Duração Aproximada: 7h</Text>
            <Text style={[style.texto, {color: '#380202'},]}>OBS: ABERTA APENAS NO PÉRIODO DE SECA</Text>

            <TouchableOpacity onPress={()=>{
              setVideo((c)=>1)
              navigation.navigate('Movies')}}>
            <Image source={require('../../assets/t2.png')} style={style.logo} />
            <Text style={[style.texto, {color: '#022'},]}> TRILHA PARCIAL</Text>
            </TouchableOpacity>

            <Text style={[style.texto, {color: '#380202'},]}>  48 espécies </Text>
            <Text style={[style.texto, {color: '#380202'},]}>Distância: 4100m </Text>
            <Text style={[style.texto, {color: '#380202'},]}>Elevação Máxima: 1095 m  </Text>
            <Text style={[style.texto, {color: '#380202'},]}> Duração Aproximada: 5h</Text>
            <Text style={[style.texto, {color: '#380202'},]}>OBS: ABERTA DURANTE TODO O ANO</Text>
            <Text style={[style.texto, {color: '#380202'},]}></Text>
            <Text style={[style.texto, {color: '#380202'},]}></Text>
        </ScrollView>

        
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
        fontSize: 20,
        textAlign: 'center'
        
          
        
      },

    texto:{
        fontFamily: 'Anton_400Regular',
        fontSize: 15,
        textAlign: 'center'
        
          
        
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
        
        
        width: 400,
        height: 200,
        
  
      },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth:2, 
        top: '38%',

    },
    scrowcontainer:{
    
      flex:1, 
       
      marginBottom: 80,
       
      
           
    
      },
      

    
  });