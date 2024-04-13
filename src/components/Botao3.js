import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Botao3 = (props) => {

  const texto = props.texto

  return (
    <TouchableOpacity style={estilo.fundo} onPress={props.funcao}>
      <Text style={estilo.texto}>{texto}</Text>
    </TouchableOpacity>
  )
}

const estilo = StyleSheet.create({
  fundo: {
    backgroundColor: '#B0CCDE',
    height: 37,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'AveriaLibre-Regular',
    textAlign: 'center',
    justifyContent: 'center',
  },
})

export default Botao3
