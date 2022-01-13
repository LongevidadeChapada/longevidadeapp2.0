import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, ImageBackground } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useRecoilState } from 'recoil';
import contadorPlantas from '../../atom/prantas.atom';
import { Switch } from 'react-native-gesture-handler';

export default function Map( {navigation}) {
    if (setScanned){}
    
    const [leitura,setLeitura] = useRecoilState(contadorPlantas);
  

    navigation.setOptions({
        headerTitle: 'Leitor de QR Code'
    });
      
    
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);

    

  const handleBarCodeScanned = ({data}) => {   
  
    switch(data) {
      case "acai":
      setLeitura('0')
      break;
      case "alecrim do cerrado":
      setLeitura('1')
      break;
      case "angico":
      setLeitura('2')
      break;
      case "araca":
      setLeitura('3')
      break;
      case "arnicao":
      setLeitura('4')
      break;
      case "arniquinha":
      setLeitura('5')
      break;
      case "assa-peixe":
      setLeitura('6')
      break;
      case "bacurizeiro":
      setLeitura('7')
      break;
      case "bananeira do cerrado":
      setLeitura('8')
      break;
      case "banha de galinha":
      setLeitura('9')
      break;
      case "barbatimao":
      setLeitura('10') 
      break;
      case "buriti":
      setLeitura('11')
      break;
      case "cajui":
      setLeitura('12')
      break;
      case "candinheiro":
      setLeitura('13')
      break;
      case "canjiquinha":
      setLeitura('14')
      break;
      case "carne-de-vaca":
      setLeitura('15')
      break;
      case "carvoeiro cerrado":
      setLeitura('17')
      break;
      case "carvoeiro branco":
      setLeitura('16')
      break;
      case "cedro":
      setLeitura('18')
      break;
      case "chapeu de couro":
      setLeitura('19')
      break;
      case "copaiba":
      setLeitura('20')
      break;
      case "dormideira":
      setLeitura('21')
      break;
       case "embauba":
      setLeitura('22')
      break;
      case "eucalipto":
        setLeitura('23')
      break;
      case "faveleira":
          setLeitura('24')
      break;
      case "goiabeira":
          setLeitura('25')
      break;
      case "grao de galo":
          setLeitura('26')
      break;
      case "iburucu":
          setLeitura('27')
      break;
      case "indaia":
          setLeitura('28')
      break;
      case "ipe amarelo":
          setLeitura('29')
      break;
      case "ipe roxo":
          setLeitura('30')
      break;
      case "jacare":
          setLeitura('31')
      break;
      case "jambo":
          setLeitura('32')
      break;
      case "jambolão":
          setLeitura('33')
      break;
      case "jequitiba":
          setLeitura('34')
      break;
      case "landi":
          setLeitura('35')
      break;
      case "mama-cadela":
          setLeitura('36')
      break;
      case "mangabeira":
          setLeitura('37')
      break;
      case "maracuja do mato":
          setLeitura('38')
      break;
      case "marfim":
          setLeitura('39')
      break;
      case "marinheiro":
          setLeitura('40')
      break;
      case "mata-pasto":
          setLeitura('41')
      break;
      case "miroro":
          setLeitura('42')
      break;
      case "murici":
          setLeitura('43')
      break;
      case "mutamba":
          setLeitura('44')
      break;
      case "olho de cabra":
          setLeitura('45')
      break;
      case "pacari":
          setLeitura('46')
      break;
      case "pata de vaca":
          setLeitura('47')      
      break;
      case "pau santo":
          setLeitura('48')       
      break;
      case "pau terra mata":
          setLeitura('49')       
      break;
      case "pau terra cerrado":
          setLeitura('50')
      break;
      case "pequi":
        setLeitura('51')
      break;
      case "pimenta de macaco":
          setLeitura('52')
      break;
      case "quaresmeira roxa":
        setLeitura('53')
      break;
      case "sangra d'agua":
          setLeitura('54')
      break;
      case "vassourinha":
          setLeitura('55')
      break;


      default:
      setLeitura('56')
      

    }
    setScanned(true); 
    navigation.navigate('Infoplan')

    };

      
  if (hasPermission === null) {
      return <Text>Sem acesso a Camera, liberar a utilização da câmera em: (configurações - apps e notificações - avançado - permissões - câmera) e libere a utilização da câmera par ao aplicativo </Text>;
  }
  if (hasPermission === false) {
      return <Text>Sem acesso a Camera, liberar a utilização da câmera em: (configurações - apps e notificações - avançado - permissões - câmera) e libere a utilização da câmera par ao aplicativo </Text>;
  }

 return (
    <View style={style.container}>
        <ImageBackground 
      source={require('../../assets/TelaPrincipal.jpeg')}
      style={style.image}>
      </ImageBackground>
      <View style={style.textcontainer}>
        <Text style={[style.text, {color: '#CECECF'} ]}>Longevidade com Qualidade  </Text>
      </View>
      <View style={style.scrowcontainer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Ler Outro Qr Code'} onPress={() => {setScanned(false)
      navigation.navigate('Home')} } />}
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
      opacity: .5,
      resizeMode: 'contain',
      
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
        fontSize: 19,
        
          
        
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
        top: '5%',
        bottom: '40%',
        right: '1%',
        left: '5%',
           
    
      },
      alertcontainer:{
     
    
      },

    
  });
  
  const listaData = ['Açai', 'Alecim do cerrado', 'Angico-do-campo','Araça-cinzento','Arnicão',' arniquinha ','assa-Peixe',
  'Bacurizeiro','Bananeira do Cerrado', 'banha de galinha','Barba Timão','Buriti',
  'Cajuí','Candeeiro','Canjiquinha','Carne-de-Vaca','Carvoeiro Branco','Carvoeiro do Cerrado','Cedro','Chapeu de couro','Copaiba',
  'Dormideira',
  'Embauba','Eucalipto',
  'Faveleira',
  'Goiabeira','Grão de Galo',
  'Imburuçu','Indaia','Ipê Amarelo','ipe roxo',
  'Jacaré','Jambo','Jambolão','Jatobá-do-cerrado','Jequitiba',
  'Landi',
  'Mama-Cadela','Mangabeira','Maracuja do Mato','Marfim','Marinheiro','Miroro','Murici','Mutamba',
  'Olho de Cabra',
  'Pacari','Pata de Vaca','Pau Santo','Pau Terra (cerrado)', 'Pau Terra (mata)', 'Pequi','Pimenta de Macaco',
  'Quaresmeira Roxa', 
  'Sangra d´água',
  'Vassourinha',
  ];