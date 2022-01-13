
import { CurrentRenderContext } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';


export default function Ref( {navigation}) {
  
  navigation.setOptions({
      headerTitle: 'Referências'
  })

return (
  <View style={style.container}>
      <ImageBackground 
    source={require('../../assets/TelaPrincipal.jpeg')}
    style={style.image}> 
        
      
    </ImageBackground>
    <ScrollView style={style.scrow}>

        <Text style={[style.text, {color: '#747482', fontSize:17,paddingLeft:5,textAlign:'center'} ]} >Referências Bibliográficas:  </Text>
        <Text style={[style.text, {color: '#380202', fontSize:12},]}>
        [1] - BORBA, Aneliza Meireles; MACEDO, Miramy; WALTER, Luiz Reinaldo de Figueiredo. Odontologia alternativa com plantas medicinais na Chapada dos Guimarães:  Mato Grosso - Brasil. Revista Sul-Brasileira de Odontologia: RSBP, Joinville, v. 5, n. 1, p. 43-49, 2008.

        {'\n'}[2]- MOREIRA, Déborah Luíza; GUARIM-NETO, Germano. Usos múltiplos de plantas do Cerrado: um estudo etnobotânico na comunidade sitio Pindura, Rosário oeste, Mato Grosso, Brasil. Polibotánica, México,  n. 27, p. 159-190,  abr.  2009.

{'\n'}[3]- EMBRAPA. Trilha Ecológica. 2020. Disponível em: https://www.embrapa.br/agrossilvipastoril/sitio-tecnologico/trilha-ecologica/o-que-e-a-trilha-ecologica. Acesso em: 10 maio 2021.

{'\n'}[4]- ROÇA, Coisas da. Propriedades medicinais, benefícios e utilização do Jequitibá. 2019. Disponível em: https://www.coisasdaroca.com/plantas-medicinais/jequitiba.html. Acesso em: 10 maio 2021.

{'\n'}[5]- DURIGAN, Giselda et al. Plantas do cerrado Paulista: imagens de uma paisagem ameaçada. São Paulo: Instituto Florestal Secretaria do Meio Ambiente, 2004. 488 p.

{'\n'}[6]- DALGALLO, M.R.; VALADÃO, D.A.; FRANCISQUINI E.; ONOHARA, M.T. (outubro de 2011). ESTUDO FITOQUÍMICO DO EXTRATO E PRECIPITADOS DA SEMENTE DA "Ormosia arborea" (Tese). São Luís - Maranhão: 51º Congresso Brasileiro de Química. Consultado em 10 de outubro de 2017

{'\n'}[7]- Silva, G. A. d. (1999). Estudo farmacognóstico de Croton urucurana baillon (Sangra d\'agua).

{'\n'}[8]- PIERI, F.A.; MUSSI, M.C.; MOREIRA, M.A.s.. Óleo de copaíba (Copaifera sp.): histórico, extração, aplicações industriais e propriedades medicinais. Revista Brasileira de Plantas Medicinais, [S.L.], v. 11, n. 4, p. 465-472, 2009. FapUNIFESP (SciELO).

{'\n'}[9]- AMBIENTE, Secretaria de Infraestrutura e Meio. ANGICO, UM FORTE DA FLORA BRASILEIRA. 2021. Disponível em: https://www.infraestruturameioambiente.sp.gov.br/2016/03/angico-um-forte-da-flora-brasileira/. Acesso em: 20 maio 2021.

{'\n'}[10]- PAIVA SOBRINHO, Severino de; SIQUEIRA, Aline Gonçalves de. Caracterização morfológica de frutos, sementes, plântulas e plantas jovens de mutamba (Guazuma ulmifolia Lam. - Sterculiaceae). Revista Brasileira de Sementes, [S.L.], v. 30, n. 1, p. 114-120, 2008. FapUNIFESP

{'\n'}[11]- HENRIQUE. DIABETES E CHÁ DE PATA-DE-VACA: sim ou não, saiba por quê! Sim ou não, saiba por quê! 2021. Disponível em: https://controledadiabetes.com.br/diabetes-e-cha-de-pata-de-vaca/. Acesso em: 12 maio 2021.

{'\n'}[12]- ROÇA, Cosias da. Murici Fruto Brasileiro repleto de bons nutrientes. 2016. Disponível em: https://www.coisasdaroca.com/plantas-medicinais/murici.html. Acesso em: 10 maio 2021.

{'\n'}[13]- FLORIOS, Daia. Araçá: a fruta das propriedades diuréticas e anti-inflamatórias. a fruta das propriedades diuréticas e anti-inflamatórias. 2017. Disponível em: https://www.greenme.com.br/consumir/usos-beneficios/64373-araca-a-fruta-das-propriedades-diureticas-e-anti-inflamatorias/. Acesso em: 11 jun. 2021.

{'\n'}[14]- AYRES, Mariane Cruz Costa et al. CONSTITUINTES QUÍMICOS DAS FOLHAS DE Qualea grandiflora:: atribuição dos dados de rmn de dois flavonóides glicosilados acilados diastereoisoméricos. Quim. Nova, Araraquara, v. 6, n. 31, p. 1481-1484, 2008.

{'\n'}[15]- ECYCLE. Barbatimão: usos, propriedades e benefícios. usos, propriedades e benefícios. 2020. Disponível em: https://www.ecycle.com.br/barbatimao/. Acesso em: 10 jun. 2021.
{'\n'}
[16]- WWF. Sucupira. 2002. Disponível em: https://www.wwf.org.br/natureza_brasileira/especiais/biodiversidade/especie_do_mes/especies_cerrado/sucupira/. Acesso em: 2 jun. 2021.
{'\n'}
[17]- INTERNATIONAL JOURNAL OF PHARMACEUTICAL SCIENCES AND DRUG RESEARCH. Coden Usa, 2021.
{'\n'}
[18]- SIGRIST, Sergio. Dormideira. 2014. Disponível em: https://www.ppmac.org/content/dormideira-sensitiva. Acesso em: 19 maio 2021.
{'\n'}
[19]- ROÇA, Coisas da. Propriedades medicinais e utilização da Curriola. 2020. Disponível em: https://www.coisasdaroca.com/plantas-medicinais/curriola.html. Acesso em: 27 maio 2021.
{'\n'}
[20]- APREMAVI. Pacari ou Dedaleiro: um remédio por natureza. um remédio por natureza. 2009. Disponível em: https://apremavi.org.br/pacari-ou-dedaleiro-um-remedio-por-natureza/. Acesso em: 22 maio 2021.
{'\n'}
[21]- CARVALHO, Paulo Ernani Ramalho de. Pau-Marfim - Balfourodendron riedelianum. Colombo Pr: Embrapa, 2004. 11 p.
{'\n'}
[22]- LOPES, Gerson Luiz. Clethra scabra Pers. Cajuja, carne-de-vaca, cajuja. 2018. Disponível em: https://sites.unicentro.br/wp/manejoflorestal/8404-2/. Acesso em: 22 maio 2021.
{'\n'}
[23]- SARTORELLI, Paolo Alessandro Rodrigues; CAMPOS FILHO, Eduardo Malta. GUIA DE PLANTAS DA REGENERAÇÃO NATURAL DO CERRADO E DA MATA ATLÂNTICA. São Paulo: Agroicone, 2017. 140 p.
{'\n'}
[24]- Menezes Filho AP, Bessa DR, Souza Castro CF. Perfil químico y actividad antifúngica del aceite esencial de la flor de Bauhinia rufa (Bong.) Steud. Rev Cubana Farm [revista en Internet]. 2020 [citado 23 Jul 2021];, 53(2):[aprox. 0 p.].
{'\n'}
[25]- ASSOCIAÇÃO BRASILEIRA DE TECNOLOGIA DE SEMENTES. 001: Vinhático (Plathymenia reticulata Benth.). 1 ed. Londrina - Pr, 2017. 5 p.
{'\n'}
[26]-  PLANTAMED. Echinodorus macrophyllus (Kunth) Micheli. - CHAPÉU-DE-COURO. 2020. Disponível em: https://www.plantamed.com.br/plantaservas/especies/Echinodorus_macrophyllus.htm. Acesso em: 22 maio 2021.
{'\n'}
[27]- IDENTIFICAÇÃO E TECNOLOGIA DE PLANTAS MEDICINAIS DA FLORA DE CLIMA TEMPERADO. Pelotas Rs: Embrapa, v. 1, n. 1, 2007.
{'\n'}
[28]- AGEITEC. ÁRVORE DO CONHECIMENTO Bioma Caatinga: faveleira. Faveleira. Disponível em: https://www.agencia.cnptia.embrapa.br/gestor/bioma_caatinga/arvore/CONT000g79856tg02wx5ok0wtedt3qc4zwp8.html. Acesso em: 11 maio 2021. 
{'\n'}
[29]- Aline C. Pereira, Ana Bárbara D. Pereira, Carolina C.L. Moreira, Leida M. Botion, Virgínia S. Lemos, Fernão C. Braga, Steyner F. Cortes,Hancornia speciosa Gomes (Apocynaceae) as a potential anti-diabetic drug,Journal of Ethnopharmacology,Volume 161,2015,Pages 30-35,
{'\n'}
[30]- Torres-Rêgo, M., Furtado, A.A., Bitencourt, M.A.O. et al. Anti-inflammatory activity of aqueous extract and bioactive compounds identified from the fruits of Hancornia speciosa Gomes (Apocynaceae). BMC Complement Altern Med 16, 275 (2016).
{'\n'}
[31]- UFMG. Fitoterápico desenvolvido com extrato de folhas de mangabeira combate diabetes e hipertensão. 2016. Disponível em: https://www.ufmg.br/online/arquivos/042291.shtml. Acesso em: 11 maio 2021.
{'\n'}
[32]- NETUAI. Arvores do Bioma Cerrado. 2021. Disponível em: http://www.arvoresdobiomacerrado.com.br/site/2017/03/28/porcelia-macrocarpa-warm-r-e-fr/. Acesso em: 10 maio 2021.

{'\n'}[33]- DURIGAN, Giselda et al. Plantas Pequenas do Cerrado: biodiversidade negligenciada. São Paulo: Governo do Estado de São Paulo, 2018. 722 p.

{'\n'}[34]- NOVAES, T. E. R.; NOVAES, A. S. R.; GLUSCZAK, L.; VILARINHO, L. B. O. Medicinal potentials of the faveleira (Cnidoscolus quercifolius) and its uses in human health: a brief review. Research, Society and Development, [S. l.], v. 10, n. 2, p. e43910212845, 2021. DOI: 10.33448/rsd-v10i2.12845. Disponível em: https://rsdjournal.org/index.php/rsd/article/view/12845. Acesso em: 25 jul. 2021.

{'\n'}[35]- SIGRIST, Sergio. Bacuri, bacurizeiro. 2015. Disponível em: https://www.ppmac.org/content/bacuri-bacurizeiro. Acesso em: 03 jun. 2021.

{'\n'}[36]- EMBRAPA. BACURIZEIRO. 2002. Disponível em: https://www.embrapa.br/busca-de-publicacoes/-/publicacao/402749/bacurizeiro. Acesso em: 29 jun. 2021.

{'\n'}[37]- Morton, J. 1987. Bakuri. p. 308. In: Fruits of warm climates. Julia F. Morton, Miami, FL.

{'\n'}[38]- Thais Fernanda Moreira, Juliana Maria Sorbo, Felipe de Oliveira Souza, Barbara Colatto Fernandes, Fernanda Maria Marins Ocampos, Daniella Maria Soares de Oliveira, Carlos Alberto Arcaro, Renata Pires Assis, Andersson Barison, Obdulio Gomes Miguel, Amanda Martins Baviera, Christiane Pienna Soares, Iguatemy Lourenço Brunetti, "Emodin, Physcion, and Crude Extract of Rhamnus sphaerosperma var. pubescens Induce Mixed Cell Death, Increase in Oxidative Stress, DNA Damage, and Inhibition of AKT in Cervical and Oral Squamous Carcinoma Cell Lines", Oxidative Medicine and Cellular Longevity, vol. 2018, Article ID 2390234, 18 pages, 2018.

{'\n'}[39]- MOREIRA, Thais Fernanda. Caracterização fitoquímica e avaliação das atividades biológicas de Rhamnus sphaerosperma var. pubescens (Rhamnaceae). 2012. 96 f. Dissertação (Mestrado) - Curso de Ciências Farmacêuticas, Universidade Federal do Paraná, Curitiba, 2012.

{'\n'}[40]- LOPES, Gerson Luiz. Rhamnus sphaerosperma Sw. Canjiquinha. 2012. Disponível em: https://sites.unicentro.br/wp/manejoflorestal/9194-2/. Acesso em: 03 jun. 2021.

{'\n'}[41]- BENTES-GAMA, Michelliny de M.; RIBEIRO, George Duarte; FERNANDES, Cléberson de Freitas; MEDEIROS, Iraque Moura de. Açaí (Euterpe spp.): características, formação de mudas e plantio para a produção de frutos. Embrapa, Porto Velho, v. 1, n. 1, p. 1-6, 2005.

{'\n'}[42]- PORTINHO, José Alexandre; ZIMMERMANN, Livia Maria; BRUCK, Mirian Rotnes. Efeitos Benéficos do Açaí. International Journal Of Nutrology. [S.I], p. 15-20. 2012.

{'\n'}[43]- RODRIGUES FRIAS, Danila Fernanda; KOZUSNY-ANDREANI, Dora Inês. Utilização de extratos de plantas medicinais e óleo de Eucaliptus no controle in vitro de Microsporum canis. Rev Cubana Plant Med,  Ciudad de la Habana ,  v. 15, n. 3, p. 119-125,  sept.  2010 . 

{'\n'}[44]- SILVEIRA, Sheila Mello da et al. Composição química e atividade antibacteriana dos óleos essenciais de Cymbopogon winterianus (citronela), Eucalyptus paniculata (eucalipto) e Lavandula angustifolia (lavanda). Instituto Adolfo Luiz, [s. l], v. 1, n. 1, p. 471-480, 2012.

{'\n'}[45]- JANUÁRIO, Sonia Regina et al. O poder terapêutico do Ipê Roxo e seu uso na terapia complementar ao tratamento de neoplasias. Revista Brasileira de Terapias e Saúde, [S.L.], v. 5, n. 1, p. 9-14, 30 dez. 2014. Omnipax Editora.
{'\n'}[46]- FLORESTAS, Instituto Brasileiro de. Ipê Roxo. [20--?]. Disponível em: https://www.ibflorestas.org.br/lista-de-especies-nativas/ipe-roxo. Acesso em: 29 jun. 2021.

{'\n'}[47]- RODRIGUES, I.M.C.; SOUZA FILHO, A.P.s.; FERREIRA, F.A.. Estudo fitoquímico de Senna alata por duas metodologias. Planta Daninha, [S.L.], v. 27, n. 3, p. 507-513, 2009. FapUNIFESP (SciELO).

{'\n'}[48]- Carriconde, C. 2000. Introdução ao uso de fitoterápicos nas patologias de APS. CNMP, Olinda (citado em Lorenzi, Harri; Abreu Matos, Francisco José de: Plantas medicinais no Brasil: nativas e exóticas cultivadas. Instituto Plantarum, Nova Odessa, SP, 2002. ISBN 85-86714-18-6)

{'\n'}[49]- Carriconde, C. 2000. Introdução ao uso de fitoterápicos nas patologias de APS. CNMP, Olinda (citado em Lorenzi, Harri; Abreu Matos, Francisco José de: Plantas medicinais no Brasil: nativas e exóticas cultivadas. Instituto Plantarum, Nova Odessa, SP, 2002. ISBN 85-86714-18-6)

{'\n'}[50]- SAUDE, Tua. Goiabeira. 2021. Disponível em: https://www.tuasaude.com/goiabeira/. Acesso em: 17 jun. 2021.

{'\n'}[51]- RIBEIRO, Universidade Estadual do Norte Fluminense Darcy. Árvores da UENF: goiabeira. Goiabeira. 2000. Disponível em: https://uenf.br/projetos/arvoresdauenf/especie-2/goiabeira/. Acesso em: 30 jun. 2021.

{'\n'}[52]- NUNES, Polyana Campos. Caracterização física, química e avaliação da capacidade antioxidante do fruto jambo vermelho (Syzygium malaccense). 2015. 101 f. Dissertação (Mestrado) - Curso de Nutrição, Centro de Ciências da Saúde, Universidade Federal de Pernambuco, Recife, 2015.

{'\n'}[53]- VIZZOTTO, Márcia; FETTER, Mariana da Rosa. Jambolão: poderoso antioxidante*. Embrapa: Clima Temperado, Brasília, v. 1, n. 1, p. 1-2, 2009. Anual.

{'\n'}[54]- CRUZ, Jhonatas Emílio Ribeiro da; GUERRA, Joyce Ferreira da Costa; GOMES, Marcos de Souza; FREITAS, Guilherme Ramos Oliveira e; MORAIS, Enyara Rezende. Phytochemical Analysis and Evaluation of Antimicrobial Activity of Peumus boldus, Psidium guajava, Vernonia polysphaera, Persea Americana, Eucalyptus citriodora Leaf Extracts and Jatropha multifida Raw Sap. Current Pharmaceutical Biotechnology, [S.L.], v. 20, n. 5, p. 433-444, 18 jun. 2019. Bentham Science Publishers Ltd.

{'\n'}[55]- rticle Source: Vernonia polysphaera Baker: Anti-inflammatory activity in vivo and inhibitory effect in LPS-stimulated RAW 264.7 cells
Oliveira IdSdS, Colares AV, Cardoso FdO, Tellis CJM, Chagas MdSdS, et al. (2019) Vernonia polysphaera Baker: Anti-inflammatory activity in vivo and inhibitory effect in LPS-stimulated RAW 264.7 cells. PLOS ONE 14(12): e0225275.

{'\n'}[56]- Neto, Walter A. F. et al. Plantas medicinais e pessoas com tuberculose: descrição de práticas de cuidado no norte da Bahia, 2017. Epidemiol. Serv. Saude, Brasília, v. 1, n. 1, p. 1-10, 2020. Anual.

{'\n'}[57]- ANVISA, Ministério da Saúde e. MONOGRAFIA DA ESPÉCIE Vernonia polyanthes (“ASSA-PEIXE”). 2014. 65 f. Monografia (Especialização) - Curso de Ecologia, Ministério da Saúde, Brasília, 2014.

{'\n'}[58]- UNBCIÊNCIA. Pequi tem propriedades medicinais. 2009. Disponível em: https://www.unbciencia.unb.br/biologicas/104-ciencias-biologicas/355-pequi-tem-propriedades-medicinais. Acesso em: 10 jun. 2021.

{'\n'}[59]- Orsi, Patricia Rodrigues et al. Hymenaea stigonocarpa Mart. ex Hayne: A Brazilian medicinal plant with gastric and duodenal anti-ulcer and antidiarrheal effects in experimental rodent models. Journal of Ethnopharmacology. Clare: Elsevier B.V., v. 143, n. 1, p. 81-90, 2012.

{'\n'}[60]- LADEIA, E. da S.; COELHO, M. de F. B.; AZEVEDO, R. A. B. de; ALBUQUERQUE, M. C. de F. e. PROCEDÊNCIA DO FRUTO E SUBSTRATOS NA GERMINAÇÃO DE SEMENTES DE Pseudobombax longiflorum (Mart. et Zucc.) A. Robyns. Pesquisa Agropecuária Tropical, [S. l.], v. 42, n. 2, p. 174–180, 2012.

{'\n'}[61]  DALGALLO, M.R.; VALADÃO, D.A.; FRANCISQUINI E.; ONOHARA, M.T. (outubro de 2011). ESTUDO FITOQUÍMICO DO EXTRATO E PRECIPITADOS DA SEMENTE DA "Ormosia arborea" (Tese). São Luís - Maranhão: 51º Congresso Brasileiro de Química. Consultado em 10 de outubro de 2017

         
        </Text>
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
    left: 0
    
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
      fontSize: 25,
      
        
      
    },
    scrow:{
    
        marginTop: '9%',
        marginBottom: '20%',
        paddingHorizontal: 13,
       
    
      },

});