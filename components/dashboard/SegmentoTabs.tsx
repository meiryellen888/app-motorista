
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props<T extends string>  = {
    items: T[]; // Array de opções (ex: [veiculos, mapas, alertas])
    ativo:T; // opção ativa atualmente
    onChange: (item: T) => void; // callback quando opção é clicada
};

export default function SegmentoTabs< T extends string> ({items,ativo, onChange}: Props<T>){
return (
    <View style={styles.row}>
        {/** Mapeia cada item e cria um botão tipo "pilula" */}
        {items.map((item) => {

        {/** Define se este item é ativo */}
          const isAtivo = item === ativo; 

          return (
            <Pressable
             key={item}
             onPress={() => onChange(item)} // chama callback ao clicar
             style={[
                styles.chip, // Estilo Base
                isAtivo ? styles.chipAtivo : styles.chipInativo // Estilos condicionais
             ]}
            >
                <Text
                   style={[
                    styles.chipTexto,  // estilo base do texto
                    isAtivo ? styles.chipTextoAtivo : styles.chiptextoInativo  // estilos do texto condicional
                   ]}
                >
                    {item}
                </Text>

            </Pressable>
          );

        })}
    </View>
)
}

const styles = StyleSheet.create ({
    
    // container principal - distribui abas em linhas
    row: {
        flexDirection: "row", // diposição horizontal (linha)
        gap: 10, // espaçamento entre as abas
        flexWrap: "wrap", // quebra de linha se necessario
        justifyContent: "center", // centralizar horizontalmente

    },

    // Estilo base de cada aba
    chip: {
        paddingHorizontal: 14, // espaçameto lateral
        paddingVertical: 8, // espaçamento vertival
        borderRadius: 18, // faz um fomrato arredondado nas bordas
        borderWidth: 1.5, // faz uma borda visivel
    },

    // Aba ativa (selecionada)
    chipAtivo :{
        backgroundColor: "#0b63ce",
        borderColor: "#0b63ce",
    },

    //Aba intativa
    chipInativo: {
        backgroundColor:"#ffff",
        borderColor: "#6b7280",
    },

    // Texto base das abas
    chipTexto : {
        fontSize: 14,
        fontWeight: "700",
    },

    // Texto quando a Aba esta ativa
    chipTextoAtivo: {
        color: "#ffff",
    
    },

    // Texto quando a Aba esta inativa 
    chiptextoInativo: {
        color: "#111827", 
    },
})