import { StyleSheet, Text, View } from "react-native";

export default function AlertaScreen() {
    return(
        <View style= {styles.container}>
            <Text style={styles.text}>
                Tela de Alerta
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",

    },

    text: {
        fontSize: 18,
        fontWeight: "700",
    }
})