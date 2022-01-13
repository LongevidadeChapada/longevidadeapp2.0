
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image, ImageBackground } from 'react-native';


export default function Agend( {navigation}) {
    navigation.setOptions({
        headerTitle: 'Opções de Agendamento'
    })
 return (
    <View style={style.container}>
    <ImageBackground source={require('../../assets/TelaPrincipal.jpeg')} style={style.image}> 
            
       
     
    </ImageBackground>
    <View style={style.textcontainer}>
          <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>          
        
        </View> 
    <View style={style.botcontainer}>
      <TouchableOpacity style={{backgroundColor: '#022', width: 300, position: 'absolute',borderWidth:3 ,borderRadius:20, bottom:80, marginLeft: 10, alignSelf: 'center'}} onPress={()=>Alert.alert('Agendamento pelo e-mail:','contato@longevidadecomqualidade.eco.br' )}>
      <Text style={style.texto}>Agendar</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: '#022', width:300, position: 'absolute', bottom:-40, marginLeft: 10,borderWidth:3 ,borderRadius:20, alignSelf: 'center'}} onPress={()=>navigation.navigate('Riscos')}>
      <Text style={style.texto}>Riscos e Normas</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: '#022', width:300, position: 'absolute', bottom:-160, marginLeft: 10,borderWidth:3 ,borderRadius:20, alignSelf: 'center'}} onPress={()=>navigation.navigate('Aten')}>
      <Text style={style.texto}>Atenção</Text> 
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
      botcontainer:{
        flexDirection: 'row',
        position: 'absolute',
        top: '30%',
        paddingRight: 10,
        
        
      },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        textAlign: 'center',
        
          
        
      },
    texto:{
        fontFamily: 'Anton_400Regular',
        fontSize: 15,
        color: '#ffffff',
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

      textoalerta:{
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        textAlign: 'justify'
    },  
  });