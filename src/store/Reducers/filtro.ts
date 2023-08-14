import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type filtroState = {
  termo?: string
  contato: string
  valor: string
}

const initialState: filtroState = {
  termo: '',
  contato: '',
  valor: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alteraTermo } = filtroSlice.actions

export default filtroSlice.reducer
