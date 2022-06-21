import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = "#C9D1D9";
const colorDarkFontGithub = '#4F565E';

const imageProfile = 'https://mir-s3-cdn-cf.behance.net/projects/404/d4ba0348411353.Y3JvcCw3MDYsNTUyLDI3LDA.png';

const urlToMyGithub = 'https://github.com/MarcioMaso';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('VERIFICANDO LINK');
        const res = await Linking.canOpenURL(urlToMyGithub);
        console.log('LINK APROVADO');
        console.log('ABRINDO O LINK');
        if(res){
            await Linking.openURL(urlToMyGithub);
        }

    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={'#010409'} barStyle="light-content" />
            <View style={style.content}>
                <Image
                accessibilityLabel='Marcio com cara de Patolino'
                style={style.avatar} 
                source={{uri: imageProfile}} 
                />
                <Text accessibilityLabel='Nome: Marcio Maso' style={[style.defaultText, style.name]}>Marcio Maso</Text>
                <Text accessibilityLabel='Nickname: marciomaso' style={[style.defaultText, style.nickName]}>marciomaso</Text>
                <Text accessibilityLabel='descrição: Recém formado em Analise e Desenvolvimento de Sistemas' style={[style.defaultText, style.descricao]}>Recém formado em Analise e Desenvolvimento de Sistemas
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>
                            OPEN GITHUB
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: '#010409',
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
        // flexDirection: 'row';, muda para lado a lado
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 75,
        borderColor: 'red',
        borderWidth: 5,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 25,
    },
    nickName: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    descricao: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },
})