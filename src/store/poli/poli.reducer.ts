import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { PoliInitStateProps, PoliItem } from './poli.types'
import { poliList } from './poli.utils'

const poliInitState: PoliInitStateProps = {
  poliList: poliList,
}

export const poliSlice = createSlice({
  name: 'poli',
  initialState: poliInitState,
  reducers: {
    // addPoliList: (state, action: PayloadAction<PoliItem>) => {
    //   state.poliList = [...state.poliList, action.payload]
    // },
  },
})

export const {} = poliSlice.actions

export const poliReducer = poliSlice.reducer
