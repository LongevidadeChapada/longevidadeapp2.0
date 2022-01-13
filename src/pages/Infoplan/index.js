import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRecoilState } from 'recoil';
import contadorPlantas from '../../atom/prantas.atom';
import p1 from '../../assets/1.jpg';
import p2 from '../../assets/2.jpg';
import p3 from '../../assets/3.jpg';
import p4 from '../../assets/4.jpg';
import p5 from '../../assets/5.jpg';
import p6 from '../../assets/6.jpg';
import p7 from '../../assets/7.jpg';
import p8 from '../../assets/8.jpg';
import p9 from '../../assets/9.jpg';
import p10 from '../../assets/10.jpg';
import p11 from '../../assets/11.jpg';
import p12 from '../../assets/12.jpg';
import p13 from '../../assets/13.jpg';
import p14 from '../../assets/14.jpg';
import p15 from '../../assets/15.jpg';
import p16 from '../../assets/16.jpg';
import p17 from '../../assets/17.jpg';
import p18 from '../../assets/18.jpg';
import p19 from '../../assets/19.jpg';
import p20 from '../../assets/20.jpg';
import p21 from '../../assets/21.jpg';
import p22 from '../../assets/22.jpg';
import p23 from '../../assets/23.jpg';
import p24 from '../../assets/24.jpg';
import p25 from '../../assets/25.jpg';
import p26 from '../../assets/26.jpg';
import p27 from '../../assets/27.jpg';
import p28 from '../../assets/28.jpg';
import p29 from '../../assets/29.jpg';
import p30 from '../../assets/30.jpg';
import p31 from '../../assets/31.jpg';
import p32 from '../../assets/32.jpg';
import p33 from '../../assets/33.jpg';
import p34 from '../../assets/34.jpg';
import p35 from '../../assets/35.jpg';
import p36 from '../../assets/36.jpg';
import p37 from '../../assets/37.jpg';
import p38 from '../../assets/38.jpg';
import p39 from '../../assets/39.jpg';
import p40 from '../../assets/40.jpg';
import p41 from '../../assets/41.jpg';
import p42 from '../../assets/42.jpg';
import p43 from '../../assets/43.jpg';
import p44 from '../../assets/44.jpg';
import p45 from '../../assets/45.jpg';
import p46 from '../../assets/46.jpg';
import p47 from '../../assets/47.jpg';
import p48 from '../../assets/48.jpg';
import p49 from '../../assets/49.jpg';
import p50 from '../../assets/50.jpg';
import p51 from '../../assets/51.jpg';
import p52 from '../../assets/52.jpg';
import p53 from '../../assets/53.jpg';
import p54 from '../../assets/54.jpg';
import p55 from '../../assets/55.jpg';
import p56 from '../../assets/56.jpg';







export default function Infoplan( {navigation}) {
  const [numer,setNumer] = useRecoilState(contadorPlantas);
  


    navigation.setOptions({
        headerTitle: 'Informações da Planta'
    });

  

 return (
   
  <View style={style.container}>
      <ImageBackground source={require('../../assets/TelaPrincipal.jpeg')} style={style.image}>  
      </ImageBackground>
      <View style={style.textcontainer}>
      <Text style={[style.text, {color: '#CECECF',textAlign:'center',fontSize:20} ]}>       Longevidade com Qualidade</Text>       
      </View>

      <ScrollView style={style.scrow}>
        <Image source={IMAPLANTA[numer]} style={style.logo} />
        <Text style={[style.text, {color: '#747482', fontSize:17,paddingLeft:5} ]} >Nome Popular:  </Text>
        <Text style={[style.text, {color: '#747482', fontSize:33, bottom:16,} ]}>{nomesArvores[numer]}</Text>
        <Text style={[style.text, {color: '#747482', fontSize:15, textAlign:'center', fontStyle:'italic'} ]} >(Nome Ciêntifico): {cientificoArvores[numer]}</Text>
        <View style={style.line} />
        <Text style={[style.text, {color: '#747482', fontSize:18, textAlign:'center'} ]} >Características:</Text>
        <Text style={[style.texto, {color: '#380202'},]}>
        
            {caracteristicasArvores[numer]}
        </Text>
        <Text style={[style.text, {color: '#747482', fontSize:18, textAlign:'center'} ]} >Propriedades Medicinais:</Text>
        <Text style={[style.texto, {color: '#380202'},]}>

           {medicinalArvores[numer]}
        </Text>
        <Text style={[style.text, {color: '#747482', fontSize:18, textAlign:'center'} ]} >Referências Bibliográficas:</Text>
        <Text style={[style.texto, {color: '#380202'},]}>

          {referenciasArvores[numer]}
      </Text>
      </ScrollView>
    </View>
  );
};


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
        top:'90%',
        left:'3%',
      },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 20,
        textAlign: 'center',        
      },
    texto:{
        fontFamily: 'Anton_400Regular',
        fontSize: 17,
        textAlign: 'justify'
    },
    texto2:{
      fontFamily: 'Anton_400Regular',
      fontSize: 18,
      textAlign: 'left',
      fontStyle: 'italic'
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
    
      },
      scrow:{
    
        marginTop: '9%',
        marginBottom: '20%',
        paddingHorizontal: 13,
       
    
      },

    
  });


const ImArvore =  ['Açai', 'Alecrim do cerrado', 'Angico-do-campo','Araça-cinzento','Arnicão','Arniquinha','Assa-Peixe',
'Bacurizeiro','Bananeira do Cerrado', 'Banha de Galinha','Barba Timão','Buriti',
'Cajuí','Candeeiro','Canjiquinha','Carne-de-Vaca','Carvoeiro Branco','Carvoeiro do Cerrado','Cedro','Chapeu de couro','Copaiba',
'Dormideira',
'Embauba','Eucalipto',
'Faveleira',
'Goiabeira','Grão de Galo',
'Imburuçu','Indaia','Ipê Amarelo','Ipê Roxo',
'Jacaré','Jambo','Jambolão','Jatobá-do-cerrado','Jequitiba',
'Landi',
'Mama-Cadela','Mangabeira','Maracuja do Mato','Marfim','Marinheiro','Mirorô','Murici','Mutamba',
'Olho de Cabra',
'Pacari','Pata de Vaca','Pau Santo','Pau Terra (cerrado)', 'Pau Terra (mata)', 'Pequi','Pimenta de Macaco',
'Quaresmeira Roxa', 
'Sangra d´água',
'Vassourinha',
'Erro']
const cientificoArvores = ['Euterpe oleracea','microlicia isophylla ','Anadenanthera macrocarpa (Benth.) Brenan.','Psidium cinereum Mart. ex DC','Lychnophora salicifolia','Camarea ericoides St​.Hil.','Vernonia polysphaera',
'Platonia insignis','Porcelia macrocarpa', 'Swartizia Langs-dorffi','Stryphnodendron adstringens','Mauritia flexuosa L.',
'Anacardium humile A.St.-Hill ','Plathymenia reticulata Benth','Rhamnus sphaerosperma Sw','Clethra scabra Pers.','Sclerolobium paniculatum','Sclerolobium paniculatum','Cedrela fissilis','Echinodorus grandiflorus','Copaifera langsdorffii',
'Mimosa pudica',
'Cecropia pachystachya','Eucalyptus globulus Labill',
'Cnidoscolus phyllacanthus',
'Psidium guajava','Pouteria ramiflora (Mart.) Radlk.',
'Pseudobombax longiflorum (Mart.) A.Robyns','Attalea geraensis Barb.Rodr.','Handroanthus albus','Handroanthus avellanedae (Bignoniaceae)',
'Anadenanthera falcata (Benth.) Speg.','Syzygium jambos','Syzygium cumini','Hymenaea stigonocarpa','Cariniana estrellensis',
'calophyllum brasiliense cambess',
'Brosimum gaudichaudii Tréc.','Hancornia speciosa Gomes','Passiflora clathrata Mast.','Balfourodendron riedelianum (Engl.) Engl., Rutaceae.','Licania kunthiana','Bauhinia rufa (Bong.) Steud.','Byrsonima crassifólia (L.) Rich','Guazuma ulmifolia',
'Ormosia arborea',
'Lafoensia pacari A. St.-Hil.','Bauhinia holophylla (Bong.) Steud.','Kielmeyera coriacea Mart. & Zucc','Qualea parviflora Mart', 'Qualea parviflora Mart', 'Caryocar brasiliense Camb.','Xylopia aromatica (Lam.) Mart.',
'Tibouchina granulosa (Desr.) Cogn ', 
'Croton urucurana',
'Baccharis dracunculifolia',
'Qr code não identificado, tente novamente'
]
const nomesArvores = ['Açai', 'Alecrim do cerrado', 'Angico-do-campo','Araça-cinzento','Arnicão','Arniquinha','Assa-Peixe',
'Bacurizeiro','Bananeira do Cerrado', 'Banha de Galinha','Barba Timão','Buriti',
'Cajuí','Candeeiro','Canjiquinha','Carne-de-Vaca','Carvoeiro Branco','Carvoeiro do Cerrado','Cedro','Chapeu de couro','Copaiba',
'Dormideira',
'Embauba','Eucalipto',
'Faveleira',
'Goiabeira','Grão de Galo',
'Imburuçu','Indaia','Ipê Amarelo','Ipê Roxo',
'Jacaré','Jambo','Jambolão','Jatobá-do-cerrado','Jequitiba',
'Landi',
'Mama-Cadela','Mangabeira','Maracuja do Mato','Marfim','Marinheiro','Mirorô','Murici','Mutamba',
'Olho de Cabra',
'Pacari','Pata de Vaca','Pau Santo','Pau Terra (cerrado)', 'Pau Terra (mata)', 'Pequi','Pimenta de Macaco',
'Quaresmeira Roxa', 
'Sangra d´água',
'Vassourinha',
'Erro']

const caracteristicasArvores = ['Palmeira de grande porte, podendo chegar a 25 m de altura. Possui folhas arqueadas distribuídas em coroas. Suas pequenas flores se reúnem em cachos e se localizam abaixo do palmito. Possui um pequeno fruto redondo de cor roxa- escura quando maduro e casca lisa.', 'Também conhecida como  vassourinha-do-campo, é um subarbusto, densamente ramificado com altura inferior a 1 m. Suas folhas são simples e pequenas lanceoladas com base arredondada e ápice agudo. Possui pequeno fruto globoso e suas aromáticas flores possuem a cor rosa. ', 'Árvore de crescimento rápido que pode atingir até 30 m de altura, seu tronco é resistente podendo ter mais de 1 m de diâmetro. A casca é rica em taninos.','Arbusto de pequeno porte com até 2 m de altura. Apresenta grandes flores brancas e frutos com cerca de 4 cm de comprimento, coloração verde no início, e verde-amarelada quando maduro.','Com bastantes ramificações e folhas concentradas na porção terminal dos ramos, a planta pode chegar até 3 metros de altura. Suas folhas são alongadas com textura aveludada e possui flores em forma de capítulo com coloração roxa. ','Arbusto de pequeno porte com folhas alongadas e de textura aveludada.','É um arbusto de folhas ásperas. Suas flores aromáticas possuem coloração esbranquiçada e são reunidas em densos capítulos florais, geralmente florescendo no início do inverno. ',
'Árvore de grande porte podendo chegar a 40 m de altura, com madeira de coloração bege-rosada. Possui folhas lanceoladas e semelhantes ao couro (Coriáceas). Possui grandes flores rosadas com 5 pétalas e estames, um grande fruto do tipo bagas, globoso e amarelo, com polpa comestível que atrai pássaros.','Árvore de grande porte, tronco reto com uma fina casca fibrosa esbranquiçada. Possui folhas simples, oblongas, grandes flores solitárias de coloração creme. Seu fruto, no formato de baga alongada, possui uma casca amarelada e polpa comestível.  ', 'A árvore pode alcançar até 15 metros de altura. Possui tronco tortuoso de aproximadamente 60cm de diâmetro. Possui flores brancas que surgem em cachos, folhas alternas e espiraladas. Seus frutos amarelos, do tipo vagem, se abrem sozinhos quando maduros e possuem sementes revestidas por arilo carnoso e comestível.','Pequena árvore com casca rugosa clara e descamante em árvores velhas. Possui flores brancas ou avermelhadas em formato de espiga e folhas alternas. Seus frutos são do tipo legume indeiscente, achatado com cerca de 10 cm de comprimento e largura de 2 cm.','Palmeira de grande porte com até 25 m de altura. Possui folhas compostas em lâminas com até 5 m de comprimento e 3 m de largura. Suas flores se reúnem em espádices de 2 a 4 m de comprimento. Possui frutos de coloração castanho-avermelhado de aproximadamente 7 cm de comprimento. Muito frequente em zona ripária e em matas de galeria.',
'É um arbusto pequeno com ramos aéreos curtos. Seu fruto possui uma coloração castanha com receptáculos amarelos ou vermelhos de até 5 cm de comprimento. Possui flores muito pequenas, alvas, róseas ou amarelas com estrias roxas em sua base.','Árvore de grande porte, podendo chegar até 30m de altura, com tronco geralmente torcido e casca que, ao ser retirada, expõe uma superfície avermelhada. Possui inflorescência no formato de espiga com flores esbranquiçadas. Seu fruto possui entre 10 e 25 cm de comprimento, formato oblongo, liso e padrão avermelhado.','Árvore perene que pode chegar a 10 m de altura. Possui folhas dentadas, flores de coloração amarela e frutos escuros do tipo drupa. Sua floração ocorre entre os meses de outubro e novembro e frutifica entre janeiro e fevereiro. Abelhas e insetos são seus principais polinizadores. ','Árvore de grande porte com folhas simples que medem entre 7 e 15 centímetros de comprimento. Possui pequenas flores de cor branca com lobos obovados e frutos no formato de cápsula subglobosa. Sua floração ocorre entre os meses de janeiro e abril, e sua frutificação entre os meses de março e maio.','Árvore de grande porte com tronco ereto, casca esbranquiçada, áspera e estriada (em árvores jovens) ou fendilhada em árvores velhas. Suas pequenas flores possuem coloração amarelo-esverdeadas e seus frutos, do tipo vagem plana, possuem cerca de 5 cm de comprimento com 3 cm de largura.','Árvore de grande porte, com tronco ereto, casca esbranquiçada, áspera e estriada (em árvores jovens) ou fendilhada em árvores velhas. Suas pequenas flores possuem coloração amarelo-esverdeadas e seus frutos, do tipo vagem plana, possui cerca de 5 cm de comprimento com 3 cm de largura.','Árvore com casca escura, fendilhada e espessa. Suas flores possuem coloração alva, em panículas terminais, e seu fruto possui formato de cápsula lenhosa, com cerca de 3 cm de comprimento.','Subarbusto com folhas duras como o couro, que podem atingir 30 cm de comprimento. Possui flores esbranquiçadas. ','Pode ser encontrada na forma de arbusto ou árvores de grande porte. Possui casca de espessura e aspectos variáveis, dependendo de sua localidade (finamente sulcada no cerradão e espessa e descamante no cerrado típico), podendo apresentar crostas vermelhas irregulares e intermitentes. Possui pequenas flores de cor creme e frutos do tipo legume orbicular, achatados de coloração vermelha ou castanho-escuro quando secos.',
'Arbusto com hastes serrilhadas cobertas por espinhos. Suas folhas são oblongas e sensíveis ao toque, movimento e temperatura, unindo-se quando estimuladas. Possui flores que variam do branco ao rosa e surgem do meio do verão ao início do outono.',
'Possui entre 10 e 15 m de altura, copa corimbosa e ramos eretos, quase verticais. Suas flores possuem coloração branco-pubescentes.','Árvore de grande porte, podendo chegar a 90 m de altura. Possui pequenas flores, e frutos esverdeados em formato de cápsula.',
'Árvore de pequeno porte com galhos espinhosos e irregulares. Possui folhas longas, grossas e recortadas. Suas pequenas flores de coloração alva são reunidas em cachos. Possui frutos no formato de cápsula que se abrem quando maduros.',
'Árvore de pequeno porte, podendo chegar a 6 m de altura. Possui tronco tortuoso com casca lisa e descamante. Suas folhas são obovadas. Possui pequenas flores brancas, formadas na primavera. Seus frutos são bagas verdes ou amarelas com casca rugosa e polpa comestível.','Espécie arbórea que pode atingir até 10 m de altura e possui látex em todas suas partes. Possui pequenas flores tubulares e esverdeadas e fruto avermelhado, comestível, ligeiramente adocicado.',
'Árvore de porte médio, casca estriada e fendilhada na base do tronco em árvores velhas. Possui grandes flores alvas isoladas, ou em pequenos grupos, e frutos no formato de cápsula densamente revestidos por pilosidade ferrugínea, com cerca de 30 cm de comprimento e 5 cm de diâmetro.',' Palmeira com estipe curto que não excede 1 m de altura. Uma planta com inflorescência em espádice ereto, sendo a masculina em forma de panícula e a feminina não é ramificada. Seu fruto possui coloração marrom-avermelhado e possui cerca de 5 cm de comprimento.','Árvore de tronco tortuoso e casca espessa com fendas sinuosas. Possui grandes flores amarelo-ouro e fruto cápsula curvo-linear com cerca de 20 cm de comprimento e 2 cm de largura. ','Árvore de grande porte que pode chegar a 35m de altura. Suas folhas são compostas palmadas com comprimento entre 5 e 14 cm e largura entre 3 e 4 cm. Possui flores de coloração roxa reunidas em inflorescência terminal. Possui frutos no formato de vagem que abrigam sementes aladas às quais se dispersam facilmente com o vento.',
'Árvore de grande porte. Sua casca é marrom-escura, muito espessa, fendilhada e com cristas irregulares. Possui flores cor de creme com cerca de 2 cm de diâmetro. Seus frutos são do tipo legume deiscente, com coloração marrom- escuro possuindo cerca de 20cm de comprimento e largura de 2 cm.','Árvore de grande porte que pode atingir até 15 m de altura. Possui uma copa de forma cônica e folhas de coloração verde brilhante. Suas grandes flores são aromáticas com coloração que pode variar de branca a rósea-purpúrea. Possui fruto comestível com polpa suculenta, rico em vitaminas e minerais, formato ovoide e coloração que pode variar, dependendo da árvore.','Árvore de grande porte com copa densa e folhagem abundante. Possui folhas simples, opostas e elípticas, inflorescência com grandes quantidades de pequenas flores de coloração creme. Seu fruto, de coloração roxa, tem forma ovoide e mede de 2 a 3 cm de comprimento.','Árvore com casca áspera, rugosa e finamente fendilhada. Possui grandes flores alvas em cimeiras terminais, e frutos do tipo legume indeiscente, de coloração castanho-avermelhado com cerca de 15 cm de comprimento e 5 cm de largura. ','Conhecido como gigante da floresta é uma árvore de grande porte que pode atingir até 30 m de altura. A casca possui tonalidade parda. Possui pequenas flores hermafroditas alvas e frutos ovalados de cor marrom.',
'Árvore de grande porte com casca espessa, escura, fendilhada e látex de cor amarela. Possui pequenas flores brancas dispostas em cimeiras, terminais ou axilares. Seu fruto de cor verde possui cerca de 2 cm de diâmetro.',
'Árvore pequena de casca áspera, clara e descamante com látex. Suas pequenas flores são amareladas e dispostas em glomérulos axilares. Possui fruto alaranjado com cerca de 2,5 cm de diâmetro.','Árvore de pequeno porte com casca áspera e descamativa. Possui flores brancas e fruto amarelo, quando maduro, com cerca de 3 cm de diâmetro.','Trepadeira herbácea, viscosa com pelos amarelos ou castanhos. Possui flores grandes alvo-purpúreas que aparecem de maneira isolada e fruto amarelado.','Árvore de grande porte com tronco reto e cilíndrico, levemente tortuoso, casca externa cinza, lisa ou áspera, podendo alcançar 15 m de altura.  Suas flores possuem coloração branco-amarelada. Seus frutos são lenhosos e secos com quatro asas grandes, com coloração verde quando imaturo e amarelo quando maduro. ','Árvore de casca áspera. Possui pequenas flores alvas e fruto no formato de cápsula carnosa com cerca de 1,5 cm de diâmetro. ','Encontrado na forma de arbusto, subarbusto ou árvore. Possui fruto do tipo vagem achatada de coloração marrom. Suas folhas são parcialmente ou totalmente fendidas em duas, aparentando uma pata de vaca. Sua floração ocorre entre os meses de agosto e fevereiro e sua frutificação entre novembro e março. Possui os morcegos como seus principais polinizadores e é muito utilizada para lenha e uso medicinal.','Também conhecido como orelha-de-burro é uma árvore de pequeno porte com casca áspera e escura, que pode descamar em árvores velhas. Possui flores amarelas no início e alaranjadas no final que se dispõem em racemo terminal longo. Seus frutos de coloração amarela possuem aproximadamente 1 cm de diâmetro e se dispõem em cachos pendentes.','Árvore de grande porte, podendo chegar até 16m de altura. Seu tronco é levemente tortuoso com casca interna fibrosa, rosada e estrias brancas. Possui pequenas flores alvo-amareladas, ligeiramente perfumadas e frutos em cápsula seca de coloração verde a negra, dura, de 1,5 cm a 3,5 cm de comprimento . ',
'Árvore de grande porte com casca de coloração marrom escura, flores de coloração roxa e frutos do tipo legume, compresso de coloração marrom.',
'Árvore de pequeno a médio porte com tronco de 30 a 60 cm de diâmetro e casca acinzentada. Possui flores vistosas, grandes, com pétalas brancas e franjadas. Seus frutos são cápsulas lenhosas com formato que lembra um dedal.','Arbusto de grande porte com até 3 m de altura. Possui grandes flores brancas ou róseas e frutos do tipo legume plano, com cerca de 25 cm de comprimento e 2,5 cm de largura.','Árvore de tronco tortuoso e casca suberosa, espessa e clara, podendo ser tuberculosa em árvores velhas. Possui grandes flores de pétalas brancas e frutos capsulares com cerca de 15 cm de comprimento.','Árvore de casca áspera e clara. Possui flores brancas ou amarelo-claras, com manchas vináceas e um fruto cápsula lenhosa com aproximadamente 4 cm de comprimento.', 'Árvore de casca áspera e clara. Possui flores brancas ou amarelo-claras, com manchas vináceas e um fruto cápsula lenhosa com aproximadamente 4 cm de comprimento.', 'Pode ser encontrado na forma de arbusto ou árvore de tronco tortuoso e casca áspera, podendo ser fendida em árvores mais velhas. Suas grandes flores possuem coloração creme com estames longos e numerosos, possui fruto drupa globosa de coloração verde.','Árvore pequena de casca marrom escura, possui grandes flores brancas que aparecem isoladas ou em pequenos grupos. Possui fruto com coloração verde por fora e avermelhado internamente, com cerca de 4 cm de comprimento. ',
'Características: Árvore pequena de casca áspera. Possui grandes flores purpúreas a roxa e pequenos frutos no formato de cápsula ovoide com cerca de 8mm de comprimento e 6mm de largura.   ', 
'Árvore de grande porte, podendo chegar a 15 m de altura, comumente encontrada em brejos. Possui flores pequenas de coloração bege e seu crescimento é considerado rápido. Da casca é extraído um látex de cor vermelha, parecido com o sangue. Daí o nome ´Sangra d´água´',
'Planta herbácea, ereta, de pequeno porte. Possui flores amarelas, solitárias, que geralmente se agrupam no topo da planta. Possui um pequeno fruto (com aproximadamente 6mm de comprimento) que aparece na forma de cápsula.']

const medicinalArvores = ['A polpa da fruta possui ação antioxidante, anticarcinogênica, anti-inflamatória e antimicrobiana. ', 'Ainda não foram catalogadas propriedades medicinais para essa planta.', 'Sua casca tem propriedades adstringentes, depurativas e hemostáticas. É indicada para reduzir sangramentos, combater diarreias, ajudar na cicatrização da pele; para ajudar a eliminar substâncias nocivas que prejudicam a saúde; e para estancar hemorragias.','Sua fruta possui ação calmante, diurética e anti-inflamatória, sendo usada para combater as inflamações bucais, gastrointestinais, urogenitais e intestinais.','Na medicina popular a planta é utilizada, após infusão com álcool, no tratamento de contusões, alivia inchaço e dores nas pernas, atua também como repelente e anti-inflamatório. O sabonete de arnica é um cosmético bastante procurado para tratar pele ressecada ou hematomas.','Sua raiz é utilizada como anti-inflamatório e indicada para dor de dente, extração de dente, infecção, infecção de dente e ferimentos.','O chá das folhas e raízes é utilizado na medicina popular para fins diuréticos, balsâmicos, antirreumáticos e em casos de gripe, bronquite, pneumonia e tosse persistente.',
'Sua fruta é rica em fósforo, ferro e vitamina C. Da semente é retirado o óleo que é utilizado na medicina popular para tratamento de doenças de pele e picadas de insetos.','Ainda não foram catalogadas propriedades medicinais para essa planta.', 'Do seu fruto é retirada uma gordura saudável que ajuda a equilibrar o colesterol. É rica em ácidos graxos e utilizada para tratamento de gripe e resfriado, possuindo ação anti-inflamatória.','Combate a proliferação de fungos, possui ação antisséptica e anti-inflamatória. Pode ser aplicado diretamente na pele ou utilizado no preparo de chás com as folhas e as cascas do caule.','A fruta e o óleo possuem ação antioxidante, antibacteriana e vermífuga, aumenta a saciedade, além de ser considerado um energético natural. Pode ser encontrado também em produtos de beleza como cremes, sabonetes e xampus para hidratar e revitalizar cabelos e pele.',
'O óleo da castanha possui ação antisséptica e cicatrizante.','As folhas e a goma são usadas no combate a doenças pulmonares e contra dermatites. Sua casca é utilizada no tratamento de varizes e de edema testicular, além de atuar no combate à hemorragia e à diarreia.','Seu fruto auxilia no combate a úlcera e possui efeito antioxidante.','É utilizada na produção de chás e xaropes para combater tuberculose, afecções dos pulmões e anemia.','Ainda não foram catalogadas propriedades medicinais para essa planta.','Ainda não foram catalogadas propriedades medicinais para essa planta.','Ainda não foram catalogadas propriedades medicinais para essa planta.','Auxilia no controle da hipertensão, é utilizado na medicina popular como antirreumático, diurético, contra inflamações de pele e garganta, reumatismo, artrite e sífilis, além de atuar como eliminador de ácido úrico do sangue. Sua folha pode ser aplicada diretamente na pele ou utilizada na forma de chá.','Um produto resinoso é extraído do tronco da copaibeira e possui propriedades anti-inflamatórias, cicatrizante, analgésicas e expectorantes. É indicado para ajudar na cicatrização de feridas, tosse ou para aliviar os sintomas da artrite.',
'Ainda não foram catalogadas propriedades medicinais para essa planta.',
'Possui propriedades vasodilatadoras, diurética, anti-hemorrágica, antiasmática, anti-inflamatória e antisséptica. De versátil utilização, pode ser ministrada na forma de chás, pomadas ou sucos. ','Possui ação expectorante, anti-inflamatória, descongestionante, vermífuga e estimula a imunidade. É comumente utilizado na forma de chá, inalação do óleo essencial e uso tópico. Vale ressaltar que o eucalipto pode apresentar efeitos colaterais como dermatite, dificuldade para respirar e taquicardia, podendo provocar - se utilizado em exagero -, sonolência ou hiperatividade. ',
'Sua casca possui propriedades antioxidantes e antitumorais, é utilizada como anti-inflamatório, auxiliando na cicatrização de feridas.',
'Seus frutos são ricos em vitamina  C e contém quantidades razoáveis de vitaminas A e do complexo B. O chá das folhas pode ser utilizado no tratamento de inflamações na boca e garganta e úlcera. Além disso, o extrato aquoso, retirado do broto, possui uma intensa ação contra agentes responsáveis pela diarreia de origem microbiana.','',
'Seu fruto é utilizado como bactericida, inseticida e repelente.','Ainda não foram catalogadas propriedades medicinais para essa planta.','O extrato da planta pode ser utilizado para tratar anemia, amigdalite, infecção urinária, bronquite, candidíase, infecção na próstata, mioma, cisto nos ovários. Facilita também a cicatrização de feridas internas e externas. Deve-se ter cuidado na utilização por apresentar uma elevada toxicidade, podendo causar urticária, tontura, náusea, vômito e diarreia.','O chá da casca é utilizado na medicina popular no tratamento de adenocarcinoma (pâncreas), câncer do esôfago, cabeça, intestino, pulmões, próstata e língua, na doença de Hodgkin, leucemia e lúpus. Sua atividade antitumoral provém do Lapachol, principal princípio ativo do Ipê- roxo.',
'Sua casca tem propriedades adstringentes, depurativas e hemostáticas. É indicada para reduzir sangramentos, combater diarreias, ajudar na cicatrização da pele; para ajudar a eliminar substâncias nocivas que prejudicam a saúde; e para estancar hemorragias.','Ajuda a fortalecer o sistema imunológico devido ao alto poder antioxidante. Sua fruta atua positivamente no funcionamento do intestino, por ser rico em fibras, e possui ação diurética. ','A casca do caule possui propriedades anti-inflamatória, anticarcinogênica e auxilia no controle de diabetes. Os frutos, além de serem antioxidantes, possuem ação hipoglicemiante, mimetizando a ação da insulina no organismo.','É utilizada a seiva e chás da casca e folha para auxiliar no tratamento de gastrites e úlceras. Possui ação antioxidante e é popularmente utilizado como vermífugo. ','A casca da planta é rica em propriedades medicinais, entre elas: adstringente, anti-inflamatória, desinfetante, descongestionante, emética e laxante.',
'Ainda não foram catalogadas propriedades medicinais para essa planta.',
'Ainda não foram catalogadas propriedades medicinais para essa planta.','A folha e a casca são utilizadas em infusão. Por possuírem ação antioxidante, auxilia na prevenção da anemia, regula a pressão arterial, além de combater a diabetes.','Ainda não foram catalogadas propriedades medicinais para essa planta.','Ainda não foram catalogadas propriedades medicinais para essa planta.','Ainda não foram catalogadas propriedades medicinais para essa planta.','Sua folha possui ação antifúngica e antioxidante, sendo utilizada na forma de chá.','Possui propriedades terapêuticas tais como: adstringente, antibacteriana, anti-inflamatória, laxante, antifúngica e protetor da mucosa intestinal. Suas folhas são usadas na medicina popular para alívio de diarreia, disenteria, infecções intestinais, infecções da boca, garganta, hemorroida e cicatrização de feridas. É empregado para o alívio de tosse e bronquite, além de agir como laxante natural, se ingerido com açúcar.','O chá de suas folhas é empregado contra disenteria e diarreia, no tratamento de problemas relacionados com a próstata e como estimulante uterino para facilitar o parto.',
'Olho de Cabra',
'Da casca dessa árvore é retirado um extrato alcoólico que se mostrou eficaz no tratamento e prevenção de alguns sintomas da asma.','É possível utilizar folhas, cascas e sementes para produção de chá, extrato ou tintura.  Indicada para problemas renais, hipertensão, anemia e doenças do coração. Também auxilia no combate a diabetes por ser capaz de diminuir os níveis de glicose no sangue.','Seu óleo possui propriedades analgésica e anti-inflamatória. ','A casca é indicada para curar feridas e inflamações. Já as folhas são indicadas para diarreia, cólica e no combate à amebíase.', 'A casca é indicada para curar feridas e inflamações. Já as folhas são indicadas para diarreia, cólica e no combate à amebíase.', 'O óleo retirado da castanha possui propriedades antioxidantes por conter betacaroteno. Estudos apontam que essa o óleo ameniza ação degenerativa de drogas.','Ainda não foram catalogadas propriedades medicinais para essa planta.',
'Ainda não foram catalogadas propriedades medicinais para essa planta.', 
'As folhas e a casca da planta são usadas para tratar feridas, distúrbios gástricos, reumatismo e hipertensão.',
'Ainda não foram catalogadas propriedades medicinais para essa planta.']
const referenciasArvores = ['R41 e R42.', 'R33.', 'R9.','R5 e R13.','R2.','R1 e R2.','R54, R55, R56 e R57.','R35, R36 e R37.','R32.', 'R48.','R5, R15 e R63.','R5 e R65.','R5 e R64.','R25.','R38, R39 e R40.','R22.','R5.','R5.','R5.','R26, R27 e R66.','R5 e R8.','R17 e R18.','R3.','R44 e R45','R28 e R34.','R48, R49, R50 e R51','R19.','R5 e R60.','R5.','R5 e R65.','R45 e R46',
'R5 e R9.','R52.','R53.','R5, R59 e R63.','R4.','R5.','R5.','R5, R29, R30 e R31.','R5.','R21.','R5.','R23 e R24.','R23 e R24.','R5 e R12.',
'R5, R6 e R61.','R20.','R5 e R11.','R5 e R64.','R5 e R15.', 'R5 e R14.', 'R5, R58 e R62.','R5.','R5.', 'R7.','R5.']
const IMAPLANTA = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,p51, p52,p53,p54,p55,p56]
