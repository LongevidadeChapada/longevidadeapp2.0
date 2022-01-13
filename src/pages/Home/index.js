import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation(); 
 
  return (
      
   <View style={style.container}>
     <ImageBackground 
      source={require('../../assets/TelaPrincipal.jpeg')}
      style={style.image}> 
            
       
     
      </ImageBackground>
      <View style={style.textcontainer}>
          <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>
          <TouchableOpacity style={{position: 'absolute', right:'5%', bottom:'100%', alignSelf: 'center'}} onPress={()=>Alert.alert('Alerta','As informações disponibilizadas neste aplicativo devem ser utilizadas apenas para fins informacionais. Os autores deste aplicativo se eximem de qualquer responsabilidade legal advinda da má utilização das informações aqui publicadas.')}>
           <Image style={{height:25,width:25}}source={require('../../assets/bAlerta.png')}/> 
          </TouchableOpacity>
          
        

        </View>
        <View style={style.botcontainer}>
          <TouchableOpacity style={{position: 'absolute', right:'-88%', alignSelf: 'center'}} onPress={()=>navigation.navigate('How')}>
           <Image style={{height:25,width:30, }}source={require('../../assets/bQuem.png')}/> 
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', right:'-350%', alignSelf: 'center'}} onPress={()=>navigation.navigate('Cat')}>
           <Image source={require('../../assets/bMap.png')}/> 
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', right:'-650%', alignSelf: 'center'}} onPress={()=>navigation.navigate('Plantas')}>
           <Image source={require('../../assets/bCat.png')}/> 
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', right:'-950%', alignSelf: 'center'}} onPress={()=>navigation.navigate('Agend')}>
           <Image source={require('../../assets/bAgend.png')}/> 
          </TouchableOpacity>
          <TouchableOpacity style={{position: 'absolute', top:50, right:'-950%', alignSelf: 'center'}}onPress={()=>navigation.navigate('Consult')}>
           <Image style={{height:100,width:100}}source={require('../../assets/qr.png')}/> 
          </TouchableOpacity>
          
        

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
    left: 0
    
  },
  textcontainer:{
    flexDirection: 'row',
    position: 'absolute',
    top: '92%',
    bottom: '0%',
    right: '0%',
    left: '5%'
    
    
    

  },
  botcontainer:{
    flexDirection: 'row',
    position: 'absolute',
    top: '10%',
    paddingRight: '10%',
    
    
  },
  
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 19,
    
      
    
  }
});