import { ImageBackground } from "expo-image";
import { Image, StyleSheet, Text, View } from "react-native";


export default function SplashScreen() {
    return (
        <View style={style.safe}>
            <ImageBackground 
                  source={require("@/assets/splash/mapa.png")}
                  style={style.bg}
                  
                  >
                    {/** Container centralizado o conteúdo */}
             <View style={style.center}>  
               <Image
                source={require("@/assets/splash/icone-motorista.png")} 
                style= {style.icone} />

             {/** Título do aplicativo*/} 
            <Text style={style.title}> App Motorista </Text>
             </View>
            </ImageBackground>

        </View>
    )
}
 const style =StyleSheet.create({
 safe:{
    flex: 1, // ocupa toda a altura disponível 
    backgroundColor: "#fff", 
 }, 

  bg: {
    flex: 1, // ocupa todo o espaço do safeAreaView
    justifyContent: "center", // centraliza verticalmente
    alignItems: "center", // centraliza horizontalmente

  },

   center: {
    alignItems: "center", // centraliza o filho horizotalmente
    justifyContent: "center", // centraliza o filho verticalmente

   },
   
   icone: {
    width: 120, // largura do ícone
    height: 120, // altura do ícone
    marginBottom: 16, // espaço abaixo do ícone
   },

  title: {
    fontSize: 28, // tamanho da fonte
    fontWeight: "700", // peso da fonte (bold)
    color: "#0A84ff", // cor da fonte 

  }

 })