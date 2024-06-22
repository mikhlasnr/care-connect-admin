import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { docterReducer } from './docter/docter.reducer'
import { poliReducer } from './poli/poli.reducer'

export const store = configureStore({
  reducer: {
    docter: docterReducer,
    poli: poliReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
