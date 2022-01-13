
import { CurrentRenderContext } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import contadorVideo from '../../atom/video.atom';
import T1 from '../../assets/t1.mp4';
import T2 from '../../assets/t2.mp4';

import { useRecoilState } from 'recoil';

export default function Movies( {navigation}) {
  const [Tocar,setTocar] = useRecoilState(contadorVideo);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  navigation.setOptions({
      headerTitle: 'Vídeo informativo'
  })

return (
  <View style={style.container}>
      <ImageBackground 
    source={require('../../assets/TelaPrincipal.jpeg')}
    style={style.image}> 
          
     
   
    </ImageBackground>
    <View style={style.textcontainer}>
        <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>
    </View>
    <View style={style.ScrollView}>
        <Video
        ref={video}
        style={style.video}
        source={Vidreta[Tocar]}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={style.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>

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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  textcontainer:{
      flexDirection: 'row',
      position: 'absolute',
      top: '92%',
      bottom: '0%',
      right: '0%',
      left: '15%'
      
      
      
  
    },
    
  ScrollView:{
    alignItems: 'center',
    top: '20%'

  },
  text:{
      fontFamily: 'Anton_400Regular',
      fontSize: 20,
      
        
      
    }
});
const Vidreta = [T1,T2]