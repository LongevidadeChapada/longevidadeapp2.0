import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function How( {navigation}) {
    navigation.setOptions({
        headerTitle: 'Quem Somos'
    })
 return (
    <View style={style.container}>
        <ImageBackground source={require('../../assets/TelaPrincipal.jpeg')} style={style.image}> 
      
      </ImageBackground>
      <View style={style.textcontainer}>
          <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>
       
        </View>
        
        <ScrollView style={style.scrow}>
           <Image source={require('../../assets/logo.png')} style={style.logo} />
           <Text style={[style.text, {color: '#747482',fontSize:20, } ]} >Projeto de educação Ambiental</Text> 
           <View style={style.line} />
            <Text style={[style.texto, {color: '#380202'},]}>      São as plantas que curam, que fortalecem e alimentam os seres vivos; por isso, nós da Fazenda San German desenvolvemos para você um Projeto de Educação Ambiental, o qual lhe possibilitará conhecer dezenas de espécies (distante no meio urbano) que ajudam a curar e fazem parte da vida. Não se preocupe, nós lhe mostramos o caminho a seguir para chegar até cada espécie; e quando lá estiver, você conhecerá tudo sobre elas. Nós sabemos o quanto isso é importante para a saúde física e mental, e pensando também na sua comodidade em aprender, caso você não queira seguir o caminho traçado pela própria natureza para visitar uma espécie, nós disponibilizamos todos os dados na palma de sua mão. E não para por aí, no momento em que você estiver caminhando na Fazenda San German e encontrar uma espécie que lhe agrade ou que lhe chame a atenção, basta apontar o seu dispositivo para o QR code na placa de identificação e o nosso aplicativo abrirá todas as informações sobre ela. Opa ... ainda tem mais! Você prefere seguir pelas trilhas com cachoeira e praia? Nós também pensamos em você, e traçamos uma rota que integra o útil ao agradável. Com o turismo educativo associamos a cultura ao prazer de conhecer! Bom proveito, bom estudo e bom passeio!</Text>
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
        left: '15%'
        
        
        
    
      },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        textAlign: 'center'
      },
    texto:{
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'justify'
    },
    logocontainer:{
    
        flexDirection: 'row',
        position: 'absolute',

        
        
        
    
      },
    logo:{
        justifyContent: 'center',
        position: 'relative',
        width: 190,
        height: 190,
        right: '-23%',
        
  
      },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth:2, 
        top: '35%',

    },
    scrowcontainer:{
    
        flexDirection: 'row',
        position: 'absolute',
        top: '26%',

        left: '10%'     
    
      },
      scrow:{
    
        
        marginTop: '9%',
        marginBottom: '20%',
        paddingHorizontal: 13,
       
    
      },

    
  });