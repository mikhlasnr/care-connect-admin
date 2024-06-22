import { Dayjs } from "dayjs"

export interface DoctorItem {
  id: string
  name: string
  phone: string
  nip: string
  date: string
  gender: 'pria' | 'wanita'
  poliId: string
  poliName: string
  email: string
  password: string
}

export interface DoctorCreate {
  name: string
  phone: string
  nip: string
  date: string
  gender: 'pria' | 'wanita'
  poliId: string
  poliName: string
  email: string
}
export interface DocterInitStateProps {
  doctorList: DoctorItem[]
  selectedDoctor: DoctorItem | null
  isDoctorFormShow: boolean
}
