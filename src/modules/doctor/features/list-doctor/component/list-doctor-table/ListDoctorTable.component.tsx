'use client'

import {
  removeDoctorList,
  setSelectedDoctor,
  toggleShowDoctorForm,
} from '@/store/docter/docter.reducer'
import { DoctorItem } from '@/store/docter/docter.types'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import type { PopconfirmProps, TableProps } from 'antd'
import { Button, Popconfirm, Space, Table, Tooltip, message } from 'antd'

export const ListDoctorTable = () => {
  const dispatch = useAppDispatch()
  const doctorList = useAppSelector((state) => state.docter.doctorList)

  // START HANDLE DELETE
  const handleDelete = (doctorId: string) => {
    dispatch(removeDoctorList({ doctorId }))
    message.success('Data Berhasil Dihapus')
  }

  const cancel: PopconfirmProps['onCancel'] = (e) => {
    console.log(e)
  }
  // END HANDLE DELETE

  // START HANDLE UPDATE
  const handleUpdate = (doctorItem: DoctorItem) => {
    dispatch(setSelectedDoctor(doctorItem))
    dispatch(toggleShowDoctorForm())
  }
  // END HANDLE UPDATE

  const columns: TableProps<DoctorItem>['columns'] = [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Umur',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Poli',
      dataIndex: 'poliName',
      key: 'poliName',
    },
    {
      width: 80,
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Ubah">
            <Button
              icon={<EditOutlined />}
              onClick={() => handleUpdate(record)}
            />
          </Tooltip>
          <Tooltip title="Hapus">
            <Popconfirm
              title="Hapus akun dokter"
              description="Apakah Anda yakin ingin menghapus akun dokter ini?"
              onConfirm={() => handleDelete(record.id)}
              onCancel={cancel}
              okText="Hapus"
              cancelText="Batal"
            >
              <Button danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ]

  return (
    <Table
      columns={columns}
      dataSource={doctorList}
      rowKey={(record) => record.id}
    />
  )
}
