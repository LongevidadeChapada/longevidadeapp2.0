import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView,_ScrollView , ImageBackground, StatusBar } from 'react-native';

import { useRecoilState } from 'recoil';
import contadorPlantas from '../../atom/prantas.atom';


export default function Plantas( {navigation}) {
  
  const [pranta, setPranta] = useRecoilState(contadorPlantas);
  
 

  navigation.setOptions({
    headerTitle: 'Plantas Catalogadas'
  })
  


 return (
  
  <View style={style.container}>
  <ImageBackground source={require('../../assets/TelaPrincipal.jpeg')} style={style.image}> 
</ImageBackground>
<View style={style.textcontainer}>
    <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>
  </View>
 
  <ScrollView style={style.scrowcontainer}>
  
      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>0)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Açai</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>1)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Alecrim do Cerrado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>2)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Angico</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>3)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Araça</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>4)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Arnicão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>5)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Arniquinha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>6)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Assa-Peixe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>7)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Bacurizeiro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>8)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Bananeira do Cerrado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>9)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Banha de Galinha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>10)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Barba Timão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>11)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Buriti</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>12)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Cajuí</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>13)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Candieiro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>14)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Canjiquinha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>15)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Carne de Vaca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>16)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Carvoeiro Branco</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>17)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Carvoeiro do Cerrado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>18)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Cedro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>19)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Chapéu de Couro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>20)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Copaiba</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>21)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Dormideira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>22)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Embauba</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>23)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Eucalipto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>24)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Faveleira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>25)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Goiabeira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>26)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Grão de Galo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>27)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Imburuçu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>28)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Indaia</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>29)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Ipê Amarelo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>30)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Ipê Roxo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>31)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Jacaré</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>32)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Jambo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>33)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Jambolão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>34)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Jatoba</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>35)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Jequitiba</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>36)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Landi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>37)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Mama-Cadela</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>38)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Mangabeira</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>39)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Maracujá do Mato</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>40)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Marfim</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>41)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Marinheiro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>42)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Miroro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>43)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Murici</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>44)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Mutamba</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>45)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Olho de Cabra</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>46)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Pacari</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>47)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Pata de Vaca</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>48)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Pau Santo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>49)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Pau Terra Cerrado</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>50)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Pau Terra Mata</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>51)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Pequi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>52)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Pimenta de Macaco</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>53)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Quaresmeira Roxa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>54)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Sangra d'agua</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor: '#7a9e81', borderWidth:3 ,borderRadius:20 }} onPress={()=> {
        setPranta((c)=>55)
        navigation.navigate('Infoplan')
      }}>
      <Text style={[style.texto, {color: '#ffff'},]}> Vassourinha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: '#022', borderWidth:3 ,borderRadius:20 }} onPress={()=> navigation.navigate('Ref')}>
      <Text style={[style.texto,{color:'#ffff', fontSize:15,}]}>Referências Bibliográficas</Text> 
      </TouchableOpacity>


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
  
    
  
},
texto:{
  fontFamily: 'Anton_400Regular',
  fontSize: 20,
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
marginTop: 20,
marginBottom: 80,
 



     

},



});