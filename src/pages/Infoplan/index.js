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
        headerTitle: 'Informa????es da Planta'
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
        <Text style={[style.text, {color: '#747482', fontSize:15, textAlign:'center', fontStyle:'italic'} ]} >(Nome Ci??ntifico): {cientificoArvores[numer]}</Text>
        <View style={style.line} />
        <Text style={[style.text, {color: '#747482', fontSize:18, textAlign:'center'} ]} >Caracter??sticas:</Text>
        <Text style={[style.texto, {color: '#380202'},]}>
        
            {caracteristicasArvores[numer]}
        </Text>
        <Text style={[style.text, {color: '#747482', fontSize:18, textAlign:'center'} ]} >Propriedades Medicinais:</Text>
        <Text style={[style.texto, {color: '#380202'},]}>

           {medicinalArvores[numer]}
        </Text>
        <Text style={[style.text, {color: '#747482', fontSize:18, textAlign:'center'} ]} >Refer??ncias Bibliogr??ficas:</Text>
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


const ImArvore =  ['A??ai', 'Alecrim do cerrado', 'Angico-do-campo','Ara??a-cinzento','Arnic??o','Arniquinha','Assa-Peixe',
'Bacurizeiro','Bananeira do Cerrado', 'Banha de Galinha','Barba Tim??o','Buriti',
'Caju??','Candeeiro','Canjiquinha','Carne-de-Vaca','Carvoeiro Branco','Carvoeiro do Cerrado','Cedro','Chapeu de couro','Copaiba',
'Dormideira',
'Embauba','Eucalipto',
'Faveleira',
'Goiabeira','Gr??o de Galo',
'Imburu??u','Indaia','Ip?? Amarelo','Ip?? Roxo',
'Jacar??','Jambo','Jambol??o','Jatob??-do-cerrado','Jequitiba',
'Landi',
'Mama-Cadela','Mangabeira','Maracuja do Mato','Marfim','Marinheiro','Miror??','Murici','Mutamba',
'Olho de Cabra',
'Pacari','Pata de Vaca','Pau Santo','Pau Terra (cerrado)', 'Pau Terra (mata)', 'Pequi','Pimenta de Macaco',
'Quaresmeira Roxa', 
'Sangra d????gua',
'Vassourinha',
'Erro']
const cientificoArvores = ['Euterpe oleracea','microlicia isophylla ','Anadenanthera macrocarpa (Benth.) Brenan.','Psidium cinereum Mart. ex DC','Lychnophora salicifolia','Camarea ericoides St???.Hil.','Vernonia polysphaera',
'Platonia insignis','Porcelia macrocarpa', 'Swartizia Langs-dorffi','Stryphnodendron adstringens','Mauritia flexuosa L.',
'Anacardium humile A.St.-Hill ','Plathymenia reticulata Benth','Rhamnus sphaerosperma Sw','Clethra scabra Pers.','Sclerolobium paniculatum','Sclerolobium paniculatum','Cedrela fissilis','Echinodorus grandiflorus','Copaifera langsdorffii',
'Mimosa pudica',
'Cecropia pachystachya','Eucalyptus globulus Labill',
'Cnidoscolus phyllacanthus',
'Psidium guajava','Pouteria ramiflora (Mart.) Radlk.',
'Pseudobombax longiflorum (Mart.) A.Robyns','Attalea geraensis Barb.Rodr.','Handroanthus albus','Handroanthus avellanedae (Bignoniaceae)',
'Anadenanthera falcata (Benth.) Speg.','Syzygium jambos','Syzygium cumini','Hymenaea stigonocarpa','Cariniana estrellensis',
'calophyllum brasiliense cambess',
'Brosimum gaudichaudii Tr??c.','Hancornia speciosa Gomes','Passiflora clathrata Mast.','Balfourodendron riedelianum (Engl.) Engl., Rutaceae.','Licania kunthiana','Bauhinia rufa (Bong.) Steud.','Byrsonima crassif??lia (L.) Rich','Guazuma ulmifolia',
'Ormosia arborea',
'Lafoensia pacari A. St.-Hil.','Bauhinia holophylla (Bong.) Steud.','Kielmeyera coriacea Mart. & Zucc','Qualea parviflora Mart', 'Qualea parviflora Mart', 'Caryocar brasiliense Camb.','Xylopia aromatica (Lam.) Mart.',
'Tibouchina granulosa (Desr.) Cogn ', 
'Croton urucurana',
'Baccharis dracunculifolia',
'Qr code n??o identificado, tente novamente'
]
const nomesArvores = ['A??ai', 'Alecrim do cerrado', 'Angico-do-campo','Ara??a-cinzento','Arnic??o','Arniquinha','Assa-Peixe',
'Bacurizeiro','Bananeira do Cerrado', 'Banha de Galinha','Barba Tim??o','Buriti',
'Caju??','Candeeiro','Canjiquinha','Carne-de-Vaca','Carvoeiro Branco','Carvoeiro do Cerrado','Cedro','Chapeu de couro','Copaiba',
'Dormideira',
'Embauba','Eucalipto',
'Faveleira',
'Goiabeira','Gr??o de Galo',
'Imburu??u','Indaia','Ip?? Amarelo','Ip?? Roxo',
'Jacar??','Jambo','Jambol??o','Jatob??-do-cerrado','Jequitiba',
'Landi',
'Mama-Cadela','Mangabeira','Maracuja do Mato','Marfim','Marinheiro','Miror??','Murici','Mutamba',
'Olho de Cabra',
'Pacari','Pata de Vaca','Pau Santo','Pau Terra (cerrado)', 'Pau Terra (mata)', 'Pequi','Pimenta de Macaco',
'Quaresmeira Roxa', 
'Sangra d????gua',
'Vassourinha',
'Erro']

const caracteristicasArvores = ['Palmeira de grande porte, podendo chegar a 25 m de altura. Possui folhas arqueadas distribu??das em coroas. Suas pequenas flores se re??nem em cachos e se localizam abaixo do palmito. Possui um pequeno fruto redondo de cor roxa- escura quando maduro e casca lisa.', 'Tamb??m conhecida como  vassourinha-do-campo, ?? um subarbusto, densamente ramificado com altura inferior a 1 m. Suas folhas s??o simples e pequenas lanceoladas com base arredondada e ??pice agudo. Possui pequeno fruto globoso e suas arom??ticas flores possuem a cor rosa. ', '??rvore de crescimento r??pido que pode atingir at?? 30 m de altura, seu tronco ?? resistente podendo ter mais de 1 m de di??metro. A casca ?? rica em taninos.','Arbusto de pequeno porte com at?? 2 m de altura. Apresenta grandes flores brancas e frutos com cerca de 4 cm de comprimento, colora????o verde no in??cio, e verde-amarelada quando maduro.','Com bastantes ramifica????es e folhas concentradas na por????o terminal dos ramos, a planta pode chegar at?? 3 metros de altura. Suas folhas s??o alongadas com textura aveludada e possui flores em forma de cap??tulo com colora????o roxa. ','Arbusto de pequeno porte com folhas alongadas e de textura aveludada.','?? um arbusto de folhas ??speras. Suas flores arom??ticas possuem colora????o esbranqui??ada e s??o reunidas em densos cap??tulos florais, geralmente florescendo no in??cio do inverno. ',
'??rvore de grande porte podendo chegar a 40 m de altura, com madeira de colora????o bege-rosada. Possui folhas lanceoladas e semelhantes ao couro (Cori??ceas). Possui grandes flores rosadas com 5 p??talas e estames, um grande fruto do tipo bagas, globoso e amarelo, com polpa comest??vel que atrai p??ssaros.','??rvore de grande porte, tronco reto com uma fina casca fibrosa esbranqui??ada. Possui folhas simples, oblongas, grandes flores solit??rias de colora????o creme. Seu fruto, no formato de baga alongada, possui uma casca amarelada e polpa comest??vel.  ', 'A ??rvore pode alcan??ar at?? 15 metros de altura. Possui tronco tortuoso de aproximadamente 60cm de di??metro. Possui flores brancas que surgem em cachos, folhas alternas e espiraladas. Seus frutos amarelos, do tipo vagem, se abrem sozinhos quando maduros e possuem sementes revestidas por arilo carnoso e comest??vel.','Pequena ??rvore com casca rugosa clara e descamante em ??rvores velhas. Possui flores brancas ou avermelhadas em formato de espiga e folhas alternas. Seus frutos s??o do tipo legume indeiscente, achatado com cerca de 10 cm de comprimento e largura de 2 cm.','Palmeira de grande porte com at?? 25 m de altura. Possui folhas compostas em l??minas com at?? 5 m de comprimento e 3 m de largura. Suas flores se re??nem em esp??dices de 2 a 4 m de comprimento. Possui frutos de colora????o castanho-avermelhado de aproximadamente 7 cm de comprimento. Muito frequente em zona rip??ria e em matas de galeria.',
'?? um arbusto pequeno com ramos a??reos curtos. Seu fruto possui uma colora????o castanha com recept??culos amarelos ou vermelhos de at?? 5 cm de comprimento. Possui flores muito pequenas, alvas, r??seas ou amarelas com estrias roxas em sua base.','??rvore de grande porte, podendo chegar at?? 30m de altura, com tronco geralmente torcido e casca que, ao ser retirada, exp??e uma superf??cie avermelhada. Possui infloresc??ncia no formato de espiga com flores esbranqui??adas. Seu fruto possui entre 10 e 25 cm de comprimento, formato oblongo, liso e padr??o avermelhado.','??rvore perene que pode chegar a 10 m de altura. Possui folhas dentadas, flores de colora????o amarela e frutos escuros do tipo drupa. Sua flora????o ocorre entre os meses de outubro e novembro e frutifica entre janeiro e fevereiro. Abelhas e insetos s??o seus principais polinizadores. ','??rvore de grande porte com folhas simples que medem entre 7 e 15 cent??metros de comprimento. Possui pequenas flores de cor branca com lobos obovados e frutos no formato de c??psula subglobosa. Sua flora????o ocorre entre os meses de janeiro e abril, e sua frutifica????o entre os meses de mar??o e maio.','??rvore de grande porte com tronco ereto, casca esbranqui??ada, ??spera e estriada (em ??rvores jovens) ou fendilhada em ??rvores velhas. Suas pequenas flores possuem colora????o amarelo-esverdeadas e seus frutos, do tipo vagem plana, possuem cerca de 5 cm de comprimento com 3 cm de largura.','??rvore de grande porte, com tronco ereto, casca esbranqui??ada, ??spera e estriada (em ??rvores jovens) ou fendilhada em ??rvores velhas. Suas pequenas flores possuem colora????o amarelo-esverdeadas e seus frutos, do tipo vagem plana, possui cerca de 5 cm de comprimento com 3 cm de largura.','??rvore com casca escura, fendilhada e espessa. Suas flores possuem colora????o alva, em pan??culas terminais, e seu fruto possui formato de c??psula lenhosa, com cerca de 3 cm de comprimento.','Subarbusto com folhas duras como o couro, que podem atingir 30 cm de comprimento. Possui flores esbranqui??adas. ','Pode ser encontrada na forma de arbusto ou ??rvores de grande porte. Possui casca de espessura e aspectos vari??veis, dependendo de sua localidade (finamente sulcada no cerrad??o e espessa e descamante no cerrado t??pico), podendo apresentar crostas vermelhas irregulares e intermitentes. Possui pequenas flores de cor creme e frutos do tipo legume orbicular, achatados de colora????o vermelha ou castanho-escuro quando secos.',
'Arbusto com hastes serrilhadas cobertas por espinhos. Suas folhas s??o oblongas e sens??veis ao toque, movimento e temperatura, unindo-se quando estimuladas. Possui flores que variam do branco ao rosa e surgem do meio do ver??o ao in??cio do outono.',
'Possui entre 10 e 15 m de altura, copa corimbosa e ramos eretos, quase verticais. Suas flores possuem colora????o branco-pubescentes.','??rvore de grande porte, podendo chegar a 90 m de altura. Possui pequenas flores, e frutos esverdeados em formato de c??psula.',
'??rvore de pequeno porte com galhos espinhosos e irregulares. Possui folhas longas, grossas e recortadas. Suas pequenas flores de colora????o alva s??o reunidas em cachos. Possui frutos no formato de c??psula que se abrem quando maduros.',
'??rvore de pequeno porte, podendo chegar a 6 m de altura. Possui tronco tortuoso com casca lisa e descamante. Suas folhas s??o obovadas. Possui pequenas flores brancas, formadas na primavera. Seus frutos s??o bagas verdes ou amarelas com casca rugosa e polpa comest??vel.','Esp??cie arb??rea que pode atingir at?? 10 m de altura e possui l??tex em todas suas partes. Possui pequenas flores tubulares e esverdeadas e fruto avermelhado, comest??vel, ligeiramente adocicado.',
'??rvore de porte m??dio, casca estriada e fendilhada na base do tronco em ??rvores velhas. Possui grandes flores alvas isoladas, ou em pequenos grupos, e frutos no formato de c??psula densamente revestidos por pilosidade ferrug??nea, com cerca de 30 cm de comprimento e 5 cm de di??metro.',' Palmeira com estipe curto que n??o excede 1 m de altura. Uma planta com infloresc??ncia em esp??dice ereto, sendo a masculina em forma de pan??cula e a feminina n??o ?? ramificada. Seu fruto possui colora????o marrom-avermelhado e possui cerca de 5 cm de comprimento.','??rvore de tronco tortuoso e casca espessa com fendas sinuosas. Possui grandes flores amarelo-ouro e fruto c??psula curvo-linear com cerca de 20 cm de comprimento e 2 cm de largura. ','??rvore de grande porte que pode chegar a 35m de altura. Suas folhas s??o compostas palmadas com comprimento entre 5 e 14 cm e largura entre 3 e 4 cm. Possui flores de colora????o roxa reunidas em infloresc??ncia terminal. Possui frutos no formato de vagem que abrigam sementes aladas ??s quais se dispersam facilmente com o vento.',
'??rvore de grande porte. Sua casca ?? marrom-escura, muito espessa, fendilhada e com cristas irregulares. Possui flores cor de creme com cerca de 2 cm de di??metro. Seus frutos s??o do tipo legume deiscente, com colora????o marrom- escuro possuindo cerca de 20cm de comprimento e largura de 2 cm.','??rvore de grande porte que pode atingir at?? 15 m de altura. Possui uma copa de forma c??nica e folhas de colora????o verde brilhante. Suas grandes flores s??o arom??ticas com colora????o que pode variar de branca a r??sea-purp??rea. Possui fruto comest??vel com polpa suculenta, rico em vitaminas e minerais, formato ovoide e colora????o que pode variar, dependendo da ??rvore.','??rvore de grande porte com copa densa e folhagem abundante. Possui folhas simples, opostas e el??pticas, infloresc??ncia com grandes quantidades de pequenas flores de colora????o creme. Seu fruto, de colora????o roxa, tem forma ovoide e mede de 2 a 3 cm de comprimento.','??rvore com casca ??spera, rugosa e finamente fendilhada. Possui grandes flores alvas em cimeiras terminais, e frutos do tipo legume indeiscente, de colora????o castanho-avermelhado com cerca de 15 cm de comprimento e 5 cm de largura. ','Conhecido como gigante da floresta ?? uma ??rvore de grande porte que pode atingir at?? 30 m de altura. A casca possui tonalidade parda. Possui pequenas flores hermafroditas alvas e frutos ovalados de cor marrom.',
'??rvore de grande porte com casca espessa, escura, fendilhada e l??tex de cor amarela. Possui pequenas flores brancas dispostas em cimeiras, terminais ou axilares. Seu fruto de cor verde possui cerca de 2 cm de di??metro.',
'??rvore pequena de casca ??spera, clara e descamante com l??tex. Suas pequenas flores s??o amareladas e dispostas em glom??rulos axilares. Possui fruto alaranjado com cerca de 2,5 cm de di??metro.','??rvore de pequeno porte com casca ??spera e descamativa. Possui flores brancas e fruto amarelo, quando maduro, com cerca de 3 cm de di??metro.','Trepadeira herb??cea, viscosa com pelos amarelos ou castanhos. Possui flores grandes alvo-purp??reas que aparecem de maneira isolada e fruto amarelado.','??rvore de grande porte com tronco reto e cil??ndrico, levemente tortuoso, casca externa cinza, lisa ou ??spera, podendo alcan??ar 15 m de altura.  Suas flores possuem colora????o branco-amarelada. Seus frutos s??o lenhosos e secos com quatro asas grandes, com colora????o verde quando imaturo e amarelo quando maduro. ','??rvore de casca ??spera. Possui pequenas flores alvas e fruto no formato de c??psula carnosa com cerca de 1,5 cm de di??metro. ','Encontrado na forma de arbusto, subarbusto ou ??rvore. Possui fruto do tipo vagem achatada de colora????o marrom. Suas folhas s??o parcialmente ou totalmente fendidas em duas, aparentando uma pata de vaca. Sua flora????o ocorre entre os meses de agosto e fevereiro e sua frutifica????o entre novembro e mar??o. Possui os morcegos como seus principais polinizadores e ?? muito utilizada para lenha e uso medicinal.','Tamb??m conhecido como orelha-de-burro ?? uma ??rvore de pequeno porte com casca ??spera e escura, que pode descamar em ??rvores velhas. Possui flores amarelas no in??cio e alaranjadas no final que se disp??em em racemo terminal longo. Seus frutos de colora????o amarela possuem aproximadamente 1 cm de di??metro e se disp??em em cachos pendentes.','??rvore de grande porte, podendo chegar at?? 16m de altura. Seu tronco ?? levemente tortuoso com casca interna fibrosa, rosada e estrias brancas. Possui pequenas flores alvo-amareladas, ligeiramente perfumadas e frutos em c??psula seca de colora????o verde a negra, dura, de 1,5 cm a 3,5 cm de comprimento . ',
'??rvore de grande porte com casca de colora????o marrom escura, flores de colora????o roxa e frutos do tipo legume, compresso de colora????o marrom.',
'??rvore de pequeno a m??dio porte com tronco de 30 a 60 cm de di??metro e casca acinzentada. Possui flores vistosas, grandes, com p??talas brancas e franjadas. Seus frutos s??o c??psulas lenhosas com formato que lembra um dedal.','Arbusto de grande porte com at?? 3 m de altura. Possui grandes flores brancas ou r??seas e frutos do tipo legume plano, com cerca de 25 cm de comprimento e 2,5 cm de largura.','??rvore de tronco tortuoso e casca suberosa, espessa e clara, podendo ser tuberculosa em ??rvores velhas. Possui grandes flores de p??talas brancas e frutos capsulares com cerca de 15 cm de comprimento.','??rvore de casca ??spera e clara. Possui flores brancas ou amarelo-claras, com manchas vin??ceas e um fruto c??psula lenhosa com aproximadamente 4 cm de comprimento.', '??rvore de casca ??spera e clara. Possui flores brancas ou amarelo-claras, com manchas vin??ceas e um fruto c??psula lenhosa com aproximadamente 4 cm de comprimento.', 'Pode ser encontrado na forma de arbusto ou ??rvore de tronco tortuoso e casca ??spera, podendo ser fendida em ??rvores mais velhas. Suas grandes flores possuem colora????o creme com estames longos e numerosos, possui fruto drupa globosa de colora????o verde.','??rvore pequena de casca marrom escura, possui grandes flores brancas que aparecem isoladas ou em pequenos grupos. Possui fruto com colora????o verde por fora e avermelhado internamente, com cerca de 4 cm de comprimento. ',
'Caracter??sticas: ??rvore pequena de casca ??spera. Possui grandes flores purp??reas a roxa e pequenos frutos no formato de c??psula ovoide com cerca de 8mm de comprimento e 6mm de largura.   ', 
'??rvore de grande porte, podendo chegar a 15 m de altura, comumente encontrada em brejos. Possui flores pequenas de colora????o bege e seu crescimento ?? considerado r??pido. Da casca ?? extra??do um l??tex de cor vermelha, parecido com o sangue. Da?? o nome ??Sangra d????gua??',
'Planta herb??cea, ereta, de pequeno porte. Possui flores amarelas, solit??rias, que geralmente se agrupam no topo da planta. Possui um pequeno fruto (com aproximadamente 6mm de comprimento) que aparece na forma de c??psula.']

const medicinalArvores = ['A polpa da fruta possui a????o antioxidante, anticarcinog??nica, anti-inflamat??ria e antimicrobiana. ', 'Ainda n??o foram catalogadas propriedades medicinais para essa planta.', 'Sua casca tem propriedades adstringentes, depurativas e hemost??ticas. ?? indicada para reduzir sangramentos, combater diarreias, ajudar na cicatriza????o da pele; para ajudar a eliminar subst??ncias nocivas que prejudicam a sa??de; e para estancar hemorragias.','Sua fruta possui a????o calmante, diur??tica e anti-inflamat??ria, sendo usada para combater as inflama????es bucais, gastrointestinais, urogenitais e intestinais.','Na medicina popular a planta ?? utilizada, ap??s infus??o com ??lcool, no tratamento de contus??es, alivia incha??o e dores nas pernas, atua tamb??m como repelente e anti-inflamat??rio. O sabonete de arnica ?? um cosm??tico bastante procurado para tratar pele ressecada ou hematomas.','Sua raiz ?? utilizada como anti-inflamat??rio e indicada para dor de dente, extra????o de dente, infec????o, infec????o de dente e ferimentos.','O ch?? das folhas e ra??zes ?? utilizado na medicina popular para fins diur??ticos, bals??micos, antirreum??ticos e em casos de gripe, bronquite, pneumonia e tosse persistente.',
'Sua fruta ?? rica em f??sforo, ferro e vitamina C. Da semente ?? retirado o ??leo que ?? utilizado na medicina popular para tratamento de doen??as de pele e picadas de insetos.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.', 'Do seu fruto ?? retirada uma gordura saud??vel que ajuda a equilibrar o colesterol. ?? rica em ??cidos graxos e utilizada para tratamento de gripe e resfriado, possuindo a????o anti-inflamat??ria.','Combate a prolifera????o de fungos, possui a????o antiss??ptica e anti-inflamat??ria. Pode ser aplicado diretamente na pele ou utilizado no preparo de ch??s com as folhas e as cascas do caule.','A fruta e o ??leo possuem a????o antioxidante, antibacteriana e verm??fuga, aumenta a saciedade, al??m de ser considerado um energ??tico natural. Pode ser encontrado tamb??m em produtos de beleza como cremes, sabonetes e xampus para hidratar e revitalizar cabelos e pele.',
'O ??leo da castanha possui a????o antiss??ptica e cicatrizante.','As folhas e a goma s??o usadas no combate a doen??as pulmonares e contra dermatites. Sua casca ?? utilizada no tratamento de varizes e de edema testicular, al??m de atuar no combate ?? hemorragia e ?? diarreia.','Seu fruto auxilia no combate a ??lcera e possui efeito antioxidante.','?? utilizada na produ????o de ch??s e xaropes para combater tuberculose, afec????es dos pulm??es e anemia.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.','Auxilia no controle da hipertens??o, ?? utilizado na medicina popular como antirreum??tico, diur??tico, contra inflama????es de pele e garganta, reumatismo, artrite e s??filis, al??m de atuar como eliminador de ??cido ??rico do sangue. Sua folha pode ser aplicada diretamente na pele ou utilizada na forma de ch??.','Um produto resinoso ?? extra??do do tronco da copaibeira e possui propriedades anti-inflamat??rias, cicatrizante, analg??sicas e expectorantes. ?? indicado para ajudar na cicatriza????o de feridas, tosse ou para aliviar os sintomas da artrite.',
'Ainda n??o foram catalogadas propriedades medicinais para essa planta.',
'Possui propriedades vasodilatadoras, diur??tica, anti-hemorr??gica, antiasm??tica, anti-inflamat??ria e antiss??ptica. De vers??til utiliza????o, pode ser ministrada na forma de ch??s, pomadas ou sucos. ','Possui a????o expectorante, anti-inflamat??ria, descongestionante, verm??fuga e estimula a imunidade. ?? comumente utilizado na forma de ch??, inala????o do ??leo essencial e uso t??pico. Vale ressaltar que o eucalipto pode apresentar efeitos colaterais como dermatite, dificuldade para respirar e taquicardia, podendo provocar - se utilizado em exagero -, sonol??ncia ou hiperatividade. ',
'Sua casca possui propriedades antioxidantes e antitumorais, ?? utilizada como anti-inflamat??rio, auxiliando na cicatriza????o de feridas.',
'Seus frutos s??o ricos em vitamina  C e cont??m quantidades razo??veis de vitaminas A e do complexo B. O ch?? das folhas pode ser utilizado no tratamento de inflama????es na boca e garganta e ??lcera. Al??m disso, o extrato aquoso, retirado do broto, possui uma intensa a????o contra agentes respons??veis pela diarreia de origem microbiana.','',
'Seu fruto ?? utilizado como bactericida, inseticida e repelente.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.','O extrato da planta pode ser utilizado para tratar anemia, amigdalite, infec????o urin??ria, bronquite, candid??ase, infec????o na pr??stata, mioma, cisto nos ov??rios. Facilita tamb??m a cicatriza????o de feridas internas e externas. Deve-se ter cuidado na utiliza????o por apresentar uma elevada toxicidade, podendo causar urtic??ria, tontura, n??usea, v??mito e diarreia.','O ch?? da casca ?? utilizado na medicina popular no tratamento de adenocarcinoma (p??ncreas), c??ncer do es??fago, cabe??a, intestino, pulm??es, pr??stata e l??ngua, na doen??a de Hodgkin, leucemia e l??pus. Sua atividade antitumoral prov??m do Lapachol, principal princ??pio ativo do Ip??- roxo.',
'Sua casca tem propriedades adstringentes, depurativas e hemost??ticas. ?? indicada para reduzir sangramentos, combater diarreias, ajudar na cicatriza????o da pele; para ajudar a eliminar subst??ncias nocivas que prejudicam a sa??de; e para estancar hemorragias.','Ajuda a fortalecer o sistema imunol??gico devido ao alto poder antioxidante. Sua fruta atua positivamente no funcionamento do intestino, por ser rico em fibras, e possui a????o diur??tica. ','A casca do caule possui propriedades anti-inflamat??ria, anticarcinog??nica e auxilia no controle de diabetes. Os frutos, al??m de serem antioxidantes, possuem a????o hipoglicemiante, mimetizando a a????o da insulina no organismo.','?? utilizada a seiva e ch??s da casca e folha para auxiliar no tratamento de gastrites e ??lceras. Possui a????o antioxidante e ?? popularmente utilizado como verm??fugo. ','A casca da planta ?? rica em propriedades medicinais, entre elas: adstringente, anti-inflamat??ria, desinfetante, descongestionante, em??tica e laxante.',
'Ainda n??o foram catalogadas propriedades medicinais para essa planta.',
'Ainda n??o foram catalogadas propriedades medicinais para essa planta.','A folha e a casca s??o utilizadas em infus??o. Por possu??rem a????o antioxidante, auxilia na preven????o da anemia, regula a press??o arterial, al??m de combater a diabetes.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.','Sua folha possui a????o antif??ngica e antioxidante, sendo utilizada na forma de ch??.','Possui propriedades terap??uticas tais como: adstringente, antibacteriana, anti-inflamat??ria, laxante, antif??ngica e protetor da mucosa intestinal. Suas folhas s??o usadas na medicina popular para al??vio de diarreia, disenteria, infec????es intestinais, infec????es da boca, garganta, hemorroida e cicatriza????o de feridas. ?? empregado para o al??vio de tosse e bronquite, al??m de agir como laxante natural, se ingerido com a????car.','O ch?? de suas folhas ?? empregado contra disenteria e diarreia, no tratamento de problemas relacionados com a pr??stata e como estimulante uterino para facilitar o parto.',
'Olho de Cabra',
'Da casca dessa ??rvore ?? retirado um extrato alco??lico que se mostrou eficaz no tratamento e preven????o de alguns sintomas da asma.','?? poss??vel utilizar folhas, cascas e sementes para produ????o de ch??, extrato ou tintura.  Indicada para problemas renais, hipertens??o, anemia e doen??as do cora????o. Tamb??m auxilia no combate a diabetes por ser capaz de diminuir os n??veis de glicose no sangue.','Seu ??leo possui propriedades analg??sica e anti-inflamat??ria. ','A casca ?? indicada para curar feridas e inflama????es. J?? as folhas s??o indicadas para diarreia, c??lica e no combate ?? ameb??ase.', 'A casca ?? indicada para curar feridas e inflama????es. J?? as folhas s??o indicadas para diarreia, c??lica e no combate ?? ameb??ase.', 'O ??leo retirado da castanha possui propriedades antioxidantes por conter betacaroteno. Estudos apontam que essa o ??leo ameniza a????o degenerativa de drogas.','Ainda n??o foram catalogadas propriedades medicinais para essa planta.',
'Ainda n??o foram catalogadas propriedades medicinais para essa planta.', 
'As folhas e a casca da planta s??o usadas para tratar feridas, dist??rbios g??stricos, reumatismo e hipertens??o.',
'Ainda n??o foram catalogadas propriedades medicinais para essa planta.']
const referenciasArvores = ['R41 e R42.', 'R33.', 'R9.','R5 e R13.','R2.','R1 e R2.','R54, R55, R56 e R57.','R35, R36 e R37.','R32.', 'R48.','R5, R15 e R63.','R5 e R65.','R5 e R64.','R25.','R38, R39 e R40.','R22.','R5.','R5.','R5.','R26, R27 e R66.','R5 e R8.','R17 e R18.','R3.','R44 e R45','R28 e R34.','R48, R49, R50 e R51','R19.','R5 e R60.','R5.','R5 e R65.','R45 e R46',
'R5 e R9.','R52.','R53.','R5, R59 e R63.','R4.','R5.','R5.','R5, R29, R30 e R31.','R5.','R21.','R5.','R23 e R24.','R23 e R24.','R5 e R12.',
'R5, R6 e R61.','R20.','R5 e R11.','R5 e R64.','R5 e R15.', 'R5 e R14.', 'R5, R58 e R62.','R5.','R5.', 'R7.','R5.']
const IMAPLANTA = [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,p21, p22, p23, p24, p25, p26, p27, p28, p29, p30,p31, p32, p33, p34, p35, p36, p37, p38, p39, p40,p41, p42, p43, p44, p45, p46, p47, p48, p49, p50,p51, p52,p53,p54,p55,p56]
