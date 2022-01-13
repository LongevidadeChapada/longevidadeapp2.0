import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';


export default function Aten( {navigation}) {
    navigation.setOptions({
        headerTitle: 'Atenção'
    })
 return (
    <View style={style.container}>
        <ImageBackground source={require('../../assets/TelaPrincipal.jpeg')} style={style.image}> 
            
       
     
      </ImageBackground>
      <View style={style.textcontainer}>
          <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade</Text>
       
        </View>
                
       
        <ScrollView style={style.scrow}>
            <Image source={require('../../assets/bAlerta.png')} style={style.logo} />  
            <Text style={[style.text, {color: '#747482'} ]} >Atenção</Text>  
            <View style={style.line} />
            <Text style={[style.texto, {color: '#380202'},]}>      Prezado visitante, temos o prazer em recebê-lo e em compartilhar com você este projeto educativo o qual lhe possibilita aprender e desfrutar das belezas e riquezas das espécies medicinais da fauna e flora do Cerrado Goiano da Chapada dos Veadeiros. Para que o seu passeio seja o mais proveitoso e agradável possível, é necessário que você conheça os riscos e as responsabilidades as quais você assume aqui ao visitar uma área preservada. Todas as informações referentes às espécies medicinais e às Trilhas Educativas estarão disponíveis no Aplicativo, as demais informações podem ser consultadas pessoalmente com o guia responsável ou por meio do Fale Conosco no Aplicativo; nós teremos o maior prazer em responder. O guia tem total conhecimento da região. </Text>
            <Text style={[style.texto, {color: '#380202'},]}>PRELIMINARMENTE É NECESSÁRIO SABER:</Text>
            <Text style={[style.texto, {color: '#380202'},]}>1.Você é o principal responsável pela sua própria segurança; 2.Irá acompanhar e respeitar o guia preparado para auxiliá-lo (a); 3.Orientamos estar vestido (a) corretamente com calça comprida, bota de cano longo, camisa e chapéu / boné (levar roupa de banho); usar repelente e protetor solar; levar água e alimento leve. 4.Estar em condições de saúde para percorrer toda trilha escolhida: Trilha de 8400m, com travessia de rio, praia, parada, cachoeira e trechos íngremes; Trilha de 4150m, com praia e trechos menos íngremes; 5.Não levar animais particulares, seja domésticos ou silvestres registrados; 6.Não consumir bebida alcoólica ou substâncias entorpecentes ou fumar; 7.Não pescar, caçar, capturar, molestar ou perseguir animais silvestres; 8.Não coletar rochas, plantas, mudas, flores e sementes sem autorização; 9.Não portar arma: de fogo, porrete, atiradeira, armadilha, facão, foice etc.; 10.Não acampar, entrar e sair das Fazendas e Trilhas sem o guia; 11.Não fazer fogueira ou utilizar equipamentos que produzam fogo ou faísca; 12.Emprestamos caneleiras, que devem ser devolvidas no término das trilhas; 13.O grupo deve conter até 05 pessoas acima de 15 anos, mais o guia local; 14.Não é permitido criança menor de 15 anos, mesmo acompanhada.  </Text>
            <Text style={[style.texto, {color: '#380202'},]}>Os passeios acontecem no início da manhã, com duração de até 5h, após o fechamento do grupo com 05 participantes. O valor da taxa por grupo é de R$ 250,00, inclusas as despesas com o guia e as caneleiras emprestadas; somado ao Valor Individual de Trilha 8400m: R$ 30,00 e Trilha de 4150m: R$ 20,00. Estão livres para o acesso às trilhas e isentos de pagamento ao dispensar o guia e as caneleiras, com reserva e autorização prévia, pesquisadores credenciados e servidores de órgãos públicos à serviço. Os demais visitantes com mais de 60 anos e o estudante de escola pública maior de 15 anos e na atividade escolar de educação ambiental, com reserva e autorização prévia, não pagam o Valor Individual.</Text>
            
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
        fontSize: 25,
        
          
        
      },
    texto:{
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        textAlign: 'justify'
    },
    logocontainer:{
    
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
        paddingRight: '65%',
        paddingTop:'15%'

        
        
        
    
      },
      logo:{
     
        position: 'relative',
        width: 213,
        height: 206,
      
        alignSelf:'center'
    
        },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth:2,

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