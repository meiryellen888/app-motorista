import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";


/** Tipo que de fine a estrutura de dados de um veiculo */

type Veiculo = {
    id: string;  // Identificador Unico
    brand: string; // marca do veiculo
    model: string; // modelo do veiculo
    placa: string; // placa do veiculo
    motorista: string; // nome do motorista
    localização: string; // localização atual
    image: ImageSourcePropType // Imagem do veiculo 
};

/** Props do componente Veiculo */
type Props = { 
    veiculo: Veiculo; // Dados do veiculo a exibir
}

export default function VeiculoCArd ({veiculo}: Props) {
    return(
        <View style= {styles.card}>
        <View style={styles.left}>
        <Text style= {styles.brad}> {veiculo.brand}</Text>
        <Text style= {styles.model}> {veiculo.model}</Text>
       
       {/** bloco com metadados: placa do motorista */}
        <View style={styles.meta}>
            <Text style= {styles.metaText}>{veiculo.placa}</Text>
            <Text style= {styles.metaText}>{veiculo.motorista}</Text>


        </View>
          {/** localização do veiculo */}
          <Text style={styles.localizacao}> {veiculo.localizacao}</Text>


            </View>
         {/** Imagem do veiculo alinhada a direita */}
            <Image
            source={veiculo.image}
            style={styles.image}
            resizeMode="contain"
            />
        </View>
    )


}

const styles = StyleSheet.create ({

    // Card principal com as imagens e textos

    card: {
        height: 190, // altura fixa
        borderRadius: 22, // Cantos Arredondados
        padding: 16, // espaçamento interno
        backgroundColor: "#1e90ff", // fundo azul
        overflow: "hidden", // corta conteudo que ultrapassa
        flexDirection: "row", // disposição em linha
        alignItems: "flex-end", // Alinha os itens no final verticalmente
        justifyContent: "space-between", // Espaçamento do inicio e final dos itens
    }
        
})