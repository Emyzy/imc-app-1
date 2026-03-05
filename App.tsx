import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import{ Topo } from './components/Topo';
import{Resultado} from './components/Resultado';

export default function App() {
    // HOOK
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [imc, setIMC] = useState<number | null>(null);
    const [classificacao, setClassificacao] = useState<string | null>(null);

    function calcularIMC(){
        let imcCalculado = parseFloat(peso) / (parseFloat(altura)*parseFloat(altura));
        
        setIMC(imcCalculado);
        
        if(imcCalculado < 18.5){
            setClassificacao("Abaixo do peso");
        }else if(imcCalculado < 25){
            setClassificacao("Peso normal");
        }else if(imcCalculado < 30){
            setClassificacao("Sobrepeso");
        }else{
            setClassificacao("Obeso");
        }
    }
    
    return (
        <View style={styles.container}>
            <Topo/>

            <View style={styles.form}>
                <Text style={styles.label}>Peso</Text>
                <TextInput style={styles.input} onChangeText={setPeso}></TextInput>
                
                <Text style={styles.label}>Altura</Text>
                <TextInput style={styles.input} onChangeText={setAltura}></TextInput>

                <TouchableOpacity style={styles.btn} onPress={calcularIMC}>
                    <Text style={styles.btnText}>Calcular</Text>
                </TouchableOpacity>

                //PROPS
                <Resultado resultadoIMC={imc}/>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#06C',
    },
    form: {
        backgroundColor: '#FFF',
        height: '100%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 30
    },
    label: {
        fontSize: 22,
        marginBottom: 10
    },
    input: {
        backgroundColor: '#DDD',
        borderRadius: 10,
        fontSize: 22,
        padding: 10,
        height: 60,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#F90',
        padding: 15,
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    btnText: {
        color: '#FFF',
        fontSize: 22
    },
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
});
