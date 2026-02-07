import DashBoardHeader from "@/components/dashboard/DashBoardHeader";
import { View } from "react-native";

export default function DashbBoardScreen () {
  return (

    // View raiz que ocupa toda a altura disponivel com fundo branco
    <View>
      {/** Cabeçalho personalizado do dashBoard  */}
    <DashBoardHeader
    appName= "Meu app Motorista"
    userName= "Meiryellen Proença" 
    />
    </View>
  )
}