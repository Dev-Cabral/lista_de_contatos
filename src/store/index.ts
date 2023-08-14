import { configureStore } from '@reduxjs/toolkit'
import tarefasReducer from './Reducers/tarefas'
import filtroReducer from './Reducers/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasReducer,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
