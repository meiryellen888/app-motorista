import DashBoardHeader from "@/components/dashboard/DashBoardHeader";
import SegmentoTabs from "@/components/dashboard/SegmentoTabs";
import VeiculoCArd from "@/components/dashboard/VeiculosCard";
import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

/** Define o tipo de abas disponiveis no dashboard 
 * Garante que apenas valores validos sejam usados em toda aplicação
 * valor : "Veículo" | "Mapas" | "Alertas" | "Bloqueios"
 */
type TabKey = "Veículo" | "Mapas" | "Alertas" | "Bloqueios";


export default function DashbBoardScreen () {

  //* avitoTab: Estado que rastreia qual aba esta selicionado
  // Inicia com "Veículos" sempre ativo 
  // setAtivo: feunção para atualizar o estado quando o usuário clicar em outra aba */
  
  const [ativoTab, setativoTab] = useState<TabKey>("Veículo")

  /** veiculo : array de dados dos veiculos
   * useMemo é usado para memorizar o array e não recalcular a cada renderização
   */
  const veiculos = useMemo(
    () =>    [
      // dados do primeiro veiculo
      {
        id: "1", // ID único para a chave React
        brand: "Chevrolet", // Marca do veículo
        model: "Trailblazer", // Modelo
        plate: "ABC123", // Placa de identificação
        agent: "Marta Santos", // Motorista/agente responsável
        location: "Perto da rua xyz", // Localização atual
        image: require("../../assets/images/trailblazerhcazuleclipse-2-2.png"), // Imagem do carro
      },
      // Segundo veículo - Chevrolet Trailblazer preto
      {
        id: "2",
        brand: "Chevrolet",
        model: "Trailblazer",
        plate: "ABC123",
        agent: "Lucas Alves",
        location: "Perto da rua DFG",
        image: require("../../assets/images/Trailblazer-Preto-Ouro-Negro1.png"),
      },
    ],
    [] // dependicias vazias = vai executar uma vez so

  )

  return (

    // View raiz que ocupa toda a altura disponivel com fundo branco
    <View>
      {/** Cabeçalho personalizado do dashBoard  */}
    <DashBoardHeader
    appName= "Meu app Motorista"
    userName= "Meiryellen Proença" 
    />

    <ScrollView 
    contentContainerStyle={styles.content}
    showsHorizontalScrollIndicator={false}
    >

    <SegmentoTabs<TabKey>
      items ={["Veículo", "Mapas", "Alertas", "Bloqueios"]}
      ativo ={ativoTab}
      onChange={setativoTab}

    /> 

    {ativoTab === "Veículo" && (

      <View style={styles.lista}>
        {veiculos.map((v) => 
        <VeiculoCArd key={v.id} veiculo={v} />
        )}

      </View>
    )}

    </ScrollView>

    </View>

  
  )
}

const styles = StyleSheet.create({

})