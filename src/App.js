import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function AppCurriculo() {

  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu linkedin:','https://www.linkedin.com/in/juliocrodrigues/')
        break
      case 'github':
        Alert.alert('Meu github:','https://github.com/JulioCRodrigues')
        break
      case 'facebook':
        Alert.alert('Meu facebook:','Rede indisponível no momento!')
        break
    }
  }

  return (
    <View style={style.page}>
      <View style={style.containerCabecalho}>
        <Image source={require('../assets/perfil.jpg')} style={style.foto} />
        <Text style={style.nome}>Julio Rodrigues</Text>
        <Text style={style.funcao}>Desenvolvedor Mobile</Text>
        <View style={style.contatos}>
          <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Icon name="github" size={30} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
            <Icon name="linkedin" size={30} />

          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
            <Icon name="facebook" size={30} />

          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={style.card_container}>
          <View style={style.card}>

            <View style={style.card_header}>
              <Text>Experiência Profissional</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Magazine Luiza</Text>

            </View>

          </View>
          <View style={style.card}>

            <View style={style.card_header}>
              <Text>Formação Acadêmica</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Fatec - Análise e Densenvolvimento de Sistemas</Text>
              <Text style={style.card_content_text}>Fatec - Desenvolvimento Software Multiplataforma</Text>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({

  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,

  },

  containerCabecalho: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  foto: {
    width: 175,
    height: 175,
    borderRadius: 125
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10

  },

  funcao: {
    color: '#939393',
    marginBottom: 10,
    marginTop: 10
  },

  contatos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 20
  },

  card_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },

  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#939393',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,


  },

  card_content: {
    marginTop: 20,

  },

  card_content_text: {
    color: '#939393',
    marginBottom: 10
  }
})
