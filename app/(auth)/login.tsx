import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


/** login - tela de autenticação do app 
 Permite que o usuário entre com as suas credenciais
 */
export default function Login() {

    // FuseState é um Hook do react que cria uma variavel do estado
    // Retorna um array com elementos: [ValorAtual, FunçãoParaAtualizarOValor]
    // useState("") cria uma variavel de estado inicializada com string vazia
    // usuario armazena o valor atual do campo de usuário
    // setusuario é a função que atualiza o valor de usuario

    // Função chamada ao pressionar o botão entrar
    const [ senha, setSenha] = useState ("");
    const [usuario, setusuario] = useState("");

    // Função chamada ao pressionar o botão entrar
    const onEntra = () => {
        console.log("Usuário:", usuario);
        console.log("Senha:", senha);
     
        //TODO: desvalidar e autenticamos de verdade no beckend
        router.replace("/(tabs)"); // Navega para as abas principais do app
    }

    
    return (

        // SafeAreaView evita que o conteúdo fique sobre a barra de status
        <SafeAreaView
            style={styles.safe}
        >
            {/** keyboardAvoidView ajusta o Layout quando o teclado aparece */}
            <KeyboardAvoidingView
                style={styles.screen}
                // behavior define COMO o componente se ajusta ao teclado
                // "padding" (IOS) = adiciona espaçamento na parte inferior
                // "height" (Android) = ajuste a altura do componente
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                {/* card principal que contem o formulário*/}
                <View
                    style={styles.card}
                >
                    <ImageBackground
                        source={{
                            uri: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60%22"
                        }}

                        style={styles.bg}
                        imageStyle={styles.bgImage}

                    >
                        {/* Overlay semi transparente sobre a imagem de fundo */}
                        <View style={ styles.overlay}>

                            <View style= {styles.content}>
                                {/** Titulo da tela de login */}
                           <Text style= {styles.bigTitle}> Bem Vindo  {"\n"} de Volta</Text>

                           {/** Subtitulo da tela de login */}
                           <Text style={styles.subtitle}> Faça login para {"\n"} acessar o app do Motorista 
                           </Text>

                           {/** Campo de entrada do usuário */}
                           <View style={ styles.inputRow}>

                            <TextInput
                            value= {usuario} // valor controlado pelo estado
                            onChangeText= {setusuario} // atualiza o estado quando o texto muda
                            placeholder= "Usuário" 
                            placeholderTextColor= "#333"
                            style= {styles.input}
                            autoCapitalize= "none" // desativa maiúsculas automáticas


                            />
                            {/** Icone de usuário */}
                            <Ionicons name= "happy-outline" size= {22} color= "#333" />

                           </View>

                           {/** Linha inferior do campo de entrada */}
                           <View style={styles.underline}/>

                           <View style= { styles.inputRow}>
                            <TextInput 
                              value= {senha} // valor controlado pelo estado
                              onChangeText= {setSenha} // atualiza o estado quando o texto muda
                              placeholder= "Senha"
                              placeholderTextColor= "#333"
                              style= {styles.input}
                              secureTextEntry // oculta o texto digitado (campo de senha)

                            />

                            <Ionicons name= "checkmark" size= {22} color="#333" />
                            {/** Linha inferior do campo de entrada */}
                            <View style= {styles.underline}/>

                           </View>

                           {/** Botão de login */}
                           {/** Pressable é componente que detecta toques */}
                           {/** onPress é a função chamada quando o botão é pressionado */}
                           <Pressable style={ styles.button} onPress= {onEntra}>

                            <Text style= {styles.buttonText}> Entrar  </Text>

                           </Pressable>

                            </View>
                            

                        </View>


                


                    </ImageBackground>

                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    safe: {
        flex: 1, // ocupa toda altura da tela
        backgroundColor: "#ECECEC", // cor de fundo cinza claro da tela
    },
    screen: {
        flex: 1, // ocupa toda altura da tela 
        alignItems: "center", // centraliza horizontalmente
        paddingTop: 65, // espaçamento superior
        paddingHorizontal: 18, //  Espaçamento lateral
    },
    card: {
        width: "100%", // ocupa toda largura disponível
        maxWidth: 360, // largura maxima do card (para telas maiores)
        height: 640, // altura fixa do card
        backgroundColor: "#fff", // cor de fundo branca
        overflow: "hidden", // cortar o conteúdo que sair dos limites da tela
        elevation: 3, // sombra para android
        shadowColor: "#000", // sombra para IOS
        shadowOpacity: 0.12, // opacidade da sombra
        shadowOffset: { width: 0, height: 4 } // deslocamento da sombra
    },
    bg: {
        flex: 1, // ocupa todo o espaço do card
    },
    bgImage: {
        opacity: 0.22, // opacidade fica semi-transparente (22% de opacidade)
        transform: [{ scale: 1.08}] // zoom leve de 8% na imagem

    },
    overlay: {
        // os tres pontinhos "..." servem para copiar todoas as propriedades de um objeto (exe: absoluteFillObject)
        // StyleSheet.absoluteFillObject é um objeto que contem as propriedades para preencher para preencher todo o espaço do pai com posion: 
        // "absolute", top: 0, left:0, right: 0,  

        ...StyleSheet.absoluteFillObject, // preenche todo o espaço do pai
        backgroundColor: "rgba(255, 255, 255, 0.55)", // branco semi-transparente (55% de opacidade)

    },

    content :{
        flex: 1, // ocupa todo o espaço disponível
        paddingHorizontal: 26, // espaço lateral
        paddingTop: 62, // espaçamento superior
    },
    
    bigTitle: {
        fontSize: 44, // tamanho da fonte
        fontWeight: "800", // extra negrito
        color: "#111", // cor de texto quase preto
        lineHeight: 50, // espaçamento entre as linhas
        textAlign: 'center', // 
        marginBottom: 22,

    },

    subtitle: {
        fontSize: 16, // tamanho de (texto médio)
        color: "#333", 
        textAlign: "center", // alinha texto ao centro
        lineHeight: 22, 
        marginBottom: 46,
    },

    inputRow: {
        flexDirection: "row", // organiza TextInput e icone lado a lado
        alignItems: "center", // alinhar intens ao centro
        justifyContent: "space-between",
        paddingVertical: 12, 
    },
    
    input: {
       flex: 1,
       fontSize: 18,
       color: "#111",
       paddingRight: 12,
    },

    underline: {
        height: 1.4, // altura da linha
        backgroundColor: "#4B3f72",
        opacity: 0.65,
        marginBottom: 22, 
    },

    button: {
        marginTop: 26,
        backgroundColor: "#0A84FF",
        paddingVertical: 14, 
        borderRadius: 999,
        alignItems: "center",
    },

    buttonText : {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
    },

})