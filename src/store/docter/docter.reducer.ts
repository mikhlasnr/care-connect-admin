import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

import { DocterInitStateProps, DoctorCreate, DoctorItem } from './docter.types'
import { doctorsListDataInit } from './doctor.utils'

const docterInitState: DocterInitStateProps = {
  doctorList: doctorsListDataInit,
  selectedDoctor: null,
  isDoctorFormShow: false,
}

export const docterSlice = createSlice({
  name: 'docter',
  initialState: docterInitState,
  reducers: {
    addDoctorList: (state, action: PayloadAction<DoctorCreate>) => {
      const newDoctorItem: DoctorItem = {
        ...action.payload,
        id: uuidv4(),
        password: 'password123',
      }
      state.doctorList = [...state.doctorList, newDoctorItem]
    },
    updateDoctorList: (state, action: PayloadAction<DoctorItem>) => {
      const newDoctorList = state.doctorList.map((doctor) => {
        if (doctor.id === action.payload.id) {
          return action.payload
        }
        return doctor
      })
      state.doctorList = newDoctorList
    },
    removeDoctorList: (state, action: PayloadAction<{ doctorId: string }>) => {
      state.doctorList = state.doctorList.filter(
        (doctor) => doctor.id !== action.payload.doctorId,
      )
    },
    setSelectedDoctor: (state, action: PayloadAction<DoctorItem>) => {
      state.selectedDoctor = action.payload
    },
    removeSelectedDoctor: (state) => {
      state.selectedDoctor = null
    },
    toggleShowDoctorForm: (state) => {
      state.isDoctorFormShow = !state.isDoctorFormShow
    },
  },
})

export const {
  addDoctorList,
  setSelectedDoctor,
  removeSelectedDoctor,
  toggleShowDoctorForm,
  removeDoctorList,
  updateDoctorList
} = docterSlice.actions

export const docterReducer = docterSlice.reducer
