import {Text, View, StyleSheet} from "react-native"

export function Resultado(props: {resultadoIMC: number}){
    return(
         <View style={styles.resultado}>
                <Text style={styles.labelResultado}>Seu IMC:</Text>
                <Text style={styles.imc}>{props.resultadoIMC?.toFixed(2)}</Text>
            {/* para segunda */}
            </View>
    )
}

const styles = StyleSheet.create({

    resultado: {
        backgroundColor: '#EEE',
        padding: 20,
        borderRadius: 20
    },
    labelResultado: {
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10
    },
    imc: {
        backgroundColor: '#FFF',
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
        borderRadius: 10,
        marginBottom: 10
    },
    classificacao: {
        backgroundColor: '#F00',
        color: '#FFF',
        textAlign: 'center',
        padding: 10,
        fontSize: 24,
        borderRadius: 10,
        marginBottom: 10
    }
}
)