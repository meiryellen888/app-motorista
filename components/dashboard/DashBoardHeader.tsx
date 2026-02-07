import { StyleSheet, Text, View } from "react-native";

/** Props do componente DashBoardHeader
 * @param appName - Name do Aplicativo a exixtir
 * @param userName - Nome do usuario logado
 */
type Props = {
    appName : string;
    userName : string;
}

/** DashBoardHeadr: Cabeçalho personalizado do dashboard
 * Exibir o nome do app, nome do usuario, e o avatar circular com a inicial do nome
 */
export default function DashBoardHeader ({appName,userName}: Props) {


    const initial = (userName?.trim()?.[0] || "U").toUpperCase();

  return (
    <View style={styles.container}>
        <View style={styles.bg}/>
        {/** Row contendo informações do usuario e o Avatar */}
        <View style={styles.row}>

            <View style={styles.left}>
                {/** textos: nome do app e nome do usuario */}
                <Text style= {styles.appName}>{appName}</Text>
                <Text style= {styles.userName}>{userName}</Text>  
            </View>
             {/** avatar circular com a iniciar do usuario */} 
            <View style={styles.avatar}>   
                <Text style={styles.avatarTexto}>{initial}</Text>
            </View>


        </View>

    </View>
  )

}

const styles = StyleSheet.create({
        container : {
         height: 140, // altura fixa do header
         backgroundColor: "#0B63CE", // cor fundo azul
         overflow: "hidden", // corta o conteudo que ultrapassar os limites


        },

        // Fundo com overlay semi-transparente
        bg :{
            ...StyleSheet.absoluteFillObject,
            opacity: 0.18,
            backgroundColor: "#0A5BBE",


        },

        row: { 
           flex: 1, 
           paddingHorizontal: 16,
           paddingTop: 18,
           flexDirection: "row",
           alignItems: "center",
           justifyContent: "space-between",

        },

        left: {
            gap: 6
        },

        appName: {
            color: "#E9F2FF",
            fontSize: 16,
            fontWeight: "800",
        },

        userName: {
            color: "#E9F2FF",
            fontSize: 20,
            fontWeight: "800",
        },

        avatar: {
            width: 54,
            height: 54,
            borderRadius: 27, // faz um circul (metade da altura/largura)
            backgroundColor: "#EAF2FF",
            alignItems: "center",   
            justifyContent: "center",

        },

        avatarTexto : {
            fontSize: 20,
            fontWeight: "800",
            color: "#0B63CE"


        }


    })