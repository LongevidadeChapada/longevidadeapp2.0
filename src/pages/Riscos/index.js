import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';


export default function Riscos( {navigation} ) {
    navigation.setOptions({
        headerTitle: 'Riscos e normas'
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
            <Text style={[style.text, {color: '#747482'} ]} >Termo de Conhecimento de Riscos e Normas</Text> 
            <View style={style.line} />  
            <Text style={[style.texto, {color: '#380202'},]}>      Prezado visitante, temos o prazer em recebê-lo e em compartilhar com você este projeto educativo o qual lhe possibilita aprender e desfrutar das belezas e riquezas das espécies medicinais da fauna e flora do Cerrado Goiano da Chapada dos Veadeiros. Para que o seu passeio seja o mais proveitoso e agradável possível, é necessário que você conheça os riscos e as responsabilidades as quais você assume aqui ao visitar uma área preservada. Todas as informações referentes às espécies medicinais e às Trilhas Educativas estarão disponíveis no Aplicativo, as demais informações podem ser consultadas pessoalmente com o guia responsável ou por meio do Fale Conosco no Aplicativo; nós teremos o maior prazer em responder. O guia tem total conhecimento da região. </Text>
            <Text style={[style.texto, {color: '#380202'},]}>DECLARO ESTAR CIENTE E DE ACORDO COM OS TERMOS DE INSTRUÇÃO ABAIXO:</Text>
            <Text style={[style.texto, {color: '#380202'},]}>1.Áreas naturais apresentam riscos intrínsecos, tais como “cabeças d'água”, choque térmico, afogamento, pedras soltas e/ou escorregadias, animais peçonhentos, carrapatos advindos de animais silvestres, entre outros; e SOU O PRINCIPAL RESPONSÁVEL PELA MINHA PRÓPRIA SEGURANÇA, devendo estar sempre alerta. {'\n'}2.Devo me manter somente nas trilhas estabelecidas com o guia responsável. O guia estará preparado para adversidades em caso de acidente ou incidente e para auxiliá-lo (a) sempre que necessário – peça ajuda ao guia (não incluso remoção);{'\n'}3.Devo seguir as orientações de estar vestido corretamente com calça comprida, bota de cano longo, camisa e chapéu / boné (levar rouba de banho); usar repelente e protetor solar; levar água e alimento leve.{'\n'}4.Tenho condições físicas e de saúde suficientes para percorrer todo percurso da trilha escolhida: - Trilha Completa de 8400m, com travessia de rio, praia, parada, cachoeira e trechos íngremes; - Trilha Parcial de 4150m, com praia e trechos menos íngremes. {'\n'}5.Sou responsável por retirar da propriedade todo o lixo produzido por mim durante a visita. E devolver as caneleiras.</Text>
            <Text style={[style.texto, {color: '#380202'},]}>É PROIBIDO NO INTERIOR DA PROPRIEDADE:</Text>
            <Text style={[style.texto, {color: '#380202'},]}>6.Entrar e sair das Fazendas e das Trilhas sem o guia ou por outro acesso que não o estabelecido na rota;{'\n'}7.Coletar rochas, plantas, mudas, flores e sementes sem autorização prévia;{'\n'}8.Provocar estampidos, emitir gritos e fazer barulhos que possam perturbar a fauna local;{'\n'}9.Gravar nomes, datas ou sinais nas pedras, árvores, placas ou outros bens da propriedade; {'\n'}10.Levar animais particulares, sejam domésticos ou silvestres registrados; {'\n'}11.Utilizar atalhos e/ou áreas interditadas. Acampar dentro da propriedade;{'\n'}12.Consumir bebida alcoólica e quaisquer outras substâncias entorpecentes;{'\n'}13.Pescar, caçar, capturar, molestar ou perseguir animais silvestres; {'\n'}14.Fumar cigarros de qualquer natureza; {'\n'}15.Portar arma de fogo, porretes, atiradeiras, armadilhas, facões, foices e similares; {'\n'}16.Alimentar aves ou qualquer outro possível animal silvestre; {'\n'}17.Fazer fogueiras ou utilizar equipamentos que produzam fogo ou faísca.</Text>
            <Text style={[style.texto, {color: '#380202'},]}>* A NÃO OBSERVÂNCIA OU DESCUMPRIMENTO DAS DETERMINAÇÕES ACIMA CONFIGURA DESOBEDIÊNCIA ÀS NORMAS INSTITUÍDAS PELO PROJETO, CONFIGURADO EM CRIME AMBIENTAL OU DESCUMPRIMENTO CONTRATUAL (SUJEITO À MULTA DE UM SALÁRIO-MÍNIMO, QUE SERÁ REVERTIDO EM AÇÕES AMBIENTAIS). Funcionários da propriedade e guias autorizados têm autoridade para intervir, se necessário. * As caneleiras emprestadas no ato da preparação para o início da trilha, devem ser devolvidas ao término da trilha. Caso não haja a devolução, fica estabelecido o valor de R$ 50,00 para a reposição das caneleiras. </Text>
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
        fontSize: 19,
        textAlign:'center'

          
        
      },
    texto:{
        fontFamily: 'Anton_400Regular',
        fontSize: 18,
        textAlign: 'justify'
    },
    logocontainer:{
    
        flexDirection: 'row',
        position: 'absolute',

        
        
        
    
      },
      logo:{
     
        position: 'relative',
        width: 190,
        height: 190,
      
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

        left: '5%'     
    
      },
      scrow:{
    
        marginTop: '9%',
        marginBottom: '20%',
        paddingHorizontal: 13,
       
    
      },

    
  });