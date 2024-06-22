import { PoliItem } from './poli.types'
import { v4 as uuidv4 } from 'uuid'

export const poliList: PoliItem[] = [
  { id: uuidv4(), name: 'Poli Umum' },
  { id: uuidv4(), name: 'Poli Kandungan' },
  { id: uuidv4(), name: 'Poli Penyakit Dalam' },
  { id: uuidv4(), name: 'Poli THT' },
  { id: uuidv4(), name: 'Poli Mata' },
]
