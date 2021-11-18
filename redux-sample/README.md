# redux-sample

## Conceitos Redux

1. Store

   - imutabilidade: container imutavel
   - alteracoes sao realizados por funcoes puras: via evolucao do estado
   - single source of truth

2. Reducers

   - funcao pura
   - funciona como filtros recebendo e tratando informacoes, e enviando a store
   - function reducer(state, action): return newState

3. Actions

## Install

`yarn add redux react-redux`

## Redux Hooks

- useSelector
- useDispatch

## Redux Toolkit (@reduxjs/toolkit)

`yarn add @reduxjs/toolkit`

- createSlice
- configureStore
