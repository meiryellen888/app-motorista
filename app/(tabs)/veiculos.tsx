import VeiculoCArd from "@/components/dashboard/VeiculosCard";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";



export default function VeiculoScreen() {

  const veiculos = useMemo(
    () => [
      // dados do primeiro veiculo
      {
        id: "1", // ID único para a chave React
        brand: "Chevrolet", // Marca do veículo
        model: "Trailblazer", // Modelo
        placa: "ABC123", // Placa de identificação
        motorista: "Marta Santos", // Motorista/agente responsável
        localizacao: "Perto da rua xyz", // Localização atual
        image: require("../../assets/images/trailblazerhcazuleclipse-2-2.png"), // Imagem do carro
      },
      // Segundo veículo - Chevrolet Trailblazer preto
      {
        id: "2",
        brand: "Chevrolet",
        model: "Trailblazer",
        placa: "ABC123",
        motorista: "Lucas Alves",
        localizacao: "Perto da rua DFG",
        image: require("../../assets/images/Trailblazer-Preto-Ouro-Negro1.png"),
      },
    ],
    [] // dependicias vazias = vai executar uma vez so

  )
  
  return (

    <View style={styles.lista}>
      {veiculos.map((v) =>
        <VeiculoCArd key={v.id} veiculo={v} />
      )}

    </View>
  )

}

const styles = StyleSheet.create({


  safe: {
    flex: 1,
    backgroundColor: "#ffff",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 90,

  },

  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "700",
    color: "#111",
    marginBottom: 12,

  },

  lista: {
    gap: 16,
    marginTop: 18,

  },

  placeholder: {
    marginTop: 24,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#f3f4f6",

  },

  placeholderText: {
    fontSize: 14,
    color: "#444",


  }


})