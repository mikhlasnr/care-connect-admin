import dayjs from 'dayjs'
import { poliList } from '../poli/poli.utils'
import { DoctorItem } from './docter.types'
import { v4 as uuidv4 } from 'uuid'

export const doctorsListDataInit: DoctorItem[] = [
  {
    id: uuidv4(),
    name: 'Dr. Ahmad Fauzi',
    date: dayjs('2000-01-01').format('YYYY-MM-DD'),
    phone: '081234567890',
    nip: '19870012345678',
    gender: 'pria',
    poliId: poliList[0].id,
    poliName: poliList[0].name,
    email: 'ahmad.fauzi@example.com',
    password: 'password123',
  },
  {
    id: uuidv4(),
    name: 'Dr. Siti Nurhaliza',
    date: dayjs('2000-01-01').format('YYYY-MM-DD'),
    phone: '082345678901',
    nip: '19930023456789',
    gender: 'wanita',
    poliId: poliList[1].id,
    poliName: poliList[1].name,
    email: 'siti.nurhaliza@example.com',
    password: 'password456',
  },
  {
    id: uuidv4(),
    name: 'Dr. Budi Santoso',
    date: dayjs('2000-01-01').format('YYYY-MM-DD'),
    phone: '083456789012',
    nip: '19760034567890',
    gender: 'pria',
    poliId: poliList[2].id,
    poliName: poliList[2].name,
    email: 'budi.santoso@example.com',
    password: 'password789',
  },
  {
    id: uuidv4(),
    name: 'Dr. Dewi Anggraini',
    date: dayjs('2000-01-01').format('YYYY-MM-DD'),
    phone: '084567890123',
    nip: '19890045678901',
    gender: 'wanita',
    poliId: poliList[3].id,
    poliName: poliList[3].name,
    email: 'dewi.anggraini@example.com',
    password: 'password101',
  },
  {
    id: uuidv4(),
    name: 'Dr. Hendra Wijaya',
    date: dayjs('2000-01-01').format('YYYY-MM-DD'),
    phone: '085678901234',
    nip: '19710056789012',
    gender: 'pria',
    poliId: poliList[4].id,
    poliName: poliList[4].name,
    email: 'hendra.wijaya@example.com',
    password: 'password202',
  },
]
