import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import How from "./pages/How";
import Map from "./pages/Map";
import Agend from "./pages/Agend";
import Cat from "./pages/Cat";
import Aten from "./pages/Aten";
import Riscos from "./pages/Riscos";
import Consult from "./pages/Consult";
import Trilha from "./pages/Trilha";
import Plantas from "./pages/Plants";
import Infoplan from "./pages/Infoplan";
import Ref from "./pages/Ref";

const Stack= createNativeStackNavigator();

function Routes(){
    return(

        <RecoilRoot>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home"
                component={Home}
                options={{ headerShown: false}}
                />
                <Stack.Screen 
                name="Movies"
                component={Movies}
                />
                <Stack.Screen 
                name="How"
                component={How}                
                />
                <Stack.Screen 
                name="Map"
                component={Map}
                              
                />
                <Stack.Screen 
                name="Cat"
                component={Cat}
                              
                />
                <Stack.Screen 
                name="Agend"
                component={Agend}
                              
                />
                <Stack.Screen 
                name="Riscos"
                component={Riscos}
                              
                />
                <Stack.Screen 
                name="Aten"
                component={Aten}
                              
                />
                <Stack.Screen 
                name="Consult"
                component={Consult}
                              
                />
                <Stack.Screen 
                name="Trilha"
                component={Trilha}
                              
                />
                <Stack.Screen 
                name="Plantas"
                component={Plantas}        
                />
                 <Stack.Screen 
                name="Infoplan"
                component={Infoplan}             
                />
                <Stack.Screen 
                name="Ref"
                component={Ref}             
                />

            </Stack.Navigator>
        </NavigationContainer>
        </RecoilRoot>
    )
}
    export default Routes;