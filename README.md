Redux:
-> Estado inicial: {
  usuario_logado: false
}

Para manipular o estado inicial:
-> ação (descrever oq mudou) -> reducer (vai ser responsavel por alterar o estado) -> newState = state (pegar o estado antigo e copiar para um estado novo com as modificações)-> newState (vai retornar o estado novo)

Redux-saga --- trabalhar com o backend (com coisas assincronas)
ação (request) -> saga (vai fazer a verificação se deu success ou fail) -> reducer -> success/fail
